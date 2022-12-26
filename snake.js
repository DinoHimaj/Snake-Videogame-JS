import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 4;

//x,y are coordinates in the flex grid
//x 11 y 11 is the center/middle of the screen
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    //body
    // snakeBody.length - 2 is a second to the last element
    //In first iteration [i + 1] is a last element
    //we are not interested in the last one because it disappears
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  //head
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
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
