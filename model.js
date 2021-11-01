import Event from './event.js';

class Connect4 {
  constructor() {
    this.board = Array(49).fill();
    this.currentPlayer = 'red';
    this.finished = false;

    this.updateCellEvent = new Event();
    this.victoryEvent = new Event();
    this.drawEvent = new Event();
    this.circles = document.getElementsByClassName("cell");
  }

  play(move) {
    if (this.finished || move < 0 || move > 49 || this.board[move]) { return false; }
    this.board[move] = this.currentPlayer;
    this.updateCellEvent.trigger({ move, player: this.currentPlayer });

    this.finished = this.checkWin(move, this.currentPlayer) || this.draw();

    if (!this.finished) { this.switchPlayer(); }

    return true;
  }

  checkWin(i, color) {
    const checkVertical = () => {
      let counter = 1;
      for (let j = 1; j < 4; j++) {
        try {
          if (this.circles[i + j].classList.contains(color)) {
            counter++;
            if (j == 1 || j == 2) {
              if ((i + j) % 7 == 0 || (i + j) % 6 == 0) {
                break;
              }
            }
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }
      for (let j = 1; j < 4; j++) {
        try {
          if (this.circles[i - j].classList.contains(color)) {
            counter++;
            if (j == 1 || j == 2) {
              if ((i - j) % 7 == 0 || (i - j) % 6 == 0) {
                break;
              }
            }
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
          if (this.circles[i + j].classList.contains(color)) {
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
          if (this.circles[i - j].classList.contains(color)) {
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
          if (this.circles[i + j].classList.contains(color)) {
            counter++;
            if (j != 18) {
              if ((i + j) % 7 == 0 || (i + j) % 6 == 0) {
                break;
              }
            }
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }

      for (let j = 6; j < 19; j = j + 6) {
        try {
          if (this.circles[i - j].classList.contains(color)) {
            counter++;
            if (j != 18) {
              if ((i - j) % 7 == 0 || (i - j) % 6 == 0) {
                break;
              }
            }
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
          if (this.circles[i + j].classList.contains(color)) {
            counter++;
            if (j != 24) {
              if ((i + j) % 7 == 0 || (i + j) % 6 == 0) {
                break;
              }
            }
            continue;
          }
        } catch (error) {
          break;
        }
        break;
      }

      for (let j = 8; j < 25; j = j + 8) {
        try {
          if (this.circles[i - j].classList.contains(color)) {
            counter++;
            if (j != 24) {
              if ((i - j) % 7 == 0 || (i - j) % 6 == 0) {
                break;
              }
            }
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

  draw() {
    const draw = this.board.every(i => i);

    if (draw) {
      this.drawEvent.trigger();
    }

    return draw;
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'red' ? 'yellow' : 'red';
  }
}

export default Connect4;