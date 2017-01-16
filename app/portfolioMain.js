var $ = require('jquery'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    PerspectiveRouter = require('./PerspectiveRouter'),
    handlebarsHelpers = require('./handlebarsHelpers');

Backbone.$ = $;
window.jQuery = $;
window.$ = $;

// Register Handlebars helpers
handlebarsHelpers(Handlebars);

// Views
var PortfolioLayoutPerspective = require('./PortfolioLayoutPerspective'),
    PortfolioHomeView = require('./PortfolioHomeView'),
    PortfolioBioView = require('./PortfolioBioView'),
    PortfolioShowcaseView = require('./PortfolioShowcaseView'),
    PortfolioBlogView = require('./PortfolioBlogView'),
    PortfolioAboutView = require('./PortfolioAboutView'),
    mainNavView = require('./portfolioMainNavView');

/**
 * Router App for the portfolio
 *
 * @class portfolioMain
 * @static
 */
var portfolioMain = new (PerspectiveRouter.extend({
  routes: {
    '(/)':  '_homePerspective',
    'bio': '_bioPerspective',
    'showcase': '_showcasePerspective',
    'blog': '_blogPerspective',
    'about': '_aboutPerspective'
  },

  /**
   * @method initialize
   * @override
   */
  initialize: function() {
    this._portfolioApp = new PortfolioLayoutPerspective();
  },

  /**
   * Starts the application.
   * Stop the history if it's already started. Bind the routes, and start the history.
   *
   * @method start
   */
  start: function() {
    Backbone.history.stop();
    this._bindRoutes();
    Backbone.history.start();
  },

  /**
   * Changes to the new perspective.
   *
   * @method _switchPerspectives
   * @param newPerspective {Torso.View} the new perspective to switch to.
   * @private
   */
  _switchPerspectives: function(newPerspective) {
    if (newPerspective === this._perspective) {
      return
    };
    this._closePerspective;

    if (newPerspective) {
      this._perspective = newPerspective;
      document.title = this._perspective.moduleNamespace;
      this._perspective.attachTo($('.app'));
    }
  },

  /**
   * Close (Detach) the current perspective.
   *
   * @method _closePerspective
   * @private
   */
  _closePerspective: function() {
    if (this._perspective) {
      this._perspective.detach();
    }
  },

  /**
   * Change page content view within the Portfolio Layout.
   *
   * @method _switchPageContent
   * @param contentView {Torso.View} the new view to switch to.
   * @param currentNavItem {String} the nav item that should be highlighted.
   * @private
   */
  _switchPageContent: function(contentView, currentNavItem) {
    this._portfolioApp.setContentView(contentView);
    this._switchPerspectives(this._portfolioApp);
    document.title = contentView.moduleNamespace + ' - ' + currentNavItem;
  },

  /**
   * Use the Home View
   *
   * @method _homePerspective
   * @private
   */
  _homePerspective: function() {
    this._homeView = new PortfolioHomeView();
    this._switchPerspectives(this._homeView);
  },

  /**
   * Use the Bio View
   *
   * @method _bioPerspective
   * @private
   */
  _bioPerspective: function() {
    this._bioView = new PortfolioBioView();
    this._switchPageContent(this._bioView, 'Bio');
  },

  /**
   * Use the Showcase View
   *
   * @method _galleryPerspective
   * @private
   */
  _showcasePerspective: function() {
    this._showcaseView = new PortfolioShowcaseView();
    this._switchPageContent(this._showcaseView, 'Showcase');
  },

  /**
   * Use the Blog View
   *
   * @method _blogPerspective
   * @private
   */
  _blogPerspective: function() {
    this._blogView = new PortfolioBlogView();
    this._switchPageContent(this._blogView, 'Blog');
  },

  /**
   * Use the About View
   *
   * @method _aboutPerspective
   * @private
   */
  _aboutPerspective: function() {
    this._aboutView = new PortfolioAboutView();
    this._switchPageContent(this._aboutView, 'Blog');
  }
}))();

portfolioMain.start();

module.exports = portfolioMain;