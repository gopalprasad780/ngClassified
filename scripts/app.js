 
(function(){
    'use strict';
    angular.module('ngClassified', ["ngMaterial",'ui.router'])
    .config(function($mdThemingProvider, $stateProvider){
        $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

        $stateProvider
        .state('classifieds',{
              url: '/classifieds',
              templateUrl:'component/classifieds/classifieds.tpl.html ',
              controller:'classifiedsCtrl as vm'
        })
        .state('classifieds.new',{
              url: '/new',
              templateUrl:'component/classifieds/new/classifieds.new.tpl.html ',
              controller:'newClassifiedsCtrl as vm'
        })
        .state('classifieds.edit',{
              url: '/edit/:id',
              templateUrl:'component/classifieds/edit/classifieds.edit.tpl.html ',
              controller:'editClassifiedsCtrl as vm',
              params:{
                  controller:null
              }
        });

    });








})();
