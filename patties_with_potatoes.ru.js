(function() {
  var root;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.Пирожки_с_картошкой = (function() {
    __extends(Пирожки_с_картошкой, Рецепт);
    function Пирожки_с_картошкой() {
      Пирожки_с_картошкой.__super__.constructor.call(this, "Пирожки с картошкой");
    }
    Пирожки_с_картошкой.prototype.Приготовить = function() {
      var вареная_картошка, жаренный_лук, лепешки, начинка, пирожки, сырые_пирожки, тесто;
      жаренный_лук = this.пожарить(this.порезать(this.взять("лук", "2шт")));
      вареная_картошка = this.сварить(this.почистить(this.взять("картошка", "7шт")));
      this.добавить(вареная_картошка, [this.взять("соль", "0.5ч/л"), this.взять("сливочное масло", "50г")]);
      начинка = this.смешать([вареная_картошка, жаренный_лук]);
      тесто = this.смешать([this.взять("мука", "500г"), this.взять("сливочное масло", "50г"), this.взять("вода", "200г"), this.взять("соль", "0.5с/л")]);
      лепешки = this.сформировать(тесто, "20шт", "лепешки");
      сырые_пирожки = this.добавить(лепешки, начинка);
      return пирожки = this.испечь(сырые_пирожки, "200С");
    };
    return Пирожки_с_картошкой;
  })();
}).call(this);
