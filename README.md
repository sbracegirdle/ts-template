# Simon's Typescript Template

Opinionated template for creating Typescript-based Nodejs projects. Useful for TS-based scripts, web servers, lambda functions etc.

Includes configurations for:

- Language; `typescript` (including `ts-node`)
- Linting (pre-commit); `eslint`
- Bundling; `webpack`, `ts-loader`
- Formatting (pre-commit); `prettier`, `husky`
- Unit testing; `mocha`, `chai`, `sinon`
- Feature testing; `cucumber-js`
- Dependency maintenance; `npm-check`, `npm audit`
- NPM script tools; `npm-run-all`

## Installation and pre-requisites

Recommended NodeJS 12+

```bash
git clone git://github.com/sbracegirdle/ts-template.git my-project
cd my-project
rm -rf ./git
npm install
```

## How to run locally

```bash
npm run start
```

## How to test

```bash
npm run test
```

## How to lint

```bash
npm run lint
```

## How to build

```bash
npm run build
```

## How to create distribution (zip)

```bash
npm run dist
```

## Check dependencies

Checks for vulnerabilities (`npm audit`) and out of date packages (`npm-check`).

```bash
npm run check
```

## Upgrade dependencies

```bash
npm run upgrade
```

## License

MIT License
