import { Issuer } from "openid-client";

const auth0Issuer = await Issuer.discover(`https://${process.env.AUTH0_DOMAIN}/.well-known/openid-configuration`);

export default auth0Issuer;