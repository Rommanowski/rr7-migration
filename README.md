# Kotlin Website — React Router 7 Migration

Migration of the Kotlin website homepage from Flask + React 17 + Webpack to React Router 7 with React 18, Vite, and SSR.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm start
```

The app runs at `http://localhost:3000`.

## Docker

```bash
docker build -t kotlin-rr7 .
docker run -p 3000:3000 kotlin-rr7
```
