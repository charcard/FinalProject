"use strict";

function TestService($http, $q) {
  let colorList;
  let classList;
  let cultureList;
  let finalClassList;
  let finalColorList;
  let finalCultureList;
  let page = 1;
  let key = "88bb71d0-7015-11e8-9d38-6fd658e729d6";


  const getColor = (colorType) => {
    colorList = [];
    return $q((resolve, reject) => {
      for (let i = 1; i <= 2000; i++) {
        $http({
          method: 'GET',
          url: `https://api.harvardartmuseums.org/object?size=100&page=${i}&apikey=${key}`
        }).then((response) => {
          for (let itemInArr of response.data.records) {
            if (itemInArr.hasOwnProperty("colors") && itemInArr.hasOwnProperty("images")) {
              if (itemInArr.images[0].height > 0 ) {
                for (let color of itemInArr.colors) {
                  if (color.hue === colorType) {
                    colorList.push(itemInArr);
                    // return colorList
                    }
              }
            }

          }
        };
      })
      resolve(colorList);
    }
  })
}

const returnColorList = () => {
    finalColorList = colorList;
    return finalColorList;
}

  const getClassification = (classType) => {
    classList = [];
    return $q((resolve, reject)=>{
      for (let i = 1; i <= 300; i++) {
        $http({
          method: 'GET',
          url: `https://api.harvardartmuseums.org/object?classification=${classType}&size=100&page=${i}&apikey=${key}`
        }).then((response)=>{
          for (let itemInArr of response.data.records) {
            if (itemInArr.hasOwnProperty("images")) {
              if (itemInArr.images[0].height > 0) {
                classList.push(itemInArr);
                // return classList
              }
            }
          }
        }) //end of then response
        resolve(classList);
      }
    })
  }

  const returnClassificationImages = () => {
    finalClassList = classList;
    return finalClassList;
  }

  const getCulture = (cultureType) => {
    cultureList = [];
    return $q((resolve, reject)=>{
      for (let i = 1; i <= 2000; i++) {
        $http({
          method: 'GET',
          url: `https://api.harvardartmuseums.org/object?culture=${cultureType}&size=100&page=${i}&apikey=${key}`
        }).then((response)=>{
          for (let itemInArr of response.data.records){
            if (itemInArr.hasOwnProperty("images")) {
              if (itemInArr.images[0].height > 0) {
                cultureList.push(itemInArr);
                // return cultureList
              }
            }
          }
        })
        resolve(cultureList);
      } //end of for loop
    }) //end of $q
  }

  const returnClassificationCulture = () => {
    finalCultureList = cultureList;
    return finalCultureList;
  }

  return {
    getClassification,
    returnClassificationImages,
    getCulture,
    returnClassificationCulture,
    getColor,
    returnColorList
  }
}

angular
  .module("app")
  .factory("TestService", TestService);
