const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  axios.post('http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10', {
    city: 'Guildhall',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
//   const requestOne = axios.get("https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");
// const requestTwo = axios.get("https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt");
// const requestThree = axios.get("https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");

// axios
//   .all([requestOne, requestTwo, requestThree])
//   .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
//       console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
//     })
//   )
//   .catch(errors => {
//     console.error(errors);
//   });