var TorsoView = require('torso/modules/View'),
    aboutTemplate = require('./portfolioAboutTemplate.hbs');
    portfolioPageHeaderView = require('./portfolioPageHeaderView');

/**
 * Bio View
 *
 * @class BioView
 */
module.exports = TorsoView.extend({
  tagName: 'main',
  className: 'portfolio-page-content',
  id: 'main-content',
  moduleNamespace: 'Beiyi Wu',
  template: aboutTemplate,

  /**
   * @method initialize
   * @override
   */

  initialize: function() {
    portfolioPageHeaderView.updateHeaderIcon({
      icon: 'icon-info2'
    });
  }
});