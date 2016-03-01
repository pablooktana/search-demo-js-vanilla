var ItemsManager = function (items, transport) {
  this.items = items || [];
  this.transport = transport || axios;
};
ItemsManager.prototype.find = function (criteria) {
  return this.transport.get('data-items.json', criteria);
};
var itemsManager = new ItemsManager();
