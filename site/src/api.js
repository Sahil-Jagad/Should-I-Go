const axios = require('axios');
const getBreeds = async() => {
    return await axios({
        url: 'https://api.covidtracking.com/v1/states/current.json',
        method: 'get'
    })
}
(async () => {
    console.log(getBreeds())
  })()