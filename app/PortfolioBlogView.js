var TorsoView = require('torso/modules/View'),
    blogTemplate = require('./portfolioBlogTemplate.hbs');
    portfolioPageHeaderView = require('./portfolioPageHeaderView');

/**
 * Blog View
 *
 * @class BlogView
 */
module.exports = TorsoView.extend({
  tagName: 'main',
  className: 'portfolio-page-content',
  id: 'main-content',
  moduleNamespace: 'Beiyi Wu',
  template: blogTemplate,

  /**
   * @method initialize
   * @override
   */

  initialize: function() {
    portfolioPageHeaderView.updateHeaderIcon({
      icon: 'icon-write'
    });
  }
});