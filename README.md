# Pluto Supabase Shop Template

> [!WARNING]
> This is a work in progress. Expect breaking changes until stable version.

This is a simple e-commerce template built with Nuxt 3 + Pluto CMS. It provides a basic structure for an online store, including product listing, categories, and a shopping cart.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Styling

This app owns the only Tailwind build. Pluto layers do not register their own. Keep these
three imports at the start of `app/assets/css/tailwind.css`, and add your own theme after
them:

```css
@import 'tailwindcss';
@import '@nuxt/ui';
@import '#build/pluto.css';
```

`#build/pluto.css` brings in the CSS of every Pluto layer, including the admin theme. The
admin keeps its own palette, so your site theme does not change it.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
