var MainNavView = require('./widgets/main-nav/MainNavView');

/**
 * View for the portfolio main nav
 */

module.exports = new (MainNavView.extend({
  navItems: [
    {
      name: 'About',
      id: 'about',
      link: '#about',
      icon: 'icon-info2'
    },
    {
      name: 'Blog',
      id: 'blog',
      link: '#blog',
      icon: 'icon-write'
    },
    {
      name: 'Gallery',
      id: 'gallery',
      link: '#gallery',
      icon: 'icon-pictures'
    },
    {
      name: 'Bio',
      id: 'bio',
      link: '#bio',
      icon: 'icon-user'
    }
  ]
}))();