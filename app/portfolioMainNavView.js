var MainNavView = require('./widgets/main-nav/MainNavView');

/**
 * View for the portfolio main nav
 */

module.exports = new (MainNavView.extend({
  navItems: [
    {
      name: 'Bio',
      id: 'bio',
      link: '#bio',
      icon: 'icon-user'
    },
    {
      name: 'Gallery',
      id: 'gallery',
      link: '#gallery',
      icon: 'icon-pictures'
    },
    {
      name: 'Blog',
      id: 'blog',
      link: '#blog',
      icon: 'icon-write'
    }
  ]
}))();