var Cat = function(name) {
  this.name = ko.observable(name);
  this.count = ko.observable(0);
  this.img = ko.observable("http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg");
  this.imgAttr = ko.observable("http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg");
  this.stage = ko.computed(function(){
    if (this.count() < 3)
      return "newborn";
    if (this.count() < 6)
      return "infant";
    if (this.count() < 8)
      return "child";
    if (this.count() < 10)
      return "teen";
    else
      return "adult";
  }, this);
  return this;
};

var ViewModel = function(){
  this.cat = ko.observable(new Cat("Benjamin"));

  this.incrementCounter = function(){
    this.cat().count(this.cat().count() + 1);
  }
};

ko.applyBindings(new ViewModel());
