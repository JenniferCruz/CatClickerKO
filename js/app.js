var initialCats = [
  {
    'name' : 'Benjamin',
    'img' : 'http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg',
    'attribution' : 'http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg',
    'nickname' : ['mishu', 'gato', 'leChat', 'Alejandro']
  },
  {
    'name' : 'Aurora',
    'img' : 'http://40.media.tumblr.com/tumblr_m3gxhpxa3d1rsgwqco1_500.jpg',
    'attribution' : 'http://40.media.tumblr.com/tumblr_m3gxhpxa3d1rsgwqco1_500.jpg',
    'nickname' : ['princess', 'sleeping beauty']
  },
  {
    'name' : 'Steph',
    'img' : 'https://s-media-cache-ak0.pinimg.com/236x/8b/98/38/8b983886357c52a04699c729486d043b.jpg',
    'attribution' : 'https://s-media-cache-ak0.pinimg.com/236x/8b/98/38/8b983886357c52a04699c729486d043b.jpg',
    'nickname' : ['phany', 's']
  },
  {
    'name' : 'Susu',
    'img' : 'http://img.allw.mn/content/2013/11/29215947_9397.jpg',
    'attribution' : 'http://img.allw.mn/content/2013/11/29215947_9397.jpg',
    'nickname' : ['Su']
  }
];

var Cat = function(data) {
  this.name = ko.observable(data.name);
  this.count = ko.observable(0);
  this.img = ko.observable(data.img);
  this.imgAttr = ko.observable(data.attribution);
  this.nickname = ko.observableArray(data.nickname);
  this.stage = ko.computed(function(){
    if (this.count() < 3)
      return 'newborn';
    if (this.count() < 6)
      return 'infant';
    if (this.count() < 8)
      return 'child';
    if (this.count() < 10)
      return 'teen';
    else
      return 'adult';
  }, this);
  return this;
};

var ViewModel = function(){
  var self = this;

  self.cats = ko.observableArray([]);
  initialCats.forEach(function(catItem) {
    self.cats.push(ko.observable(new Cat(catItem)));
  });

  self.currentCat = ko.observable(undefined);

  self.setCurrentCat = function(clickedCat) {
    self.currentCat(clickedCat);
    // self.currentCat(this);
  }

  self.incrementCounter = function(cat){
    cat.count(cat.count() + 1);
    // self.cat().count(self.cat().count() + 1);
    // this.count(this.count() + 1);
  }
};

ko.applyBindings(new ViewModel());
