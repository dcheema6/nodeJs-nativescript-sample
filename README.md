# Notes
* I built the UI using native script with angular, underestimating the learning curve of Native script it took me lot longer than I thought it would.
* Backend is deployed to google app engine and live at url: https://game-search-57266.appspot.com (I will take it down by the end of Feb 2020).
* Front end is configured to connect to the serveless backend, hence there is no need to run it locally.
* I chose to migrate the data from games.json to Cloud MySQL for better performence and less hastle for anyone trying to run this app.
* Clicking on queried items will show their details.

# Getting Started

### Tools Required
* npm
* angular cli
* native script cli

Backend (Optional):
* Node 10+
* MySql 5.7

### Setting Up
* Run npm install in {project_root}/frontend
Optional (backend)
* Run npm i on {project_root}/backend
* Create a database in MySQL and configure the backend accordingly (backend/resources/app_constants.js)

### Running the app
* In frontend folder run command: tns preview (and follow the instructions to run it on your mobile device).
Optional (backend)
* Run command: node server (in the backend foler).
* Initiate API http://localhost:3000/setupdb to populate your db (if you get any errors make sure the db is configured correctly).

Please note: I have found that after you run: tns preview; and scan the QR code, it takes a while to load the UI for the first time and first query takes a while to respond (I think this is a live sync issue with Native Script preview).

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
