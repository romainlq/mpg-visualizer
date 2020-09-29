const axios = require('axios');
const fs = require('fs');
const path = require('path');

const URL = "https://api.monpetitgazon.com/stats/championship/1/2020"

async function fetchData(url) {
    console.log('--- FETCH DATA START ---')
    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                console.log('dans le  if')
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log('dans le else if')
                console.log(error.request);
            } else {
                console.log('dans le else')
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
        .finally(() => console.log('--- FETCH DATA END ---'))
}

const saveData = async (data) => {
    console.log('-- SAVE DATA START --')
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const fileName = `./public/data/data-${year}-${month}-${day}-${hour}-${minute}.json`;
    // const oldFileName = './public/data/old-data.json';
    // const newFileName = './public/data/new-data.json';

    // const latestFile = await getLatestFile();
    // console.log('---latest file --- ', latestFile);

    /**
     * Recuperer le contenu du fichier new
     * Si le contenu est le même, on ne fait rien
     * Si le contenu est différent --> On renomme le new en old, et on enregistre dans le new ce qu'on a récupéré
     * */


    // return;
    const sortedData = Object.values(data).sort((a, b) => a.id - b.id);
    const toJSon = JSON.stringify(sortedData)

    return fs.writeFile(fileName, toJSon, (err) => {
        if (err) throw err;
        console.log('Data saved !')
        console.log('-- SAVE DATA END --')
    })
}

const getLatestFile = async (customPath = 'data') => {
    const directoryPath = path.join(__dirname, `../public/${customPath}`);
    console.log('--- get latest file start ---');
    let latestFile = null;
    let latestFileMtime = null;
    console.log(directoryPath)
    return fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.log(err)
        }
        for (const file of files) {
            const filePath = path.join(__dirname, `../public/${customPath}/${file}`)
            const { mtime } = fs.statSync(filePath);

            // Init w/ first file
            if (latestFile === null) {
                latestFile = file;
                latestFileMtime = mtime;
            }

            // SI la date est supérieure, c'est le dernier fichier

            if (mtime > latestFileMtime) {
                latestFile = file;
                latestFileMtime = mtime;
            }
        }
        console.log(latestFile)
        console.log('--- get latest file end ---');
        return latestFile;
    });
}

async function main () {
    const data = await fetchData(URL);
    saveData(data);
}

main();