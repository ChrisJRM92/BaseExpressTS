# BaseExpressTS
Base configuration for Express with Typescript clean arquitecture

# Libraries used
- Express
- @types/express
- Typescript
- @types/node
- ts-node-dev
- rimraf
- morgan
- dotenv
- env-var

# Config tsconfig.json
npx tsc --init --outDir dist/ --rootDir src

# Config package.json
Add script section config
"dev": "tsnd --respawn src/app.ts",
"build": "rimraf ./dist && tsc",
"start": "npm run build && node dist/app.ts"

# run environment dev
npm run dev