const opggScraper = require('opgg-scraper');

async function getStats(name) {
    const data = await opggScraper.getStats(name, 'na', false);
    return data;
}

module.exports = { getStats };
