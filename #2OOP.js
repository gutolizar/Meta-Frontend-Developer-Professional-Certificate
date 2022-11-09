//Funcional programming version of the example
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
  return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);



//OOP 1
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function() {
    var calculation = purchase1.shoes * purchase1.stateTax;
    console.log('Total price:', calculation);
  }
}
purchase.totalPrice(); //the result is 120


//OOP 2
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
      var calculation = purchase2.shoes * purchase.stateTax;
      console.log('Total price:', calculation);
   {
}
purchase2.totalPrice(); //the result is 60
      
      

//OOP 3 - THIS
//Here we save resources by reusing some methods on both objects
      
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function() {
    var calculation = this.shoes * this.stateTax;
    console.log('Total price:', calculation);
  }
}
purchase.totalPrice(); //the result is 120

      
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
      var calculation = this.shoes * this.stateTax;
      console.log('Total price:', calculation);
  }
}
purchase2.totalPrice(); //the result is 60      
