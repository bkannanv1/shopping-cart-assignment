# XT Shopping Cart Assignment

The frontend is built using react with Vite.

## Highlights

- Uses React Router v6
  - No more data fetching with `useEffect`. All the data are loaded by new Data Router APIs.
  - Uses Nested Layouts for parallel data fetching.
  - All the routes are lazy-loaded for faster load times.
- Uses Radix UI
  - Headless components with built in accessibility.
  - Components are loaded with `React.lazy()`, so the library is imported only when the component is requested.
    - Dialog would be loaded on click of cart button.
    - Accordian would be loaded only on mobile layout.
- Styling
  - CSS Modules
    - For styles splitting. Loading only the styles required for the component.
    - Make use of CSS Modules Variables.
  - Uses color thememing with CSS variables.
- Testing
  - Uses Vitest, React testing library and jest-dom

## Running locally

Clone this repo and run following command for starting the mock server:

```
npm install
npm run start
```

Before running `client`, make sure you have node version 14+

```
node --version
// Should be above 14+
```

To install latest node version, follow the steps in [nvm documentation](https://github.com/nvm-sh/nvm)

Then navigate to `client` directory, install dependencies and start vite dev server

```
cd client
npm install
npm run dev
```

## Bundling for Production

Create the production build

```
cd client
npm run build
```

## Test the production build locally

To test the production build locally

```
cd client
npm run build
npm run preview
// Open the URL displayed
```

> Make sure to start the server at port 3000.
