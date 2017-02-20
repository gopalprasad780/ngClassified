(function(){
   "use strict";
   angular
   .module('ngClassified')
   .controller('editClassifiedsCtrl', function($timeout, $scope, $state, classifiedsFactory,$mdSidenav, $mdToast ){

             var vm = this;
             vm.closeSidenav = closeSidenav;
             vm.classified = $state.params.classified;
             vm.saveEdit = saveEdit;
             
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
             
             function saveEdit(){
                 $scope.$emit('editSaved','Edit Saved !');
                 vm.sidenavOpen = false;
                 
             }
              
           
   });


})();