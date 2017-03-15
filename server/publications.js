// Этот код обезопасит нас от того, что клиент будет иметь доступ к
// отмеченным постам. Это именно тот способ, которым можно сделать Meteor
// -приложения безопасными: просто убедитесь, что вы публикуете только те
// данные, к которым вы хотите предоставить доступ на клиенте.


Meteor.publish('menuItems', function() {
  return MenuItems.find();
});