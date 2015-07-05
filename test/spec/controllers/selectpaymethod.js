'use strict';

describe('Controller: SelectpaymethodCtrl', function () {

  // load the controller's module
  beforeEach(module('itechHackApp'));

  var SelectpaymethodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectpaymethodCtrl = $controller('SelectpaymethodCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
