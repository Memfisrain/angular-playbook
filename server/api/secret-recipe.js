const recipe = {
  id: 1, 
  title: "French <em>Toast</em>",
  instructions: `In a medium bowl, whisk together the eggs, milk, and cinnamon. 
Stir in the orange zest and/or Triple Sec if using. Whisk the mixture until well blended 
and pour into a shallow bowl, wide enough to place a slice of the bread you will be using. 
Melt some butter in a large skillet over medium high heat. Place each slice of bread into 
the milk egg mixture, allowing the bread to soak in some of it. Shake off the excess, 
and place the bread slices onto the hot skillet. Fry the French toast until browned on 
one side, then flip and brown the other side. Serve hot with butter, maple syrup, and if 
available, fresh berries.`,
  ingredients: [
  	{id: 1, name: 'Eggs', quantity: '4'},
  	{id: 2, name: 'Milk', quantity: '2/3 Cup'},
  	{id: 3, name: 'Cinnamon', quantity: '2 teaspoons'},
  	{id: 4, name: 'Day Old Bread', quantity: '8 thick slices'}
  ]
};

module.exports = function(req, res, next) {
  if(res.statusCode !== 401) {
    res.send({recipe});
    return;
  }

	res.send();
};