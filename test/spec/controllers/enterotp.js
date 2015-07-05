'use strict';

describe('Controller: EnterotpCtrl', function () {

  // load the controller's module
  beforeEach(module('itechHackApp'));

  var EnterotpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnterotpCtrl = $controller('EnterotpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
