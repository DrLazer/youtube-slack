# slack homepage clone
## set up a new create react app
1. run `npx create-react-app slack`
2. run `cd slack`
3. run `npm run start`

## clean up
in App.js ...
1. remove imports
2. replace everything inside first div with `Slack Clone`
3. delete App.css
4. delete App.test.js
5. delete logo.svg

## install tailwind
1. run `npm install -D tailwindcss postcss autoprefixer`
2. run `npx tailwindcss init -p`
3. paste this over the tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
4. add this to the top of index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

## create structure
1. create `components` folder
2. create structural companents
```
Header
Banner
Slogan
Info
Stats
DeepDive
Footer