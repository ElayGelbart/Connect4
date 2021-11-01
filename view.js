import Event from './event.js';

class View {
  constructor() {
    this.playEvent = new Event();
  }

  render() {
    console.log("iamhere");
    const board = document.getElementById('theGame');
    board.className = 'board';

    this.cells = Array(49).fill().map((_, i) => {
      const cell = document.createElement('span');
      cell.className = 'cell';

      cell.addEventListener('click', () => {
        this.playEvent.trigger(i);
      });

      board.appendChild(cell);

      return cell;
    });

    this.message = document.createElement('div');
    this.message.className = 'message';

    document.body.appendChild(board);
    document.body.appendChild(this.message);
  }

  updateCell(data) {
    this.cells[data.move].classList.add(data.player);
  }

  victory(winner) {
    this.message.innerHTML = `${winner} wins!`;
  }

  draw() {
    this.message.innerHTML = "It's a draw!";
  }
}

export default View;