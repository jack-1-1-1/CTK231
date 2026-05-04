
function playMusic(){
  var music = new Audio('vmAmbience_ES.mp3');
  music.play();
  }



const keypad = document.querySelector('.keypad');
const keys = document.querySelectorAll('.key');
const door = document.getElementById('door');
const errorMessage = document.getElementById('errorMessage');
const hint = document.getElementById('hint');
const codeDisplayContainer = document.querySelector('.code-display-container');


let A1Code = 'A1';
let A2Code = 'A2';
let A3Code = 'A3';
let A4Code = 'A4';
let B1Code = 'B1';
let B2Code = 'B2';
let B3Code = 'B3';
let B4Code = 'B4';
let C1Code = 'C1';
let C2Code = 'C2';
let C3Code = 'C3';
let C4Code = 'C4';
let D1Code = 'D1';
let D2Code = 'D2';
let D3Code = 'D3';
let D4Code = 'D4';
let currentCode = '';
let doorOpen = false; // Door status flag


/*
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.getAttribute('data-key');
    if (keyValue === '*') {
      // Reset
      currentCode = '';
      updateCodeDisplay();
      errorMessage.textContent = '';
    } else if (keyValue === '#') {
      // Code review
      if (currentCode === secretCode) {
          goFish();
      } else {
          errorMessage.textContent = "ERROR";
            if(doorOpen){
                closeDoor();
            }
      }
      currentCode = '';
      updateCodeDisplay();
    } else {
      currentCode += keyValue;
      updateCodeDisplay();
    }
  });
});
*/



/*
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.getAttribute('data-key');
    if (keyValue === '*') {
      // Reset
      currentCode = '';
      updateCodeDisplay();
      errorMessage.textContent = '';
    } else if (keyValue === '#') {
      // Code review
      if (currentCode === A1Code) {
          goFish();
      } else {
          errorMessage.textContent = "ERROR";
            if(doorOpen){
                closeDoor();
            }
      }
      currentCode = '';
      updateCodeDisplay();
    } else {
      currentCode += keyValue;
      updateCodeDisplay();
    }
  });
});
*/

/*
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.getAttribute('data-key');
    if (currentCode === A1Code) {
        goFish();
        }
        else if
        (currentCode === C4Code) {
        goContact();
        } else {
      currentCode += keyValue;
      updateCodeDisplay();
    }
})
}
);
*/

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.getAttribute('data-key');
    if (currentCode === A1Code) {
        goFish();
        }
        else if
        (currentCode === A2Code) {
        goShowTN();
        }
        else if
        (currentCode === A3Code) {
        goLOP();
        }
        else if
        (currentCode === A4Code) {
        goOOO();
        }
        else if
        (currentCode === B1Code) {
        goSFX();
        }
        else if
        (currentCode === B2Code) {
        goFMV();
        }
        else if
        (currentCode === B3Code) {
        goBassAmp();
        }
        else if
        (currentCode === B4Code) {
        goBH();
        }
        else if
        (currentCode === C1Code) {
        goRand();
        }
        else if
        (currentCode === C2Code) {
        goTP();
        }
        else if
        (currentCode === C3Code) {
        goIKTE();
        }
        else if
        (currentCode === C4Code) {
        goContact();
        } else {
      currentCode += keyValue;
      updateCodeDisplay();
    }
    if (currentCode.length === 3) {
      currentCode = '';
      updateCodeDisplay();
    }
})
}
);





function updateCodeDisplay() {
  codeDisplay.textContent = currentCode;
}



// Field for displaying the entered code
const codeDisplay = document.createElement('div');
codeDisplay.id = 'code-display';
codeDisplay.textContent = currentCode;
codeDisplay.style.fontSize = '1.5em';
codeDisplay.style.fontWeight = 'bold';

codeDisplay.style.color = "rgb(24, 233, 66)";
codeDisplay.style.filter = "drop-shadow(0px 0px 5px rgb(29, 235, 81))";

// Add an element to the DOM to display the code.
codeDisplayContainer.appendChild(codeDisplay);


function openDoor() {
  door.textContent = "Дверь открыта!";
  door.style.backgroundColor = 'green';
  hint.textContent = '';
  doorOpen = true;
}

function closeDoor() {
  door.textContent = "Дверь заблокирована";
  door.style.backgroundColor = '#ccc';
  doorOpen = false;
}




//Functions to go to pages

function goFish () {
    window.location.assign("GoFish.html")
}

function goShowTN () {
    window.location.assign("sickshowtn.html")
}

function goLOP () {
    window.location.assign("LeftofPassage.html")
}

function goOOO () {
    window.location.assign("ooo.html")
}

function goSFX () {
    window.location.assign("SFXP.html")
}

function goFMV () {
    window.location.assign("FMV.html")
}

function goBassAmp () {
    window.location.assign("bassAmpMG.html")
}

function goBH () {
    window.location.assign("Bellhoppers.html")
}

function goRand () {
    window.location.assign("random.html")
}

function goTP () {
    window.location.assign("TargetPractice.html")
}

function goIKTE () {
    window.location.assign("IKTE.html")
}

function goContact () {
    window.location.assign("Contact.html")
}