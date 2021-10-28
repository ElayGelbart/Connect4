'use strict'
let turn = 0;
let circles = document.getElementsByClassName("circle");
for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", () => {
    if (!circles[i].classList.contains('red') && !circles[i].classList.contains('yellow')) {
      if (turn === 0) {
        circles[i].classList.add("red");
        turn = 1;
        if (checkWin(i, 'red')) {
          console.log('win');
        }
      }
      else {
        circles[i].classList.add("yellow")
        turn = 0;
        if (checkWin(i, 'yellow')) {
          console.log('win');
        };
      }
    } else {
      alert('Pick Another Sqare')
    }
  });
}

const checkWin = (i, color) => {
  function checkLeft() {
    try {
      if (circles[i - 1].classList.contains(color) && (i - 1) % 7 != 0 && (i - 1) % 6 != 0) {
        if (circles[i - 2].classList.contains(color) && (i - 2) % 7 != 0 && (i - 2) % 6 != 0) {
          if (circles[i - 3].classList.contains(color)) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      return false;
    }

  }
  function checkRight() {
    try {
      if (circles[i + 1].classList.contains(color) && (i + 1) % 7 != 0 && (i + 1) % 6 != 0) {
        if (circles[i + 2].classList.contains(color) && (i + 2) % 7 != 0 && (i + 2) % 6 != 0) {
          if (circles[i + 3].classList.contains(color)) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  function checkUp() {
    try {
      if (circles[i - 7].classList.contains(color)) {
        if (circles[i - 14].classList.contains(color)) {
          if (circles[i - 21].classList.contains(color)) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  function checkDown() {
    try {
      if (circles[i + 7].classList.contains(color)) {
        if (circles[i + 14].classList.contains(color)) {
          if (circles[i + 21].classList.contains(color)) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  function checkDiagdownleft() {
    try {
      if (circles[i - 6].classList.contains(color) && (i - 6) % 7 != 0 && (i - 6) % 6 != 0) {
        if (circles[i - 12].classList.contains(color) && (i - 12) % 7 != 0 && (i - 12) % 6 != 0) {
          if (circles[i - 18].classList.contains(color)) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  function checkDiagupright() {
    try {
      if (circles[i + 6].classList.contains(color) && (i + 6) % 7 != 0 && (i + 6) % 6 != 0) {
        if (circles[i + 12].classList.contains(color) && (i + 12) % 7 != 0 && (i + 12) % 6 != 0) {
          if (circles[i + 18].classList.contains(color)) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  function checkDiagdownright() {
    try {
      if (circles[i - 8].classList.contains(color) && (i - 8) % 7 != 0 && (i - 8) % 6 != 0) {
        if (circles[i - 16].classList.contains(color) && (i - 16) % 7 != 0 && (i - 16) % 6 != 0) {
          if (circles[i - 24].classList.contains(color)) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  function checkDiagupleft() {
    try {
      if (circles[i + 8].classList.contains(color) && (i + 8) % 7 != 0 && (i + 8) % 6 != 0) {
        if (circles[i + 16].classList.contains(color) && (i + 16) % 7 != 0 && (i + 16) % 6 != 0) {
          if (circles[i + 24].classList.contains(color)) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  if (checkUp() || checkDown() || checkLeft() || checkRight() || checkDiagdownleft() || checkDiagupright() || checkDiagupleft() || checkDiagdownright()) {
    return true
  }
  return false;
}