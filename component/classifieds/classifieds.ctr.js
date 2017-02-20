(function(){
'use strict';
angular.module('ngClassified')
.controller("classifiedsCtrl",function( $timeout ,$scope, $http, $state, classifiedsFactory,$mdSidenav, $mdToast, $mdDialog){
       var vm = this;
      vm.categories;
      vm.classifieds;
      vm.classified;
      vm.editing;
      vm.closeSidenav = closeSidenav;
      vm.deleteClassified = deleteClassified;
      vm.editClassified = editClassified;
      vm.getCategories = getCategories;
      vm.openSidenav = openSidenav;
      vm.saveEdit = saveEdit;
      vm.saveClassified = saveClassified;
      
       
   function getCategories(classifieds){
        var categories = [];
        angular.forEach(classifieds,function(items){
          angular.forEach(items.categories, function(category){
            categories.push(category);
          });
        });
        return _.uniq(categories);
      }
  classifiedsFactory.getClassifieds().then(function(classified){
 vm.classifieds = classified.data;
 vm.categories = getCategories(vm.classifieds);
  });

  $scope.$on('newClassified', function(event, classified){
     classified.id = vm.classifieds.length + 1;
     vm.classifieds.push(classified);
      showToast('New Classified is added');
       
  });
  $scope.$on('editSaved', function(event, message){
    showToast(message);
  });
     function openSidenav(){
     $state.go('classifieds.new');
    };
     function closeSidenav(){
      $mdSidenav('left').close();
    };
   
   var contact = {
      name: "Gopal Prasad",
      phone: "(091) 999-88825512",
      email: 'gopalprasad@gmail.com'
    } 
  function saveClassified(classified){
    if(classified){
        classified.contact = contact;
        vm.classifieds.push( classified);
         classified = {};
       closeSidenav();
        showToast("classified saved")
    }   
  }
  function showToast(message){
         $mdToast.show(
          $mdToast.simple()
             .textContent(message)
             .position("top, right")
             .hideDelay(3000)
        )
  }
  function editClassified(classified){
     $state.go('classifieds.edit',{
       id: classified.id,
       classified: classified
     });
  }
  function saveEdit(){
    vm.editing = false;
    closeSidenav();
    showToast("Edit Saved !");
  }
  function deleteClassified(event,classified){
       var confirm = $mdDialog.confirm()
                 .title("Are you sure want to delete \" "+classified.title+"\" ?")
                 .ok("Yes Sure !")
                 .cancel("No, not really !")
                 .targetEvent(event);
      $mdDialog.show(confirm).then(function(){
           var index = vm.classifieds.indexOf(classified);
            vm.classifieds.splice(index,1);
      },function(){

      });

      
  
  }   
  } );

})();