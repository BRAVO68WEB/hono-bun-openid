import { Context } from "hono";

import {
    signon,
    callbackOn
} from "../auth";

export default class AuthController {
    public signin = (ctx: Context) => {
        const { authurl } = signon();
        return ctx.redirect(authurl);
    };

    public callback = async (ctx: Context) => {
        try {
            const cq = ctx.req.query();
            const response = await callbackOn(cq);
            return ctx.json(response);
        } catch (error) {
            console.log(error);
            return ctx.json("Callback Failed");
        }
    };

    public me = (ctx: Context) => {
        const user = ctx.get("user");
        return ctx.json(user.userData);
    };
}