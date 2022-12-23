export const SNAKE_SPEED = 2;

//x,y are coordinates in the flex grid
//x 11 y 11 is the center/middle of the screen
const snakeBody = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 },
];

export function update() {
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    //body
    snakeBody[i + 1] = { ...snakeBody[i] };
    //head
    snakeBody[0].x += 0;
    snakeBody[0].y += 1;
  }
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
}
