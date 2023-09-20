import AUTH0 from "../config/auth0";

const authClient = new AUTH0.Client({
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    redirect_uri: process.env.AUTH0_REDIRECT_URI,
    response_types: ["code"],
    id_token_signed_response_alg: "RS256",
    token_endpoint_auth_method: "client_secret_post",
    authorization_signed_response_alg: "RS256",
    userinfo_signed_response_alg: "RS256",
    token_endpoint_auth_signing_alg: "RS256",
    jwks_uri: process.env.AUTH0_JWKS_URI,
    issuer: process.env.AUTH0_ISSUER,
});

export {
    authClient
};