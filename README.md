# Example App - React

## Start the app

Install the dependencies and start the server.

```sh
yarn
yarn start
```

The last command should open your browser and navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## abds component usage

To use a Stencil built web component collection within a React project we need to:

1. Add `@abds/react-bindings` to the list of your dependencies in `package.json`.
   - In this example project, we added `@abds/react-bindings` to `package.json`.
2. Import an [abds component](https://zeroheight.com/6af807fb0/v/latest/p/56f98e-components/b/173c7d) into your app and use it like any other React component.
   - In this example project, we added `import { AbdsButton } from '@abds/react-bindings';` in `src/components/ReactButton.jsx`. You can see the `<AbdsButton>` later in that file.

## Additional information

For more information about the abds components that are available and their props see our [ZeroHeight documentation.](https://zeroheight.com/6af807fb0/v/latest/p/56f98e-components/b/173c7d)

For more information about integrating with React see [Stencil's documentation here.](https://stenciljs.com/docs/react)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
