import { Context, Next } from "hono";

import verify from "./verify";

export const middleware = async (ctx: Context, next: Next) => {
    try {
        let authHeader: string = ctx.req.header("authorization") as string;
        authHeader = authHeader.split(" ")[1];

        if (!authHeader) {
            throw new Error("No authorization header");
        }
        const token: string = authHeader;
        const { payload: user } = await verify(token);

        if (!user) {
            throw new Error("No user");
        }

        ctx.set("user", {
            userData: user,
        });

        await next();
    } catch(error) {

        console.log(error);

        return ctx.json({
            message: "You're not authorized to access this resource",
        });
    }
};