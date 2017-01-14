var PageHeaderView = require('./widgets/page-header/PageHeaderView');

/**
 * View for the portfolio main nav
 */

module.exports = new (PageHeaderView.extend({
  authorName: 'Beiyi Wu',
  authorPhoto: './assets/img/author.jpg',
}))();