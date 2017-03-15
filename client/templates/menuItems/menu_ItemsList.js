Template.menuItemsList.helpers({
  menuItems: function() {
    return MenuItems.find();
  }
});

Template.menuItemsInCart.helpers({
  menuItems: function() {
    return MenuItems.find();
  }
});
