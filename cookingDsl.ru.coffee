root = exports ? this

class root.Рецепт
  constructor: (@dish) ->
    @step = 1
    @store = []
    @instruction = []

  operation: (name, params) ->
    @instruction.push(["Шаг-#{@step}:", name].concat params)
    if(name is "взять")
      @store.push(params)
    @step++
    cstep = "шаг-#{@step-1}"

  @stepDescr: (params) ->
    res = ""
    for cstep in params
      do (cstep) ->
        res = "#{res} #{cstep}"
    res

  взять: (what, amount) ->
    @operation "взять", [what, amount]

  пожарить: (raw) ->
    @operation "пожарить", [raw]

  почистить: (what) ->
    @operation "почистить", [what]

  порезать: (what) ->
    @operation "порезать", [what]

  смешать: (components) ->
    @operation "смешать", [components]

  сварить: (raw) ->
    @operation "сварить", [raw]

  сформировать: (raw, number, whichform) ->
    @operation "сформировать", [raw, number, whichform]

  положить: (whichform, filling) ->
    @operation "положить", [whichform, filling]

  добавить: (what, where) ->
    @operation "добавить", [what, where]

  испечь: (raw, temperature) ->
    @operation "испечь", [raw, temperature]

  GetInstruction: () ->
    res = ""
    for cstep in @instruction
      do (cstep) ->
        res = res + Рецепт.stepDescr(cstep) + "<br/>"
    res

  GetStore: () ->
    res = ""
    for cstep in @store
      do (cstep) ->
        res = res + Рецепт.stepDescr(cstep) + "<br/>"
    res

  Приготовить: () ->
    @operation "Place preparation instructions", []
