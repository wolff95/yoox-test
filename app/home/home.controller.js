angular.module('myApp.Home', [])
    .controller('HomeCtrl', ['$scope', 'getSection', function ($scope, getSection) {
        var vm = this;

        vm.open = false;

        vm.getSection = function (stringNumber) {
            vm.sectionName = stringNumber;
            vm.section = getSection.get(stringNumber).then(function (response) {
                vm.section = response.data.item;
            });
        }

        vm.match = function (val1, val2) {
            return val1 == val2;
        }

        vm.getSection('one');
    }])

    .directive('slideable', function () {
        return {
            restrict: 'C',
            compile: function (element, attr) {
                // wrap tag
                var contents = element.html();
                element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

                return function postLink(scope, element, attrs) {
                    // default properties
                    attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                    attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                    element.css({
                        'overflow': 'hidden',
                        'height': '0px',
                        'transitionProperty': 'height',
                        'transitionDuration': attrs.duration,
                        'transitionTimingFunction': attrs.easing
                    });
                };
            }
        };
    })

    .directive('slideToggle', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var target = document.querySelector(attrs.slideToggle);
                attrs.expanded = false;
                element.bind('click', function () {
                    var content = target.querySelector('.slideable_content');
                    if (!attrs.expanded) {
                        content.style.border = '1px solid rgba(0,0,0,0)';
                        var y = content.clientHeight;
                        content.style.border = 0;
                        target.style.height = y + 'px';
                    } else {
                        target.style.height = '0px';
                    }
                    attrs.expanded = !attrs.expanded;
                });
            }
        }
    })
    
    .directive('carousel', function () {
        return {
            restrict: "E",
            scope: true,
            templateUrl: "carousel/carousel.view.html",
            link: function () {
                jssor_1_slider_init = function () {

                    var jssor_1_options = {
                        $AutoPlay: 1,
                        $SlideWidth: 670,
                        $Cols: 2,
                        $Align: 155,
                        $ArrowNavigatorOptions: {
                            $Class: $JssorArrowNavigator$
                        },
                        $BulletNavigatorOptions: {
                            $Class: $JssorBulletNavigator$
                        }
                    };

                    if (!jssor_1_slider)
                        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

                    /*#region responsive code begin*/

                    var MAX_WIDTH = 1903;

                    function ScaleSlider() {
                        var containerWidth = $(window).width();;

                        if (containerWidth) {

                            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                            jssor_1_slider.$ScaleWidth(expectedWidth);
                        }
                        else {
                            window.setTimeout(ScaleSlider, 30);
                        }
                    }

                    ScaleSlider();

                    $Jssor$.$AddEvent(window, "load", ScaleSlider);
                    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
                    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
                    /*#endregion responsive code end*/
                };


                jssor_1_slider_init();
            }
        }
    });