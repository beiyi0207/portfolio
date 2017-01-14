var setupTorsoHandlebarsHelpers = require('torso/modules/handlebarsUtils');

/**
 * All helper functions for the Handlebars.js templating engine
 * @class handlebarsHelpers
 * @param Handlebars {Handlebars} the handlebars instance to attach the helpers to.
 */


module.exports = function(Handlebars) {
  setupTorsoHandlebarsHelpers(Handlebars);

  /**
   * Example:
      {{#equals var1 var2}}
        <span> {{var1}} is equal to {{var2}} </span>
      {{else}}
        <span> {{var1}} is not equal to {{var2}} </span>
      {{/equals}}

   * If function that executes a given block if two values are equal.
   * @param  {Object} val1 Object to compare to val2
   * @param  {Object} val2 Object to compare to val1
   * @return {String} Output string of block depending on whether or not val1 === val2
   */
  Handlebars.registerHelper('equals', function(val1, val2, block) {
    if (val1 === val2) {
      return block.fn(this);
    } else {
      return block.inverse(this);
    }
  });
};