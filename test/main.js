describe('youtubeResponsive', function() {
  var element, scope;

  // load the youtubeResponsive code
  beforeEach(module('countdown'));

  // load the templates
  beforeEach(module('tpl/main.html'));

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element(
      '<div width="400" height="1000">' + '</div>' +
      '<counter count-start="0" count-end="63" hide-until-scroll="true">'
    );
    scope = $rootScope;
    $compile(element)(scope);
    scope.$digest();
  }));

  it('should compile with correct dom els', inject(function($compile, $rootScope) {
    var spans = element.find('span');
    expect(spans.length).toBe(2);
  }));

  it('should be hidden until bottom of element is visible if scroll=true', inject(function($compile, $rootScope) {
    expect(element.find('div').hasClass('ng-hide')).toBe(true);
  }));


  // it('should create clickable titles', inject(function($compile, $rootScope) {
  //   var vid = element.find('iframe');

  //   // starting values
  //   expect(vid.length).toBe(1);
  //   expect(vid.attr('width')).toBe('100%');

  //   // trigger resize evt
  //   $(window).trigger('resize');
  //   expect(vid.attr('height')).toBe(400*(9/16));
  // }));

});