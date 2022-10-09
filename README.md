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

## install heroicons
1. run `npm i @heroicons/react`

## add assets
1. create folder `assets`
2. download assets from 'https://youtube-slack.s3.eu-west-1.amazonaws.com/assets.zip'
3. Unzip assets and drop into `assets` folder

## create structure
1. create `components` folder
2. create structural companents
```
Header.js
Banner.js
Slogan.js
Info.js
Stats.js
DeepDive.js
Footer.js
```

### Header

