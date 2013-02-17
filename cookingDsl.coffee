root = exports ? this

class root.Recipe
  constructor: (@dish) ->
    @step = 1
    @store = []
    @instruction = []

  operation: (name, params) ->
    @instruction.push(["step-#{@step}:", name].concat params)
    if(name is "take")
      @store.push(params)
    @step++
    cstep = "step-#{@step-1}"

  @stepDescr: (params) ->
    res = ""
    for cstep in params
      do (cstep) ->
        res = "#{res} #{cstep}"
    res

  take: (what, amount) ->
    @operation "take", [what, amount]

  cook: (raw) ->
    @operation "cook", [raw]

  peel: (what) ->
    @operation "peel", [what]

  slice: (what) ->
    @operation "slice", [what]

  mix: (components) ->
    @operation "mix", [components]

  boil: (raw) ->
    @operation "boil", [raw]

  form: (raw, number, whichform) ->
    @operation "form", [raw, number, whichform]

  place: (whichform, filling) ->
    @operation "place", [whichform, filling]

  add: (what, where) ->
    @operation "add", [what, where]

  bake: (raw, temperature) ->
    @operation "bake", [raw, temperature]

  GetInstruction: () ->
    res = ""
    for cstep in @instruction
      do (cstep) ->
        res = res + Recipe.stepDescr(cstep) + "<br/>"
    res

  GetStore: () ->
    res = ""
    for cstep in @store
      do (cstep) ->
        res = res + Recipe.stepDescr(cstep) + "<br/>"
    res

  Prepare: () ->
    @operation "Place preparation instructions", []
