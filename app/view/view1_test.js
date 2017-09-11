'use strict';

describe('myApp.Main module', function() {

  beforeEach(module('myApp.Main'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var MainCtrl = $controller('MainCtrl');
      expect(MainCtrl).toBeDefined();
    }));

  });
});
