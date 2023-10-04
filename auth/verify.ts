// import jose from "jose";
import JwksClient from "jwks-rsa";
import JsonWebToken, { JwtHeader } from "jsonwebtoken";

const client = JwksClient({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
})

const keySets: any = await client.getKeys();

export const certToPEM = (cert: string) => {
    cert = cert.match(/.{1,64}/g)!.join('\n')
    cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
    return cert;
}

export const verifySession = (token: string) => {
    const decoded = JsonWebToken.decode(token, { complete: true }) as { header: JwtHeader, payload: any };
    const kid = decoded.header.kid;

    const keySet = keySets.find((key: { kid: string; }) => key.kid === kid);

    if (!keySet) {
        throw new Error("No key set");
    }

    const signingKey = certToPEM(keySet.x5c[0]);
    return JsonWebToken.verify(token, signingKey);
}

// const JWKS = jose.createRemoteJWKSet(new URL(`https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`))

// export const verifySession = async (token: string) => {
//     const { payload } = await jose.jwtVerify(token, JWKS, {
//         issuer: `https://${process.env.AUTH0_DOMAIN}/`,
//         audience: process.env.AUTH0_AUDIENCE,
//         algorithms: ["RS256"],
//     });

//     return payload;
// }