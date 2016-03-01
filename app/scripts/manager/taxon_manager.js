var TaxonManager = function (taxons, transport) {
  this.taxons = taxons || [];
  this.transport = transport || axios;
};
TaxonManager.prototype.load = function () {
  return this.transport.get('data-taxons.json');
};
var taxons = new TaxonManager();
