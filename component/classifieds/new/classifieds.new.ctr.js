(function(){
   "use strict";
   angular
   .module('ngClassified')
   .controller('newClassifiedsCtrl', function($timeout, $scope, $state, classifiedsFactory,$mdSidenav, $mdToast ){

             var vm = this;
             vm.closeSidenav = closeSidenav;
             vm.saveClassified = saveClassified;
             
             $timeout(function(){
             $mdSidenav('left').open();
                     },300 );
            
            $scope.$watch('vm.sidenavOpen', function(sidenav){
                   if(sidenav === false)
                   {
                       $mdSidenav('left')
                         .close()
                         .then(function(){
                             $state.go('classifieds');
                         });
                   }
                   
            });

            function closeSidenav(){
                 vm.sidenavOpen = false;
             }
             
             function saveClassified( classified){
                 if(classified){
                      classified.contact = {
                                        name: "Gopal Prasad",
                                        phone: "(091) 999-88825512",
                                        email: 'gopalprasad@gmail.com'
                                    }
                 $scope.$emit('newClassified',classified); 
                  
                 vm.sidenavOpen = false;
                }
                else{
                    console.log('Opps Error');
                }
                     
             };
           
   });


})();