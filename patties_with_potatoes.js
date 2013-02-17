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
  root.Patties_with_potatoes = (function() {
    __extends(Patties_with_potatoes, Recipe);
    function Patties_with_potatoes() {
      Patties_with_potatoes.__super__.constructor.call(this, "Patties with potatoes");
    }
    Patties_with_potatoes.prototype.Prepare = function() {
      var boiled_potatoes, dough, fried_onions, mince, patties, pie, raw_patties;
      fried_onions = this.cook(this.slice(this.take("onion", "2pcs")));
      boiled_potatoes = this.boil(this.peel(this.take("potatoes", "7pcs")));
      this.add(boiled_potatoes, [this.take("salt", "0.5tsp"), this.take("butter", "50gms")]);
      mince = this.mix([boiled_potatoes, fried_onions]);
      dough = this.mix([this.take("flour", "500gms"), this.take("butter", "50gms"), this.take("water", "200gms"), this.take("salt", "0.5tsp")]);
      pie = this.form(dough, "20pcs", "pie");
      raw_patties = this.add(pie, mince);
      return patties = this.bake(raw_patties, "200C");
    };
    return Patties_with_potatoes;
  })();
}).call(this);
