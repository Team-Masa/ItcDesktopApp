'use strict';

describe('Controller: ShowcurrentbillCtrl', function () {

  // load the controller's module
  beforeEach(module('itechHackApp'));

  var ShowcurrentbillCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowcurrentbillCtrl = $controller('ShowcurrentbillCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
