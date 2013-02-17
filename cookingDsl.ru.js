(function() {
  var root;
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.Рецепт = (function() {
    function Рецепт(dish) {
      this.dish = dish;
      this.step = 1;
      this.store = [];
      this.instruction = [];
    }
    Рецепт.prototype.operation = function(name, params) {
      var cstep;
      this.instruction.push(["Шаг-" + this.step + ":", name].concat(params));
      if (name === "взять") {
        this.store.push(params);
      }
      this.step++;
      return cstep = "шаг-" + (this.step - 1);
    };
    Рецепт.stepDescr = function(params) {
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
    Рецепт.prototype.взять = function(what, amount) {
      return this.operation("взять", [what, amount]);
    };
    Рецепт.prototype.пожарить = function(raw) {
      return this.operation("пожарить", [raw]);
    };
    Рецепт.prototype.почистить = function(what) {
      return this.operation("почистить", [what]);
    };
    Рецепт.prototype.порезать = function(what) {
      return this.operation("порезать", [what]);
    };
    Рецепт.prototype.смешать = function(components) {
      return this.operation("смешать", [components]);
    };
    Рецепт.prototype.сварить = function(raw) {
      return this.operation("сварить", [raw]);
    };
    Рецепт.prototype.сформировать = function(raw, number, whichform) {
      return this.operation("сформировать", [raw, number, whichform]);
    };
    Рецепт.prototype.положить = function(whichform, filling) {
      return this.operation("положить", [whichform, filling]);
    };
    Рецепт.prototype.добавить = function(what, where) {
      return this.operation("добавить", [what, where]);
    };
    Рецепт.prototype.испечь = function(raw, temperature) {
      return this.operation("испечь", [raw, temperature]);
    };
    Рецепт.prototype.GetInstruction = function() {
      var cstep, res, _fn, _i, _len, _ref;
      res = "";
      _ref = this.instruction;
      _fn = function(cstep) {
        return res = res + Рецепт.stepDescr(cstep) + "<br/>";
      };
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cstep = _ref[_i];
        _fn(cstep);
      }
      return res;
    };
    Рецепт.prototype.GetStore = function() {
      var cstep, res, _fn, _i, _len, _ref;
      res = "";
      _ref = this.store;
      _fn = function(cstep) {
        return res = res + Рецепт.stepDescr(cstep) + "<br/>";
      };
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cstep = _ref[_i];
        _fn(cstep);
      }
      return res;
    };
    Рецепт.prototype.Приготовить = function() {
      return this.operation("Place preparation instructions", []);
    };
    return Рецепт;
  })();
}).call(this);
