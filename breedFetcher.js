const request = require("request");

const breedFetcher = (breed) => {
  if (!breed) {
    console.log("Please input a breed name for the search.");
    return;
  }
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error, response, body) => {
    if (error) {
      console.log("There is an error getting the data:", error.message);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("No matching result...");
    } else {
      // printing out the 1st item's description property
      console.log(data[0].description);
    }
  });
};

//node breedFetcher.js Siberian
breedFetcher(process.argv[2]);
