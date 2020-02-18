# Notes
* Backend is deployed to **GCP AppEngine** and is live at url: https://game-search-57266.appspot.com (Link expires after Feb 2020).
* I have packaged the UI as **SearchGamesApp.apk** for ease of testing.
* I built the UI using **Native Script with Angular**, underestimating the learning curve of Native script it took me lot longer than I thought it would.
* Clicking on queried items will show their details.

# Getting Started
Just install the apk on an andoid device and you are good to go.
**Please note: first query takes a while to load as AppEngine spins up a new instance**.
Thank you for your patience.

## Some Possible improvements:
* GCP Compute Engine would have been better option, however it had higher fee assosiated to it.

## Optional steps to run loose files
### Tools Used
For UI:
* npm
* angular cli
* native script cli
* (On mobile device)
* NativeScript Playground
* NativeScript Preview
For Backend:
* Node 10+
* MySql 5.7

### Setting Up to run loose files in dev mode
UI:
* Run **npm install** in {project_root}/frontend
Backend services:
* Run npm i on {project_root}/backend
* Create a database in MySQL and configure the backend accordingly (backend/resources/app_constants.js)

### Running the app
UI:
* In frontend folder run command: **tns preview --hmr** (and follow the instructions to run it on your mobile device).
Backend services:
* Run command: node server (in the backend foler).
* Initiate API http://localhost:3000/setupdb to populate your db (if you get any errors make sure the db is configured correctly).

Please note: I have found that after you run: tns preview; and scan the QR code, it takes a while to load the UI for the first time.

### Available end-points
1. https://game-search-57266.appspot.com/setupdb (irrelevent).
2. https://game-search-57266.appspot.com/search/{query_text}/{page_number} : Returns 20 results per page
2. https://game-search-57266.appspot.com/searchbyid/{id} : Returns item by id

## Objects of Interst
* Backend
1. app.js
2. routes/
3. configs: resources/, app.yaml
4. default route view: public/
* Frontend:
1. src/app/item
