/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'attr-value-not-empty',
    description: 'All attributes must have values.',
    init: function(parser, reporter, options){
        var self = this;
        var exceptions = Array.isArray(options) ? options : [];
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs,
                attr,
                col = event.col + event.tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                var attrName = attr.name;
                if(exceptions.indexOf(attrName) === -1 && attr.quote === '' && attr.value === ''){
                    reporter.warn('The attribute [ '+attr.name+' ] must have a value.', event.line, col + attr.index, self, attr.raw);
                }
            }
        });
    }
});