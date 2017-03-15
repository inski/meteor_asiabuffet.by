Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('menuItems'); }
});
Router.map(function() {
  this.route('menuItems', {path: '/menuItems'});

});


Router.onBeforeAction('loading');
