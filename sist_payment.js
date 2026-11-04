// Base Payment class
class Payment {
  constructor(amount) {
    this.amount = amount;
  }
  
  process() {
    throw new Error("The process method must be implemented by subclasses");
  }
}

// Specific payment methods
class CreditCardPayment extends Payment {
  constructor(amount, cardNumber, cvv) {
    super(amount);
    this.cardNumber = cardNumber;
    this.cvv = cvv;
  }
  
  process() {
    console.log(`Processing $${this.amount} payment via Credit Card (${this.cardNumber.substr(-4)})...`);
    // Credit card processing logic would go here
    return `Payment of $${this.amount} processed successfully via Credit Card`;
  }
}

class PayPalPayment extends Payment {
  constructor(amount, email) {
    super(amount);
    this.email = email;
  }
  
  process() {
    console.log(`Processing $${this.amount} payment via PayPal (${this.email})...`);
    // PayPal processing logic would go here
    return `Payment of $${this.amount} processed successfully via PayPal`;
  }
}

class BankTransferPayment extends Payment {
  constructor(amount, accountNumber) {
    super(amount);
    this.accountNumber = accountNumber;
  }
  
  process() {
    console.log(`Processing $${this.amount} payment via Bank Transfer (${this.accountNumber})...`);
    // Bank transfer logic would go here
    return `Payment of $${this.amount} processed successfully via Bank Transfer`;
  }
}

// Checkout system that works with any payment method
function processCheckout(cart, paymentMethod) {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  console.log(`Checking out ${cart.length} items totaling $${totalAmount}`);
  
  // The magic of polymorphism: we don't need to know what type of payment is used
  const result = paymentMethod.process();
  console.log(result);
  
  console.log("Thank you for your purchase!");
}

// Usage
const shoppingCart = [
  { name: "JavaScript Book", price: 39.99 },
  { name: "Mechanical Keyboard", price: 89.99 }
];

const creditCardPayment = new CreditCardPayment(129.98, "4111111111111111", "123");
const payPalPayment = new PayPalPayment(129.98, "customer@example.com");
const bankTransferPayment = new BankTransferPayment(129.98, "GB29NWBK60161331926819");

// The checkout works with any type of payment
processCheckout(shoppingCart, creditCardPayment);
