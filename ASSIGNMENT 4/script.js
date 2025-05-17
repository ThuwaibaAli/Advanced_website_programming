function displayWelcome() {
    const name = document.getElementById("username").value.trim();
    const msg = document.getElementById("welcome-msg");
    if (name.length > 3) {
      msg.textContent = `Welcome to the site, ${name}!`;
    } else {
      msg.textContent = "Name must be longer than 3 characters.";
    }
  }
  
  function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultField = document.getElementById("calc-result");
    if (isNaN(num1) || isNaN(num2)) {
      resultField.textContent = "Enter valid numbers.";
      return;
    }
    let result = operation === 'multiply' ? num1 * num2 : num1 / num2;
    resultField.textContent = `The Result is: ${result}`;
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    getArea() {
      return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  function showCircleData() {
    const radius = parseFloat(document.getElementById("radius").value);
    const output = document.getElementById("circle-output");
    if (isNaN(radius) || radius <= 0) {
      output.textContent = "Enter a valid radius.";
      return;
    }
    const circy = new Circle(radius);
    output.textContent = `Area: ${circy.getArea().toFixed(2)}, Perimeter: ${circy.getPerimeter().toFixed(2)}`;
  }
  
  function sortNumbers(ascending) {
    const nums = [
      parseFloat(document.getElementById("sort1").value),
      parseFloat(document.getElementById("sort2").value),
      parseFloat(document.getElementById("sort3").value)
    ];
    if (nums.some(isNaN)) {
      document.getElementById("sort-output").textContent = "Please enter all numbers.";
      return;
    }
    nums.sort((a, b) => ascending ? a - b : b - a);
    document.getElementById("sort-output").textContent = `Sorted: ${nums.join(', ')}`;
  }// Task 6 - describeCountry
  function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
  }
  
  
  
  document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorDiv = document.getElementById("error");
  
    let errorMsg = "";
    if (!name) errorMsg += "Name is required.<br/>";
    if (!email || !email.includes("@")) errorMsg += "Valid email is required.<br/>";
    if (!message) errorMsg += "Message cannot be empty.<br/>";
  
    if (errorMsg) {
      errorDiv.innerHTML = errorMsg;
      setTimeout(() => {
        errorDiv.innerHTML = "";
      }, 3000);
      return;
    }
  
    const data = {
      name: name,
      email: email,
      message: message
    };
  
    console.log("Sending data:", data);
    errorDiv.innerHTML = "<span style='color:green'>Message sent successfully!</span>";
  
    setTimeout(() => {
      document.getElementById("messageForm").reset();
      errorDiv.innerHTML = "";
    }, 3000);
  });
  
  
  
  const country1 = describeCountry("Finland", 6, "Helsinki");
  const country2 = describeCountry("India", 1400, "New Delhi");
  const country3 = describeCountry("Brazil", 213, "Brasília");
  console.log(country1);
  console.log(country2);
  console.log(country3);
  
  // Task 7 - percentageOfWorld variations
  function percentageOfWorld1(population) {
    return (population / 7900) * 100;
  }
  const perc1 = percentageOfWorld1(1441);
  const perc2 = percentageOfWorld1(1400);
  const perc3 = percentageOfWorld1(213);
  console.log(perc1.toFixed(1), perc2.toFixed(1), perc3.toFixed(1));
  
  const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
  };
  console.log(percentageOfWorld2(1441).toFixed(1));
  console.log(percentageOfWorld2(1400).toFixed(1));
  console.log(percentageOfWorld2(213).toFixed(1));
  
  const percentageOfWorld3 = population => (population / 7900) * 100;
  console.log(percentageOfWorld3(1441).toFixed(1));
  console.log(percentageOfWorld3(1400).toFixed(1));
  console.log(percentageOfWorld3(213).toFixed(1));
  
  // Task 8 - population array
  const populations = [1441, 1400, 213, 67];
  console.log(populations.length === 4);
  const percentages = populations.map(percentageOfWorld1);
  console.log(percentages);
  
  // Task 9 - myCountry object
  const myCountry = {
    country: "Kenya",
    capital: "Nairobi",
    language: "Swahili",
    population: 54,
    neighbours: ["Uganda", "Tanzania", "Ethiopia"],
    describe: function() {
      console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function() {
      this.isIsland = this.neighbours.length === 0 ? true : false;
    }
  };
  myCountry.describe();
  myCountry.population += 2;
  myCountry["population"] -= 2;
  myCountry.checkIsland();
  console.log(myCountry);
  
  // Task 10 - Pizza Order Form Validation
  function validatePizzaForm(event) {
    event.preventDefault();
    let errors = "";
    const fullName = document.getElementById("fullname");
    const address = document.getElementById("address");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const card = document.querySelector("input[name='card']:checked");
    const cardNum = document.getElementById("cardnumber");
    const cardName = document.getElementById("cardname");
    const spices = document.querySelectorAll("input[name='spice']:checked");
    const size = document.getElementById("size");
    const quantity = document.getElementById("quantity");
    const meat = document.querySelector("input[name='meat']:checked");
  
    if (!fullName.value.trim()) errors += "Full name is required.\n";
    if (!address.value.trim()) errors += "Address is required.\n";
    if (!/^\d{10}$/.test(phone.value)) errors += "Phone must be exactly 10 digits.\n";
    if (!/^\S+@\S+\.\S+$/.test(email.value)) errors += "Invalid email.\n";
    if (password.value.length < 5 || password.value.length > 15) errors += "Password must be 5-15 characters.\n";
    if (!card) errors += "Select a card type.\n";
    if (!cardNum.value.trim()) errors += "Card number required.\n";
    if (!cardName.value.trim()) errors += "Card name required.\n";
    if (spices.length === 0) errors += "At least one spice must be selected.\n";
    if (!size.value) errors += "Select pizza size.\n";
    if (!quantity.value || quantity.value <= 0) errors += "Enter valid quantity.\n";
    if (!meat) errors += "Select a meat option.\n";
  
    if (errors) {
      alert(errors);
    } else {
      alert("Order submitted successfully!");
    }
  }