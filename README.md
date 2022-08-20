<p align='center'><img width="300px" style="display:block; margin:0 auto;" src="https://res.cloudinary.com/alvarosaburido/image/upload/v1621848301/projects/vitesome/logotype_zq9g5i.png" alt="Vitesome - Vue3 + Vite template starter">
</p>

<p align='center'>
<sub>Logo created with <a href="https://windicss.org/">Windcss logo</a> + Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> & <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>  </sub>
</p>

# Vitesome 🌬 ⛵️

> A simple opinionated Vue Starter Template with [Vite.js](https://vitejs.dev/)

This template should help get you started developing with Vue and Typescript in Vite in a bliss.

## Features

- [Vite](https://github.com/vitejs/vite) ⚡️, [Vue](https://github.com/vuejs/vue),
- 💨 [UnoCSS](https://github.com/unocss/unocss)
- 📦 [Components auto importing](https://github.com/antfu/unplugin-vue-components)
- [i18n](https://github.com/intlify/vue-i18n-next) out of the box 👩‍🎨
- [Pure CSS Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use any icon as a single class or attribute 🔝
- Routing with [Vue Router 4](https://github.com/vuejs/vue-router-next)
- Deploy on Netlify

<p align='center'><a href="https://vitesome.alvarosaburido.dev/"> Live Demo</a><p>

## You can help me keep working on this project 💚

- [Become a Sponsor on GitHub](https://github.com/sponsors/alvarosabu)
- [One-time donation via PayPal](https://paypal.me/alvarosaburido)

<h4 align="center">Generous Unicorns 🦄</h4>

<p align="center">
  <a href="https://github.com/OmgImAlexis" target="_blank" rel="noopener noreferrer" ">
    <img src="https://avatars.githubusercontent.com/u/6525926?v=4" height="72px"  style="border-radius: 100%; overflow: hidden; border: 4px solid #5EDCAE" alt="OmgImAlexis">
  </a>
</p>

## Pre-📦

This repo brings few things pre-packed, so you don't need to install them manually everytime.

### Styling

- [UnoCSS](https://github.com/unocss/unocss) with The instant on-demand Atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- Pure CSS Icons with [@unocss/preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons)

### Plugins

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
- Component auto-import with [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components)

### Dev tools

- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete

## Check it out

You can create a repo with this template [here](https://github.com/alvarosabu/vitesome/generate)

Or if you prefer to do it manually with the cleaner git history

```bash
npx degit alvarosabu/vitesome my-vitesome-app
cd my-vitesome-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
### Project setup

```
pnpm i
```

### Use it

```
pnpm run dev
```

This will serve the app at [http://localhost:3260](http://localhost:3260)

### Build it

```
pnpm run build
```

Builds the app for production to the `dist` folder.<br>
It correctly bundles Vue in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### Deployment

Visit [Netlify](https://app.netlify.com/start) and select your repo, select OK along the way, and your App will be live in a minute.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

![repository-banner.png](https://res.cloudinary.com/alvarosaburido/image/upload/v1612193118/as-portfolio/Repo_Banner_kexozw.png)
