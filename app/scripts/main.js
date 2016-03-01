var fakeFilterCriteria = [
  function(item) {
    return item.isActive === true;
  },
  function(item) {
    return item.isActive === false;
  },
  function(item) {
    return item.age % 3 === 0;
  }
];

function getRandomFilter() {
  return fakeFilterCriteria[Math.floor(Math.random() * fakeFilterCriteria.length)];
}

$(document).on('ready', function(){
  var taxonView = new TaxonView('#taxon-container', taxons);
  var currentItemsView = new CurrentItemsView('#current-items-container');
  var messageView = new MessageView('#messages-container');
  var itemsManager = new ItemsManager();

  taxonView.on('taxon-selected', function(){
    var criteria = taxonView.getSelected();
    itemsManager.find(criteria).then(function(response){
      currentItemsView.items = response.data.filter(getRandomFilter());
      currentItemsView.render();
    });
  });
  currentItemsView.on('render', function(){
    messageView.render('success', 'Items loaded!');
  });
});
