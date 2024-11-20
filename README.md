# STRUCTURE

- /components
    - /app
    - /app/footer.vue
    - /app/header.vue
    - /app/menu.vue
    - /app/error

- /button
    - /button/burger.vue
    - /button/icon.vue
    - /button/base.vue

- /card 

- /container
    - /container/content.vue
    - /container/data.vue

- /form
<!-- - - /form/feedback.vue - form with text, phone, email -->

- /input
<!-- - - /input/radio.vue
- - /input/select.vue
- - /input/text.vue
- - /input/phone.vue
- - /input/email.vue
- - /input/file.vue -->

- /popup
<!-- - - /popup/index.vue
- - /popup/feedback.vue
- - /popup/thanks.vue
- - /popup/error.vue -->

- /slider
<!-- - -/slider/index.vue - одиночный слайдер
- -/slider/gallery.vue - слайдер текстовой страницы -->

- /ui
    - /ui/breadcrumbs.vue - хлебные крошки
    - /ui/loader.vue - колесо загрузки
    - /ui/pager.vue - пейджер страницы
    - /ui/map.vue - обертка для карты
<!-- - - /ui/social.vue - список соц сетей -->
<!-- - - /ui/accordion.vue - аккордеон  -->


- /sections

- /pages
    - /page
    - /page/[id].vue
    - /index.vue
    - /[id].vue
    - /contacts.vue - с работающей картой

- /assets - определиться что там будет***
    - /style - стили
    - /style/components
    - /style/utils

- /public
    - /fonts 
    - /images
    - /icons

- /middleware
    - / redirect.js

- /composables
    - /useDomain.js

- /stores
    - /mainInfo.js - информация о всем сайте

- /server

- /utils

- /plugin

- /layouts
    - /default.vue - обычный скролл
    - /scroll.vue - кастомный скролл

- error.vue - здесь должны быть сообщения об ошибках



# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

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

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

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
pnpm run build

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
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
