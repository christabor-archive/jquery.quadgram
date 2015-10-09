/*!
 * jquery.quadgram - A jquery plugin for generating quadrant diagrams.
 * (c) 2015 Chris Tabor <dxdstudio@gmail.com>
 * <3
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function($, window, document, undefined) {
    $.fn.quadrants = function(options) {
        var el = this;
        var class_prefix = 'jq-quadgram-';
        var valid_element = el[0].toString() === '[object HTMLUListElement]' || el[0].toString() === '[object HTMLOListElement]';
        if(!valid_element) { throw new Error('Must be a list element.'); }
        var els = null;
        var e1 = null;
        var e2 = null;
        var e3 = null;
        var e4 = null;

        function makeQuadrant(el, one, two, options, quadrant) {
            var word1 = one.find('.key').text();
            var word2 = two.find('.key').text();
            if(options[quadrant].fn) {
                el.find('.combo').html(options[quadrant].fn(word1, word2));
            } else {
                el.find('.combo').html(word1 + ' & ' + word2);
            }
        }

        function makeLabel(label, quadrant) {
            return [
                '<li class="' + class_prefix + 'quadrant ' + quadrant + '">',
                '<span class="combo"></span>',
                '<span class="key">' + label + '</span>',
                '</li>'
            ].join('\n');
        }

        el.empty().addClass(class_prefix + 'diagram');
        el.append(makeLabel(options.q1.label, class_prefix + 'q1'));
        el.append(makeLabel(options.q2.label, class_prefix + 'q2'));
        el.append(makeLabel(options.q3.label, class_prefix + 'q3'));
        el.append(makeLabel(options.q4.label, class_prefix + 'q4'));

        els = el.find('li');
        e1 = els.eq(0);
        e2 = els.eq(1);
        e3 = els.eq(2);
        e4 = els.eq(3);

        makeQuadrant(e1, e1, e2, options, 'q1');
        makeQuadrant(e2, e2, e4, options, 'q2');
        makeQuadrant(e3, e1, e3, options, 'q3');
        makeQuadrant(e4, e3, e4, options, 'q4');
    };
})(jQuery, window, document);
