var TorsoView = require('torso/modules/View'),
    homeTemplate = require('./portfolioHomeTemplate.hbs'),
    portfolioPageHeaderView= require('./portfolioPageHeaderView'),
    portfolioMainNavView = require('./portfolioMainNavView');

/**
 * Home View (Splash Screen)
 *
 * @class HomeView
 */
module.exports = TorsoView.extend({
  className: 'app app--splash',
  moduleNamespace: 'Beiyi Wu',
  template: homeTemplate,

  /**
   * @method initialize
   * @override
   */
  initialize: function() {
    this.set('authorName', portfolioPageHeaderView.authorName);
    this.set('authorPhoto', portfolioPageHeaderView.authorPhoto);
    this.set('navItems', portfolioMainNavView.navItems);
    this.listenTo(this.viewState, 'change', this.render);
  }
});