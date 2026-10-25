# Pluto Supabase Shop Template

> [!WARNING]
> This is a work in progress. Expect breaking changes until stable version.

This is a simple e-commerce template built with Nuxt 4 + Pluto CMS. It provides a basic structure for an online store, including product listing and categories. The admin manages products and product media.

The app extends only `@plutocms/supabase-shop`, as `[['@plutocms/supabase-shop', { install: true }]]`. That layer brings `@plutocms/supabase`, `@plutocms/pluto` and `@plutocms/ui`, so the `package.json` does not list them.

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

## Team and email (optional)

Admins invite the team under Settings > Users. It works with no setup: Supabase sends the
emails. Supabase's built-in mailer sends only to members of your Supabase organization, and only
a few emails per hour. To invite anyone, open Settings > Email in the admin and follow the steps.
They use Resend, which has a free plan.

These optional variables go in the environment of the running server, never in the build
environment:

```bash
# The Supabase secret key. Invites then use Supabase's invite API, and
# "Copy invite link" is available.
NUXT_SUPABASE_SECRET_KEY=

# Pluto mail with Resend (Settings > Email shows the exact lines).
NUXT_PLUTO_MAIL_RESEND_API_KEY=
NUXT_PLUTO_MAIL_FROM="Your Shop <hello@your-domain.com>"
```

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
