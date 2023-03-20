# This is a [Next.js](https://nextjs.org/) project template to make the initial setup of projects easy

## Getting Started

First, use the template to create your Next app.

```bash=
npx create-next-app --example https://github.com/ggonpereira/ggp-next-starter-template <PROJECT_NAME>
# or
yarn create next-app --example https://github.com/ggonpereira/ggp-next-starter-template <PROJECT_NAME>
```

Then, after cloning, you can start your project by:

```bash=
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying the files inside `src` folder.

## Differentials

This project uses [Atomic Design](https://atomicdesign.bradfrost.com/) principles, so inside the `components` folder, we have `atoms`, `molecules`, `organisms` and `layouts`. This structure is used to separate the responsibility of the components, making it easier to read and maintain.

It also starts with a built-in component generator, that will create several files (test, interface, main component, style files, etc) mapped to the `atoms` folder. If your component represents a `molecule`, for example, you just need to move it to the correct folder inside `components`.

## To-do

I still have a lot of improvements to do in this repository, some of them are:

- [ ] Upload to npm
- [ ] Add Storybook
- [ ] Improve initial configuration
- [ ] Make it executable by running `npx ggp-next-starter-template` or `yarn create ggp-next-starter-template`
