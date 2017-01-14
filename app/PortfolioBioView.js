var TorsoView = require('torso/modules/View'),
    bioTemplate = require('./portfolioBioTemplate.hbs');
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
  template: bioTemplate,

  /**
   * @method initialize
   * @override
   */

  initialize: function() {
    portfolioPageHeaderView.updateHeaderIcon({
      icon: 'icon-user'
    });
  }
});