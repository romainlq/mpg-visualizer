const axios = require('axios');
const fs = require('fs');

const URL = "https://api.monpetitgazon.com/stats/championship/1/2020"

async function fetchData(url) {
    console.log('--- FETCH DATA START ---')
    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(err => console.log(err))
        .finally(() => console.log('--- FETCH DATA END ---'))
}

const saveData = (data) => {
    console.log('-- SAVE DATA START --')
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const fileName = `./public/data/data-${year}-${month}-${day}-${hour}-${minute}.json`;

    const sortedData = Object.values(data).sort((a, b) => a.id - b.id);
    const toJSon = JSON.stringify(sortedData)

    return fs.writeFile(fileName, toJSon, (err) => {
        if (err) throw err;
        console.log('Data saved !')
        console.log('-- SAVE DATA END --')
    })
}

async function main () {
    const data = await fetchData(URL);
    saveData(data);
}

main();