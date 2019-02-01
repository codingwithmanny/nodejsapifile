# NodeJS API File
Simple NodeJS API that serves sample files to download and interpret.

## Requirements
- node 10.15.0
- yarn 1.13.0 or npm 6.5.0

## Local Environment Instructions

Within directory, install dependencies:

```bash
yarn install;
// or npm install;
```

Start server:

```bash
yarn start;
// or npm start;
```

Port is set to `50011.

## Usage

The rout endpoint expects a query params of `?file=`.

The following are supported formats:

- `?file=csv`
- `?file=jpg`
- `?file=png`
- `?file=pdf`
- `?file=xlsx`

When one of these requests are made the file will automatically start downloading.
