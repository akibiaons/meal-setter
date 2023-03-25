const menu = {
    _meal: 'Tacos',
    _price: 2.99,
  
    set meal(mealToCheck){
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck){
      if (typeof priceToCheck === 'number') {
        
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's special is ${this._meal} for ${this._price}!`;
      } else {
        return `Meal or price was not set correctly!`;
      }
    }
  };
  
  menu.meal = 'Tacos';
  menu.price = 2.99;
  
  console.log(menu.todaysSpecial);