//script to use pre-build an array of links for use by the links components

require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');

const url = process.env.NEXT_API;

const getLinks = async () => {
  //query Sanity API to receive category slugs
  try {
    const response = await fetch(url);
    const json = await response.json();
    const links = json.result.map((link) => {
      return link.slug.current;
    });
    //Sort slugs and add "latest" to beggining of array
    const sortedLinks = links.sort();
    const index = sortedLinks.indexOf('latest');
    if (index > -1) {
      sortedLinks.splice(index, 1);
    }
    sortedLinks.unshift('latest');
    //write output to a links.json file
    const filepath = `${process.cwd()}/utils/links.json`;
    fs.writeFileSync(filepath, JSON.stringify(sortedLinks));
  } catch (error) {
    console.log(error);
  }
};
getLinks();
