# REACT ⚛︎ PROJECTS

## If creating from scratch

- `npx create-react-app react-projects`
- React Router Dom: `npm i react-router-dom`
- Axios: `npm i axios`
- React icons: `npm i react-icons`
- Bootstrap: `npm i bootstrap`
- Sass: `npm i sass --save-dev`
- json-server: `npm i json-server --save-dev`
- Concurrently: `npm i concurrently --save-dev`
- React-bootstrap: `npm i react-bootstrap --legacy-peer-deps`

## Styling Setup

1. Create the directories inside src folder:

- styles
  - css
  - scss => styles.scss file

2. Import inside src/index.js: `import './styles/css/styles.css';`
3. Include script on package.json:
   `"scripts": { "sass": "sass src/styles/scss:src/styles/css --watch --no-source-map" }`
4. Check is Sass is running: `npm run sass`

## Dev Backend Setup

1. Stop react if running
2. Create data folder (outside src)
3. After installing json-server, include script on package.json: `"scripts": { "server": "json-server --watch data/db.json --port 8005" }`
4. Check is json-server is running: `npm run server`
   PS: db.json file will be generated on data folder
5. Run again react dev server: `npm start`
6. Replace the data inside db.json (put our own data)

### Run Concurrently: npm start + npm run sass + npm run server

1. After installing Concurrently, include script on package.json (DON'T DELETE WHAT WAS INSTALLED BEFORE OR THE OTHER SCRIPTS):
   `"scripts": { "dev": "concurrently --kill-others \"npm start\" \"npm run server\" \"npm run sass\"" }`
2. Run dev: `npm run dev`
