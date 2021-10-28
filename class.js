class View {
  constructor() {
    this.circleArray = document.getElementsByClassName("circle");
  }
  render(circleArray) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }
  }
}


class Controller {
  #model;
  #view;
  constructor(model, view)) {
  this.#model = model;
  this.#view = view;

}

class Module {
  constructor() {

  }
  addCircle = (startNum) => {
    let notTaken = true;
    let i = startNum;
    try {
      while (notTaken) {
        if (!circles[i].classList.contains('red') && !circles[i].classList.contains('yellow')) {
          addColor(i);
          notTaken = false;
        } else {
          i = i - 7;
        }
      }
    } catch (error) {
      alert('pick other line');
    }
  }

  addColor = (i) => {
    if (turn === 0) {
      circles[i].classList.add("red");
      turn = 1;
      if (checkWin(i, 'red')) {
        alert('win');
      }
    }
    else {
      circles[i].classList.add("yellow")
      turn = 0;
      if (checkWin(i, 'yellow')) {
        alert('win');
      };
    }
  }

  checkWin = (i, color) => {

    const checkVertical = () => {
      let counter = 1;
      for (let j = 1; j < 4; j++) {
        try {
          if (circles[i + j].classList.contains(color)) {
            counter++;
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }
      for (let j = 1; j < 4; j++) {
        try {
          if (circles[i - j].classList.contains(color)) {
            counter++;
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }
      if (counter == 4) {
        return true;
      }
      return false;
    }

    const checkHorizontal = () => {
      let counter = 1;
      for (let j = 7; j < 22; j = j + 7) {
        try {
          if (circles[i + j].classList.contains(color)) {
            counter++;
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }
      for (let j = 7; j < 22; j = j + 7) {
        try {
          if (circles[i - j].classList.contains(color)) {
            counter++;
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }
      if (counter == 4) {
        return true;
      }
      return false;
    }
    const checkDiagnal = () => {
      let counter = 1;

      for (let j = 6; j < 19; j = j + 6) {
        try {
          if (circles[i + j].classList.contains(color)) {
            counter++;
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }

      for (let j = 6; j < 19; j = j + 6) {
        try {
          if (circles[i - j].classList.contains(color)) {
            counter++;
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }
      if (counter == 4) {
        return true;
      }
      counter = 1;
      for (let j = 8; j < 25; j = j + 8) {
        try {
          if (circles[i + j].classList.contains(color)) {
            counter++;
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }

      for (let j = 8; j < 25; j = j + 8) {
        try {
          if (circles[i - j].classList.contains(color)) {
            counter++;
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }

      if (counter == 4) {
        return true;
      }
      return false;
    }

    if (checkVertical() || checkHorizontal() || checkDiagnal()) {
      return true;
    }
    return false;
  }
}

const app = new Controller(new Model(), new View());