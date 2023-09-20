import { generators } from 'openid-client';

import { authClient } from '../helpers/auth_client';

export const code_verifier = generators.codeVerifier();
export const code_challenge = generators.codeChallenge(code_verifier);

export const signon = () => {
    const authurl = authClient.authorizationUrl({
        scope: "openid profile email",
        code_challenge,
        code_challenge_method: "S256",
        audience: process.env.AUTH0_AUDIENCE,
        max_age: 60 * 60 * 24 * 7,
        prompt: "concent",
        response_type: "code",
    });

    return {
        authurl
    };
}