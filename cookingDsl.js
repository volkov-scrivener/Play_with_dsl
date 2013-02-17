(function() {
  var root;
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.Recipe = (function() {
    function Recipe(dish) {
      this.dish = dish;
      this.step = 1;
      this.store = [];
      this.instruction = [];
    }
    Recipe.prototype.operation = function(name, params) {
      var cstep;
      this.instruction.push(["step-" + this.step + ":", name].concat(params));
      if (name === "take") {
        this.store.push(params);
      }
      this.step++;
      return cstep = "step-" + (this.step - 1);
    };
    Recipe.stepDescr = function(params) {
      var cstep, res, _fn, _i, _len;
      res = "";
      _fn = function(cstep) {
        return res = "" + res + " " + cstep;
      };
      for (_i = 0, _len = params.length; _i < _len; _i++) {
        cstep = params[_i];
        _fn(cstep);
      }
      return res;
    };
    Recipe.prototype.take = function(what, amount) {
      return this.operation("take", [what, amount]);
    };
    Recipe.prototype.cook = function(raw) {
      return this.operation("cook", [raw]);
    };
    Recipe.prototype.peel = function(what) {
      return this.operation("peel", [what]);
    };
    Recipe.prototype.slice = function(what) {
      return this.operation("slice", [what]);
    };
    Recipe.prototype.mix = function(components) {
      return this.operation("mix", [components]);
    };
    Recipe.prototype.boil = function(raw) {
      return this.operation("boil", [raw]);
    };
    Recipe.prototype.form = function(raw, number, whichform) {
      return this.operation("form", [raw, number, whichform]);
    };
    Recipe.prototype.place = function(whichform, filling) {
      return this.operation("place", [whichform, filling]);
    };
    Recipe.prototype.add = function(what, where) {
      return this.operation("add", [what, where]);
    };
    Recipe.prototype.bake = function(raw, temperature) {
      return this.operation("bake", [raw, temperature]);
    };
    Recipe.prototype.GetInstruction = function() {
      var cstep, res, _fn, _i, _len, _ref;
      res = "";
      _ref = this.instruction;
      _fn = function(cstep) {
        return res = res + Recipe.stepDescr(cstep) + "<br/>";
      };
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cstep = _ref[_i];
        _fn(cstep);
      }
      return res;
    };
    Recipe.prototype.GetStore = function() {
      var cstep, res, _fn, _i, _len, _ref;
      res = "";
      _ref = this.store;
      _fn = function(cstep) {
        return res = res + Recipe.stepDescr(cstep) + "<br/>";
      };
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cstep = _ref[_i];
        _fn(cstep);
      }
      return res;
    };
    Recipe.prototype.Prepare = function() {
      return this.operation("Place preparation instructions", []);
    };
    return Recipe;
  })();
}).call(this);
