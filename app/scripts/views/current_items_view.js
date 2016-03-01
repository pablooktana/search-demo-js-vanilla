var CurrentItemsView = function(container) {
  this.container = $(container);
  this.items     = [];
  this.engine  = Handlebars;
};
$.extend(CurrentItemsView.prototype, EventEmitter.prototype);
CurrentItemsView.prototype.render = function () {
  var template = this.engine.compile($('#current-items').html());
  this.container.empty().html(template({items: this.items}));
  this.emit('render');
};
