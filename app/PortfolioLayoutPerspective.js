var TorsoView = require('torso/modules/View'),
    portfolioLayoutTemplate = require('./portfolioLayoutTemplate.hbs'),
    portfolioPageHeaderView = require('./portfolioPageHeaderView'),
    portfolioPageFooterView = require('./portfolioPageFooterView'),
    mainNavView = require('./portfolioMainNavView');

/**
 * Layout Perspective for the portfolio app
 *
 * @class portfolioLayoutPerspective
 */
module.exports = TorsoView.extend({
  className: 'app',
  moduleNamespace: 'Beiyi Wu',
  template: portfolioLayoutTemplate,

  events: {
    'click': '_closeMainNav'
  },

  /**
   * Close Main Nav drawer and its dropdowns.
   *
   * @method _closeMainNav
   * @private
   */
  _closeMainNav: function() {
    this._mainNavView.closeMainNav();
  },

  /**
   * Set which contentView to display.
   *
   * @method setContentView
   * @param contentView {Torso.View} the view to render in the page content section of the layout template
   */
  setContentView: function(contentView) {
    if (this.contentView) {
      this.stopListening(this.contentView.viewState);
    }

    this.contentView = contentView;
    this.render();
  },

  /**
   * @method initialize
   * @override
   */
  initialize: function() {
    this._portfolioPageHeaderView = portfolioPageHeaderView;
    this._portfolioPageFooterView = portfolioPageFooterView;
    this._mainNavView = mainNavView;
    this.listenTo(this.viewState, 'change', this.render);
  },

  /**
   * @method attachTrackedViews
   * @override
   */
  attachTrackedViews: function() {
    this.attachView('page-content', this.contentView);
    this.attachView('page-header', this._portfolioPageHeaderView, {shared: true});
    this.attachView('page-footer', this._portfolioPageFooterView, {shared: true});
    this.attachView('main-nav', this._mainNavView, {shared: true});
  }
});