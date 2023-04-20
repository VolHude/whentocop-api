const fetch = require('node-fetch');

async function search(_d) {
    const date = _d === undefined ? new Date() : _d;
    try {
      const response = await fetch(`https://back.whentocop.fr/drops?_sort=drop_date:ASC&[drop_date_gte]=${date.toISOString()}&_start=0&_limit=10&_where[archive]=false`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const filteredData = data.filter((drop) => new Date(drop.drop_date).getDate() === date.getDate());
      return filteredData;
    } catch (error) {
      console.error(error);
    }
}

 
module.exports = {
    search
}
