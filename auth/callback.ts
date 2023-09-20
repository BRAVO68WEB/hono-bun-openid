import { authClient } from "../helpers/auth_client";
import { code_verifier } from "./signin";

export const callbackOn = async (cq: any) => {
    return authClient.callback(
        process.env.AUTH0_REDIRECT_URI,
        {
            code: cq.code,
        },
        { 
            code_verifier,
        },
    );
};