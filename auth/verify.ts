import * as jose from "jose";

const JWKS = jose.createRemoteJWKSet(new URL(`https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`))

const verify = async (token: string) =>  {
    return jose.jwtVerify(token, JWKS)
}

export default verify