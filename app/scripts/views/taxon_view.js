var TaxonView = function(container, manager) {
  this.container = $(container);
  this.engine  = Handlebars;
  this.manager = manager;
  this.taxons  = [];
  this.handle();
  this.load();
};
$.extend(TaxonView.prototype, EventEmitter.prototype);
TaxonView.prototype.handle = function () {
  var self = this;
  this.container.on('click', '.taxon-list li', function(){
    $(this).find('span').toggleClass('badge badge-default');
    self.emit('taxon-selected');
  });
};
TaxonView.prototype.load = function () {
  var self = this;
  this.manager.load().then(function(response){
    self.taxons = response.data;
    self.render();
  });
};
TaxonView.prototype.getSelected = function () {
  return this.container.find('.badge').map(function(idx, item){
    console.log(item);
    return $(item).text();
  });
};
TaxonView.prototype.render = function () {
  var template = this.engine.compile($('#taxons').html());
  this.container.empty().html(template({taxons: this.taxons}));
};
