'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', '$mdThemingProvider', '$mdIconProvider',
    function($locationProvider, $mdThemingProvider, $mdIconProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        // set the default palette name
        var defaultPalette = 'blue';
        // define a palette to darken the background of components
        var greyBackgroundMap = $mdThemingProvider.extendPalette(defaultPalette, {'A100': 'fafafa'});

        $mdThemingProvider.definePalette('grey-background', greyBackgroundMap);
        $mdThemingProvider.setDefaultTheme(defaultPalette);

        // customize the theme
        $mdThemingProvider
            .theme(defaultPalette)
            .primaryPalette(defaultPalette)
            .accentPalette('pink')
            .backgroundPalette('grey-background');

        var spritePath = 'lib/material-design-icons/sprites/svg-sprite/';
        $mdIconProvider.iconSet('navigation', spritePath + 'svg-sprite-navigation.svg');
        $mdIconProvider.iconSet('action', spritePath + 'svg-sprite-action.svg');
        $mdIconProvider.iconSet('content', spritePath + 'svg-sprite-content.svg');
        $mdIconProvider.iconSet('toggle', spritePath + 'svg-sprite-toggle.svg');
        $mdIconProvider.iconSet('alert', spritePath + 'svg-sprite-alert.svg');
    }
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
  //Fixing facebook bug with redirect
  if (window.location.hash === '#_=_') window.location.hash = '#!';

  //Then init the app
  angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
