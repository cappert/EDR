const pg = require("pg");
const process = require("node:process");
const express = require("express");
const {scrapMap} = require("./scrapper");
const app = express();

const SR_STATIONS_IDS = [3991, 124, 2375]

const pgClient = new pg.Client({
    host: process.env["PG_HOST"] ?? "127.0.0.1",
    user: process.env["PG_USER"] ?? "postgres",
    password: process.env["PG_PWD"] ?? "mysecretpassword",
    port: process.env["PG_PORT"] ?? 1445
});

pgClient.connect((err) => {
    if (err) {
        console.error("Unable to connect to postgresql instance !")
        console.error(err);
    } else {
        console.log("Connected to Postgres [DOCKER DEV] !");
    }
})

global.pgClient = pgClient;

const isStationInDatabase = (stationName) => {
    return pgClient.query("SELECT * from stations WHERE name=$1", [stationName])
        .then((v) => v.rows.length > 0)
        .catch(console.error);
}

const insertStationInDb = (stationConfig) => {
    return pgClient.query("INSERT INTO stations (name, cacheDate) VALUES ($1, $2)", [stationConfig.Name, new Date()])
        .then(() => console.log("Station added !"))
        .catch((e) => console.error("Error while adding station", e))
}

function processStations(req, res) {
    console.log("Station processing starting ...");
    fetch("https://dispatch-api.cdn.infra.deadlykungfu.ninja/stations/fr1").then((res) => {
        res.json().then((d) => {
            d.map((stationConfig) => {
                isStationInDatabase(stationConfig.Name).then(isInStation => {
                    if (!isInStation) {
                        insertStationInDb(stationConfig)
                    }
                })
            })
        });
    })
    res.send("Processing started");
}

function processPost(req, res) {

}

app.get("/process/stations", processStations)

const fn = async () => {
    for (let i = 0; i < SR_STATIONS_IDS.length - 1; i++) {
        try {
            console.log("Scrapping starting ", new Date());
            await scrapMap("stations", SR_STATIONS_IDS[i]);
            console.log("Stations finished ", new Date());
            await scrapMap("trains", SR_STATIONS_IDS[i]);
            console.log("Trains finished ", new Date());
        } catch (e) {
            console.error("Scrapping failed ", new Date());
            console.error("Scrapping failed ", e)
            if (global.scrapBrowser) {
                await global.scrapBrowser.close();
            }
        }
    }
}

const mainInterval = setInterval(fn, (1800 / 2) * 1000)

fn();
// scrapMap();

app.listen(8080)

process.on('exit', () => {
    console.log("Closing DB connection. Bye bye !\n");
    pgClient.end();
})
