var TorsoView = require('torso/modules/View'),
    showcaseTemplate = require('./portfolioShowcaseTemplate.hbs');
    portfolioPageHeaderView = require('./portfolioPageHeaderView');

/**
 * Showcase View
 *
 * @class GalleryView
 */
module.exports = TorsoView.extend({
  tagName: 'main',
  className: 'portfolio-page-content',
  id: 'main-content',
  moduleNamespace: 'Beiyi Wu',
  template: showcaseTemplate,

  /**
   * @method initialize
   * @override
   */

  initialize: function() {
    portfolioPageHeaderView.updateHeaderIcon({
      icon: 'icon-pictures'
    });
  }
});