//1. Get HTML Collection of all buttons
let buttons = document.getElementsByTagName("button");

//2. Convertes HTML collection to Array
let buttonsArray = Array.from(buttons);

//3. Add 'click' event listner on all the buttons
buttonsArray.forEach((button) => {
  button.addEventListener("click", printNum);
});

// 4. Create a function which will be called by event listner
function printNum(event) {
  // 4.1 -> Get the button clicked by user eg. <button>C<button>
  let button = event.target;
  // 4.2 -> Get the innerHTML of the button  eg. C
  let newValue = button.innerHTML;

  // 4.3 -> Get the screen and update the new value
  let screen = document.getElementById("screen");

  //4.4 clear screen if button 'C' is clicked
  if (newValue === "C") {
    screen.value = "";
    return;
  }

  if (newValue === "+-") {
    if (screen.value[0] === "-") {
      screen.value = screen.value.slice(1);
    } else {
      screen.value = "-" + screen.value;
    }
    return;
  }

  if ("+-*/".includes(newValue)) {
    let curValue = screen.value;
    if (
      curValue.includes("+") ||
      curValue.includes("-") ||
      curValue.includes("*") ||
      curValue.includes("/")
    ) {
      alert("Sign is already present");
      return;
    }
  }

  // 4.5 evaluate answer if clicked on =
  if (newValue === "=") {
    let ans = 0; //eval(screen.value);
    if (screen.value.includes("+")) {
      ans = calculateSum(screen.value, "+");
    } else if (screen.value.includes("-")) {
      ans = calculateSub(screen.value, "-");
    } else if (screen.value.includes("*")) {
      ans = calculateMul(screen.value, "*");
    } else if (screen.value.includes("/")) {
      ans = calculateDiv(screen.value, "/");
    }
    if (ans === undefined) {
      screen.value = "";
    } else {
      screen.value = ans;
    }
    return;
  }

  // screen.value = screen.value + newValue;
  screen.value += newValue;
}

// value = '1 0 0 + 2 0 0 0'
//          0 1 2 3 4 5 6 7
function calculateSum(value, sign) {
  let plusIndex = value.indexOf(sign);
  let num1 = value.slice(0, plusIndex);
  let num2 = value.slice(plusIndex + 1);
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 + num2;
}
function calculateSub(value, sign) {
  let plusIndex = value.indexOf(sign);
  let num1 = value.slice(0, plusIndex);
  let num2 = value.slice(plusIndex + 1);
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 - num2;
}
function calculateMul(value, sign) {
  let plusIndex = value.indexOf(sign);
  let num1 = value.slice(0, plusIndex);
  let num2 = value.slice(plusIndex + 1);
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 * num2;
}

function calculateDiv(value, sign) {
  let plusIndex = value.indexOf(sign);
  let num1 = value.slice(0, plusIndex);
  let num2 = value.slice(plusIndex + 1);
  num1 = Number(num1);
  num2 = Number(num2);
  if (num2 === 0) {
    alert("Can not divide by zero!");
    return;
  }
  return num1 / num2;
}

document.addEventListener("keyup", (e) => {
  console.log(e);
});
