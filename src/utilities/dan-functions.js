const axios = require('axios');

const functions = {
    // validateClickHome() {     
    // }

    fetchCategoryLeashes: () => axios.get('http://localhost:3111/api/getproducts/leashes').then(res => res.data).catch(err => 'error'),

    fetchCategoryHarnesses: () => axios.get('http://localhost:3111/api/getproducts/harnesses').then(res => res.data).catch(err => 'error'),

    fetchCategoryBoots: () => axios.get('http://localhost:3111/api/getproducts/boots').then(res => res.data).catch(err => 'error')
}

module.exports = functions;