const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  // if (!breedName) {
  //   console.log("Please input a breed name for the search.");
  //   return;
  // }
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      }
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, "No matching result...");
        //console.log("No matching result...");
      } else {
        // printing out the 1st item's description property
        callback(null, data[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
