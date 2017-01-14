var TorsoView = require('torso/modules/View'),
    pageHeaderTemplate = require('./pageHeaderTemplate.hbs');

/**
 * Widget to display the page header. Actual page header items must be
 * added via extending this class.
 *
 * @class PageHeaderView
 * @extends Torso.View
 * @constructor
 */
module.exports = TorsoView.extend({
  tagName: 'header',
  className: 'portfolio-page-header',
  template: pageHeaderTemplate,

  /**
   * @method updateHeaderIcon
   * @param options {object} the icon to be set on the header
   */
  updateHeaderIcon: function(options) {
    this.set({
      icon: options.icon
    });
  },

  /**
   * @method initialize
   * @override
   */
  initialize: function() {
    this.set('authorName', this.authorName);
    this.set('authorPhoto', this.authorPhoto);
    this.listenTo(this.viewState, 'change', this.render);
  }
});