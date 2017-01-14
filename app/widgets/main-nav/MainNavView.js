var $ = require('jquery'),
    TorsoView = require('torso/modules/View'),
    mainNavTemplate = require('./mainNavTemplate.hbs');

/**
 * Widget to display the main nav. Actual navigation items must be
 * added via extending this class.
 *
 * @class MainNavView
 * @extends Torso.View
 * @constructor
 */

module.exports = TorsoView.extend({
  tagName: 'nav',
  className: 'portfolio-main-nav',
  template: mainNavTemplate,

  events: {
    'click [data-js-action="toggleMainNav"]': '_toggleMainNav'
  },

  /**
   * Toggle main nav
   *
   * @method _toggleMainNav
   * @private
   */
  _toggleMainNav: function() {
    if (this.get('mainNavOpen')) {
      this.closeMainNav();
    } else {
      this._openMainNav();
    }
    return false;
  },

  /**
   * Open main nav
   *
   * @method _openMainNav
   * @private
   */
  _openMainNav: function() {
    this.set('mainNavOpen', true);
  },

  /**
   * Close main nav
   *
   * @method closeMainNav
   */
  closeMainNav: function() {
    this.set('mainNavOpen', false);
  },

  /**
   * @method initialize
   * @override
   */
  initialize: function() {
    this.set('mainNavOpen', false);
    this.set('navItems', this.navItems);
    this.listenTo(this.viewState, 'change:mainNavOpen', this.render);
  }
});