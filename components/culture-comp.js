"use strict"; 

const cultureComponent = {
    template: `
    <section class="buttoncontainer">

        <button type="button" ng-click="$ctrl.displayCulture('American');">American</button>
        <button type="button" ng-click="$ctrl.displayCulture('Korean');">Korean</button>
        <button type="button" ng-click="$ctrl.displayCulture('Egyptian');">Egyptian</button>
        <button type="button" ng-click="$ctrl.displayCulture('Italian');">Italian</button>
        <button type="button" ng-click="$ctrl.displayCulture('French');">French</button>
        <button type="button" ng-click="$ctrl.displayCulture('Japanese');">Japanese</button>
        <button type="button" ng-click="$ctrl.displayCulture('Spanish');">Spanish</button>
        <button type="button" ng-click="$ctrl.displayCulture('Flemish');">Flemish</button>
    </section>

    `, 

    controller: ["$location", "TestService", function($location,TestService){
        const vm = this; 
            vm.displayCulture = function (cultureType) {
              TestService.getCulture(cultureType).then(() => {
                $location.path("/culture-image");
              });
            } 
          }]
        }
        // vm.cultureList = [];
        // vm.nextPage = function () {
        //     TestService.nextPage().then((response) => {
        //     })
        //   }

//         const vm =this;
//         vm.displayCulture = function (cultureType) {
//         TestService.getCulture(cultureType).then((response) => {
//             vm.cultureList = [];
//             for (let i= 0; i < 100; i++) {
//                 vm.cultureList.push(response.data.records[i]);
//             }
//             $location.path("/culture-image");
//         });
//       }
//    }]
// }



angular 
    .module("app")
    .component("cultureComponent", cultureComponent); 

 // vm.material = (value) => { console.log(value) };