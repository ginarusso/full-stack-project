const cocktailsArr = [
    {   
        cocktail_name: "Nutella and cognac coffee cocktail",
        difficulty: "Easy",
        image_url: "https://apipics.s3.amazonaws.com/coctails_api/1.jpg",
        portion: "Makes 4",
        time: "Hands-on time 10 min, plus 2 hours freezing",
        description: "An Irish coffee amped up to eleven - this utterly delicious cocktail involves croissant-infused cognac and a Nutella syrup to bolster the coffee and whipped cream. Sounds very fancy, but actually very simple.",
        ingredients: [
            "80g croissant, chopped",
            "240ml cognac",
            "50g Nutella",
            "25g demerara sugar",
            "200ml hot coffee",
            "200g double cream to serve",
            "Toasted coconut flakes to serve"
        ], 
        method: [
            "Put the croissant and cognac in a blender or food processor and whizz until smooth. Transfer to a freezable container, cover and freeze for at least 2 hours. Strain through a very fine sieve (or for an even clearer finish, through coffee filter paper) and reserve.",
            "Put the Nutella, sugar and 25ml water in a small saucepan and gently warm until the sugar has dissolved. Leave to cool.",
            "To make the cocktail, measure out 50ml croissant cognac and 25ml Nutella syrup in each glass, then top up with 50ml hot coffee in each, stirring to combine. Put a spoon over the top of the coffee and gently pour double cream onto it (it should float on the surface of the coffee). Garnish with toasted coconut flakes."
        ],
        category: "hot",
        alcohol_id: 7
    },
     {
        cocktail_name: "Easy rhubarb cordial",
        difficulty: "Easy",
        portion: "Makes approx. 300ml (enough to serve 10)",
        time: "Hands-on time 10 min, plus 2 hours freezing",
        description: "This homemade rhubarb cordial highlights both the sweet and vegetal flavours of rhubarb. It's a nice light, bright and spritzy drink that should go well with just about everything as it's not too sweet. Follow our serving suggestion to make a simple rhubarb cocktail.",
        category: "non-alcoholic",
        ingredients: [
            "500g rhubarb, cut into 1cm slices, chopped",
            "200g granulated sugar",
            "300ml non-alcoholic spirit (Roberta uses Feragaia) or gin to serve (optional)",
            "Soda water to serve",
            "Rhubarb ribbons to serve (optional)"
        ],
        method: [
            "Put 300g of the rhubarb in a container and freeze. Put the remaining rhubarb in a jar or container with the sugar and 100ml water, giving it a good stir, then cover and put in the fridge for 2-3 days - it's a long time to wait, but this will allow the sugar to dissolve and the rhubarb's colour and flavour to infuse into the liquid.",
            "After 2-3 days, put the frozen rhubarb in a metal bowl. Cover tightly with foil, then set it over a pan of simmering water. Leave the rhubarb to defrost and then cook like this for 2 hours - the freezing process breaks down the cells in the rhubarb which then allows the juice to leach out of it once heated.",
            "Strain the juice from the frozen and cooked rhubarb into a sterilised jar or bottle, then strain the syrupy liquid from the other rhubarb into it, mixing the two liquids together. Keep in the fridge for up to a week. To serve, mix 30ml of the rhubarb cordial with 30ml of non-alcoholic spirit or gin, then top with soda water. Garnish with a ribbon of rhubarb (if you like)."
        ],
        image_url: "https://apipics.s3.amazonaws.com/coctails_api/2.jpg",
        alcohol_id: 8
    },
    {
        cocktail_name: "Bottled chocolate orange negroni",
        difficulty: "Easy",
        portion: "Makes 840ml (enough for 8 cocktails)",
        time: "Hands-on time 10 min",
        description: "Bottle up chocolate-orange negronis to make fabulous homemade gifts. The flavors mingle and mellow in the bottle, making for a seriously smooth sip.",
        category: "short",
        ingredients: [
            "300ml dry gin (we used Tanqueray)",
            "225ml sweet red vermouth (we used Punt e Mes)",
            "225ml Campari",
            "75ml crème de cacao or chocolate liqueur (we used Mozart Dark Chocolate Liqueur)",
            "8 dashes Angostura orange bitters (optional but recommended)",
            "Pared zest 1 orange",
            "Clean glass bottles"
        ],
        method: [
            "Measure out and pour all the ingredients (except the orange zest) into a large jug and give them a good mix. Put a strip of orange zest in each bottle then, using a funnel, begin filling them up. Give the cocktail a good stir right before you fill each bottle to ensure each one is getting an even mix of the ingredients.",
            "Seal and label the bottles. The negroni is best served in a glass full of ice, stirred for about 20 seconds, then garnished with a twist of orange peel or a thin slice of fresh orange. You can also grate a little dark chocolate over the top for added chocolate-orange goodness.",
        ],
        image_url: "https://apipics.s3.amazonaws.com/coctails_api/3.jpg",
        alcohol_id: 3
    },
    {
        cocktail_name: "Pickled bramble martini",
        difficulty: "Easy",
        portion: "Serves 1",
        time: "Hands on time 5 min, plus pickling time.",
        description: "This pickled bramble martini is a hedgerow treat. Quick pickle blackberries in wine vinegar, then add a little of the liquor to a martini for a taste of autumn.",
        category: "short",
        ingredients: [
            "10 blackberries",
            "1 tsp caster sugar",
            "1 tsp salt",
            "4 tbsp white wine vinegar",
            "Dash of dry vermouth",
            "60ml gin",
            "Thyme sprig (to serve)",
            "Martini glass or coupe"
        ],
        method: [
            "Put the blackberries in a small bowl. In another small bowl, combine the caster sugar, salt and white wine vinegar, then pour it over the fruit. Leave for at least 15 minutes.",
            "Fill a cocktail shaker with ice, add a dash of dry vermouth, stir, then drain away almost all the liquid (or leave it in if you prefer your martini ‘wet’). Pour in the gin, stir well, then strain into a martini glass or coupe.",
            "Add 1 tbsp of the pickling liquid, then garnish with one of the pickled blackberries and a thyme sprig." 
        ],
        image_url: "https://apipics.s3.amazonaws.com/coctails_api/4.jpg",
        alcohol_id: 3
    },
    {
        cocktail_name: "Toasted marshmallow hot-buttered rum",
        difficulty: "Easy",
        portion: "Serves 1",
        time: "Hands-on time 5 min",
        description: "Add a touch of Bonfire Night theatre to hot-buttered rum with a smouldering marshmallow garnish. Just remember to blow it out before you take a sip!",
        category: "hot",
        ingredients: [
            "60ml dark rum",
            "1 marshmallow",
            "1 tbsp unsalted butter softened",
            "1 tbsp light brown sugar",
            "A pinch ground cinnamon",
            "A pinch ground ginger",
            "¼ tsp vanilla extract",
            "1 tsp caster sugar"
        ],
        method: [
            "Pour the rum in a shallow bowl and sit the marshmallow in it, rolling it around to coat.",
            "In a heatproof glass mug, add the softened butter, light brown sugar, a pinch each of ground cinnamon and ginger and the vanilla extract. Mix together, then tip in the rum.",
            "Top up with hot water, stir, then sprinkle the marshmallow with the caster sugar. Thread it onto a skewer and set it alight with a blowtorch or over a firepit to toast."
        ],
        image_url: "https://apipics.s3.amazonaws.com/coctails_api/5.jpg",
        alcohol_id: 4
    },
    {
        cocktail_name: "Sangria",
        difficulty: "Easy",
        portion: "Serves 6-8",
        time: "Hands-on time 15 min",
        description: "Transport yourself to Spain with our ultimate sangria – perfect for enjoying on long summer days and well into the evenings. Our version pairs a fruity red wine with oranges, brandy and a touch of sparkling water.",
        category: "punch",
        ingredients: [
            "1 lemon, sliced",
            "1 orange, sliced",
            "100ml brandy",
            "300ml orange juice",
            "750ml red wine (we like rioja)",
            "50g caster sugar (optional)",
            "300ml sparkling water"
        ],
        method: [
            "Put the lemon and orange slices in a large jug. Add the brandy, orange juice and wine. You can also add sugar if you prefer it a little sweeter. Stir together, cover and chill for 1 hour – this helps all the flavours mingle.",
            "When ready to serve, add plenty of ice to the jug then top with sparkling water."
        ],
        image_url: "https://apipics.s3.amazonaws.com/coctails_api/6.jpg",
        alcohol_id: 9
    },
    {
        cocktail_name: "Umibozu yuzu cocktail",
        difficulty: "Easy",
        portion: "Serves 1",
        time: "Hands-on time 5 min",
        description: "The key to this zingy yuzu and gin cocktail is a superb sake spiked with the Japanese citrus fruit yuzu. Perfect for summer sipping, this cocktail recipe is from Holly Bennetts at The Greenbank Hotel in Falmouth, Cornwall.",
        category: "specialty",
        ingredients: [
            "50ml gin",
            "35ml Akashi-Tai Ginjo", "Yuzushu sake (see tips)",
            "2 tsp ginger syrup (from a jar of stem ginger)",
            "2 tsp marmalade",
            "1 egg white (or use a vegan cocktail foamer)",
            "Dried edible flower petals"
        ],
        method: [
            "Fill a shaker with ice, then add the gin, Yuzushu sake, ginger syrup and marmalade. Add 1 egg white (or use a vegan cocktail foamer) then shake well. Strain into a jug, tip the ice out of the shaker, then return to the shaker and shake again (for a silkier texture).",
            "Strain into a chilled coupe glass, then garnish with dried edible flower petals or a twist of lemon – and a bit of origami if you’re feeling creative!"
        ],
        image_url: "https://apipics.s3.amazonaws.com/coctails_api/7.jpg",
        alcohol_id: 3
    },    
    {
        cocktail_name: "Aperol spritz",
        difficulty: "Easy",
        portion: "Serves 6-8",
        time: "Hands-on time 5 min",
        description: "Get into the spirit of summer with this classic Italian recipe. Chilled prosecco and Aperol come together to create the beloved Aperol spritz.",
        category: "apertif",
        ingredients: [
            "750ml bottle of prosecco",
            "Bag of ice",
            "Bottle of Aperol",
            "Bottle of soda water",
            "Slice of orange"
        ],
        method: [
            "Chill the bottle of prosecco and Aperol in the fridge.",
            "Fill 6 or 8 wine glasses or tall tumblers with a couple of ice cubes and roughly three parts prosecco to one part Aperol.",
            "Add a splash of soda water and a slice of orange. Serve straightaway so that the fizz stays lively."
        ],
        image_url: "https://apipics.s3.amazonaws.com/coctails_api/45.jpg",
        alcohol_id: 10
    }
]

module.exports = cocktailsArr