# A Vue.js Template

> A personalized Vue.js template built with Vue CLI's webpack template, Vue-router, Vuex, and Bootstrap v4 (ESLint & testing options enabled)

I wanted to use Vue.js with some of its bells and whistles with Bootstrap v4 (and then deploy to GitHub pages)-- it was a bit tedious to set up. So... I threw together this template to speed up my workflow for the future. I hope it works for you!! (And if it doesn't, **fork it and fix it!** :-P)

## Instructions

1. Clone this repo
    * ```$ git clone git@github.com:BenRGarcia/Vue.js-Bootstrap-v4-Template.git```

2. Navigate to inside of folder
    * ```$ cd Vue.js-Bootstrap-v4-Template```

3. Get npm up and runnin'
    * ```$ npm init```
    * ```$ npm install```

4. Set git remote to your own repo, push template to your own repo
    * ```$ git remote set-url origin <your github remote ssh/https link>```
    * ```$ git push```

5. Code your heart out

## Here's some fun info if you want to deploy straight to your gh-pages

1. Add your 'build' public path (the thing that comes after '```https://github.com/BenRGarcia```')

    ```js
    // config/index.js, line 53
    assetsPublicPath: '/<your GitHub repo file path>/',
    ```

    * So, if my full URL was this: ```https://benrgarcia.github.io/Vue.js-Bootstrap-v4-Template/```, then my line 53 would look like this:

    ```js
    assetsPublicPath: '/Vue.js-Bootstrap-v4-Template/',
    ```

2. Add this deploy script (**remember to add in your own github remote ssh/https link**)

    ```js
    // package.json, just after line 14
    "deploy": "rm -rf dist && npm run build && cd dist && git init && git add . && git commit -m \"Initial commit\" && git remote add origin <github's remote ssh/https link> && git push --force origin master:gh-pages"
    ```
3. Voila!! Run ```$ npm run deploy``` and in a couple minutes you'll have your production build deployed to your very own GitHub page

### FAQ's

* Where do I start coding?
  * You'll probably do all that in the ```/src``` folder
* Where do I put my scss?
  * **If** you want to override Bootstrap's default variables: ```/src/assets/scss/_custom.scss```
  * But generally, you'll put your global styles in ```/src/assets/scss/main.scss```
  * Keep in mind this is Vue.js, any non-global CSS should probably be attached to the component itself (```*.vue```)
* How do I initialize Bootstrap's tooltips and popovers?
  * Simply uncomment line 19 and line 21 in ```src/main.js```

### FYI's

* See below links to Doc's for questions like:
  * How do I use Vue.js?
  * How do I use Vuex?
  * How do I use Bootstrap?
  * How do I use SASS?

## Documentation to Reference

* Vue.js
  * [Vue.js](https://vuejs.org/v2/guide/)
  * [Vue.js CLI](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md)
  * [Vue.js Webpack Template](http://vuejs-templates.github.io/webpack/)
  * [Vue Router](https://router.vuejs.org/en/)
  * [Vuex](https://vuex.vuejs.org/en/)

* Bootstrap v4
  * [Webpack Instructions](https://getbootstrap.com/docs/4.0/getting-started/webpack/)
  * [SASS Default Variables](https://getbootstrap.com/docs/4.0/getting-started/theming/)

## HAPPY CODING