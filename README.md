# hono-bun-openid 🔥

Bun (hono x openid-connect) 

## Overview 🎲

This project is a sample implementation of an OpenID Connect (OIDC) provider with [Hono API](https://hono.dev) framework in [Bun](https://bun.sh) runtime.

## Prerequisites ⧨

- [Bun](https://bun.sh/)
- [Hono](https://hono.dev/)
- [Keycloak](https://www.keycloak.org/) | [Auth0](https://auth0.com/)

## Getting Started 🚀

### 1. Clone this repository

```bash
$ git clone https://github.com/BRAVO68WEB/hono-bun-openid
```

### 2. Install dependencies

```bash
$ cd hono-bun-openid
bun install
```

### 3. Edit `.env` file

```bash
AUTH0_DOMAIN=
NODE_ENV=
PORT=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_AUDIENCE=
AUTH0_ISSUER=
AUTH0_REDIRECT_URI=
AUTH0_JWKS_URI=
```

### 4. Run

```bash
$ bun dev
```

## License 📄

MIT

## References 📚

- [Hono](https://hono.dev/)
- [Bun](https://bun.sh/)
- [node-openid-client](https://github.com/panva/node-openid-client/)
- [node-jose](https://github.com/panva/jose)

## Author 👨‍💻

[@BRAVO68WEB](https://github.com/BRAVO68WEB)
