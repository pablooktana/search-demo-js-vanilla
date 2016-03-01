var MessageView = function(container) {
  this.container = $(container);
  this.engine  = Handlebars;
};
MessageView.prototype.render = function (type, message) {
  var template = this.engine.compile($('#messages').html());
  this.container.empty().html(template({type: type, message: message, dissmissable: true}));
};
