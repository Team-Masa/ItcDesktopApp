'use strict';

describe('Controller: CheckhistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('itechHackApp'));

  var CheckhistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckhistoryCtrl = $controller('CheckhistoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
