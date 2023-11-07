/*
// {} - scope
function fce(){


}

// () => - arrow funkce
const fce2 = () => {
  console.log("Ahoj světe");
}


fce()
fce2()
/*



/*
//             item - parametr
function konsel(item) {
console.log(`Prinesl jsem ${item}`);
}

//              item - parametr
const konsel2 = (item, item2) => {
console.log(`Prinesl jsem ${item} a ${item2}`);
}


//     argument
konsel("piti");
//     argument
konsel("urban");
//     argument
konsel2("zidle", "bobika");
//     argument 
konsel2("jidlo", "piti"); */

/*

function sum(a, b) {
   return a + b;
}

let resultOne = sum(6,4);
let resultTwo = sum(10,4);

console.log(resultOne + resultTwo);


sum(6, 4);
sum(1, 4);
sum(3, 4);
sum(7, 4);
sum(9, 4);
sum(8, 4);

*/

/*
let numberOne = 5;
let numberTwo = 8;

let numberThree = 6;
let numberFour = 7;

function sumF(a, b) {
  return a + b;
}



const sum = (a, b) => a + b;
  let resultOne = sum(numberOne, numberTwo);
let resultTwo = sum(numberThree, numberFour);
console.log (sum(resultOne, resultTwo));
*/

/*

let name = "ja";
let age = 17;

const getSentence = (person, age) => `Tvoje jméno je ${person} a je ti ${age} let`;
  


let sentence = getSentence(name, age);
console.log(sentence);
*/

const cube = document.getElementById("cube");
const cube2 = document.getElementById("cube2");
let gameInterval;

cube.onclick = () => {
//changeColor(cube, 255, 255, 255, 0.393);
//changeColor(cube2, 32, 154, 255, 0.393);
  const audio = new Audio("./res/music/netusim.mp3");
  audio.play();
  setNumber(cube2, 1);
  setNumber(cube3, 1);
  setCookieClicker(cube2);
  setCookieClicker2(cube3);
  moveElement(cube2, 300, 400);
  startGameInterval();
  startGameInterval2();
};

const changeColor = (element, red, green, blue) => {
  element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

const setNumber = (element, number) => {
  element.innerHTML = number;
};
let timeStart = 0;


const setCookieClicker = (element) => {
  element.onclick = () => {
    element.innerText++;
    moveElement(cube2, getRandomNumber(0,window.innerwidth), getRandomNumber(0, window.innerHeight));

    let customSize = getRandomNumber(20, 100);
    setSize(element, customSize, customSize);

    if (timeStart == 1) {
      timeStart == performance.now();
    } else {
      let timeEnd = performance.now();
      let result = timeEnd - timeStart;
      cube.innerHTML = `${result}ms`;
      timeStart = performance.now();
    }
  };
};

const setCookieClicker2 = (element) => {
  element.onclick = () => {
    element.innerText++;
    moveElement(cube3, getRandomNumber(0, window.innerWidth), getRandomNumber(0, window.innerHeight));

    let customSize = getRandomNumber(100, 100);
    setSize(element, customSize, customSize);

    if (timeStart == 1) {
      timeStart == performance.now();
    } else {
      let timeEnd = performance.now();
      let result = timeEnd - timeStart;
      cube.innerHTML = `${result}ms`;
      timeStart = performance.now();
    }
  };
};



const moveElement = (element, x, y) => {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
};
const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const setSize = (element, width, height) => {
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
};

const startGameInterval = () => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(cube2, getRandomNumber(200, 600), getRandomNumber(200, 600));
    let customSize = getRandomNumber(20, 100);
    setSize(cube2, customSize, customSize);
  }, 1000);
};

const startGameInterval2 = () => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(cube3, getRandomNumber(200, 600), getRandomNumber(200, 600));
    let customSize = getRandomNumber(20, 100);
    setSize(cube2, customSize, customSize);
  }, 800);
};
