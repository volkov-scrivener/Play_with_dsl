root = exports ? this

class root.Patties_with_potatoes extends Recipe
  constructor: () ->
    super "Patties with potatoes"

  Prepare: () ->
    fried_onions = @cook @slice (@take "onion", "2pcs")

    boiled_potatoes = @boil @peel @take "potatoes", "7pcs"

    @add( boiled_potatoes, [
      @take "salt", "0.5tsp"
      @take "butter", "50gms"
    ])

    mince = @mix [boiled_potatoes, fried_onions]

    dough = @mix [
      @take "flour", "500gms"
      @take "butter", "50gms"
      @take "water", "200gms"
      @take "salt", "0.5tsp"
    ]

    pie = @form dough, "20pcs", "pie"

    raw_patties = @add pie, mince

    patties = @bake raw_patties, "200C"

