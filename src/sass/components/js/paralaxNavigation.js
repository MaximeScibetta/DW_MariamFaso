//Here is the code for paralax scrolling version 1.0
;
(function($) {
    $(document).ready(initiallizeFunctions);


    function initiallizeFunctions() {

        $(window).bind('scroll', function() {
            paralax();
        });

        $('.dot').bind('click', function() {
            scrollToPoint($(this));
        });
    }

    function paralax() {
        var $scrollPosition = $(window).scrollTop(),
            targetsObj = findTargets();

        $('.grid').css('top', (0 - ($scrollPosition * .15)) + 'px');

        var targetsIndex;
        for (targetsIndex in targetsObj.targetScrollValues) {

            if (targetsObj.targetScrollValues[targetsIndex] >= $scrollPosition - 50 && targetsObj.targetScrollValues[targetsIndex] <= $scrollPosition + 50) {
                var num = getRefNum('target-', $(targetsObj.targets[targetsIndex]));
                console.log('#goto-' + num);
                activateDot($('#goto-' + num));
            }
        }
    }

    function scrollToPoint($point) {

        var targetNum = getRefNum('goto-', $point),
            scrollPosition = $('#target-' + targetNum).offset().top;

        if (scrollPosition > 100) {
            scrollPosition = scrollPosition;
        }

        $("html, body").animate({
            scrollTop: scrollPosition
        }, 1500, function() {
            activateDot($point);
        });
    }

    function activateDot($dot) {
        $dot
            .css('background-color', 'black')
            .parent('li')
            .siblings('li')
            .children('span.dot')
            .css('background-color', 'transparent');
    }

    function findTargets() {
        var targets = $('.article').find('section>h3')
        counter = 0,
            targetScrollValues = [];

        for (; counter < targets.length; counter = counter + 1) {
            targetScrollValues[counter] = $(targets[counter]).offset().top - 99;
        }

        return {
            'targets': targets,
            'targetScrollValues': targetScrollValues
        };
    }

    function getRefNum(pattern, $target) {
        var targetID = $target.attr('id');
        return targetID.replace(pattern, '');
    }

})(jQuery);