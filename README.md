# Harp.gl and React

- Harp.gl version 0.21.* : https://www.harp.gl/
- React version 0.17.*

## Getting Started with this "template"

```shell
git clone https://github.com/roberto-butti/harpgl-map-reactjs.git
cd harpgl-map-reactjs
npm install
```

Now you need to build some stuff needed by Harp.gl: the decoder bundle file.
This file (public/decoder.bundle.js file) is produced by running the command:
```shell
npm run build:harp-gl-decoder
```

Now you need to set your API KEY
```shell
cp .env.example .env.local
```
And fill the REACT_APP_HERE_APIKEY parameter with your apiKey.


Then you can run
```
npm run start
```
This command, it runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
