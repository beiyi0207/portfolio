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
      name: 'Showcase',
      id: 'showcase',
      link: '#showcase',
      icon: 'icon-pictures'
    },
    {
      name: 'Blog',
      id: 'blog',
      link: '#blog',
      icon: 'icon-write'
    },
    {
      name: 'About',
      id: 'about',
      link: '#about',
      icon: 'icon-info2'
    }
  ]
}))();