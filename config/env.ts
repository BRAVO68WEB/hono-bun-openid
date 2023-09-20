import { z } from "zod";

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}

const envSchema = z.object({
    NODE_ENV: z.string(),
    PORT: z.string(),
    AUTH0_DOMAIN: z.string(),
    AUTH0_CLIENT_ID: z.string(),
    AUTH0_CLIENT_SECRET: z.string(),
    AUTH0_AUDIENCE: z.string(),
    AUTH0_ISSUER: z.string(),
    AUTH0_REDIRECT_URI: z.string(),
    AUTH0_JWKS_URI: z.string(),
});

export const env = envSchema.parse(process.env);