var TorsoView = require('torso/modules/View'),
    pageFooterTemplate = require('./portfolioPageFooterTemplate.hbs');

/**
 * Widget to display the page header. Actual page header items must be
 * added via extending this class.
 *
 * @class PageHeaderView
 * @extends Torso.View
 * @constructor
 */
module.exports = new (TorsoView.extend({
  tagName: 'footer',
  className: 'portfolio-page-footer',
  template: pageFooterTemplate
}))();