import React from 'react';
import { snake$, withPropFromStream } from '../context';
import Point from '../utils/Point';
import gameSize from '../utils/gameSize';
import { isLegalMove } from '../utils/directionUtils';
import { onSnakeEat, createSnakeRef } from '../utils/firebaseUtils';

const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

class Example extends React.Component {
  componentWillMount() {
    this.snakeRef = createSnakeRef();
  }

  componentWillUnmount() {
    this.snakeRef.onSnakeDied();
  }

  generateSnake = () => {
    const count = 7 + Math.random() * 5;
    const snake = [Point.random(gameSize)];
    let prevDirection = [];
    for (let i = 0; i < count; i++) {
      let direction;
      do {
        direction = directions[~~(Math.random() * directions.length)];
      } while (!isLegalMove(prevDirection, direction));
      prevDirection = direction;
      snake.push(snake[i].move(direction).wrap(gameSize));
    }

    snake$.next(snake);
  };

  render() {
    const { snake } = this.props;
    return (
      <div className="example">
        <button onClick={this.generateSnake}>generate snake</button>
        <button onClick={() => this.snakeRef.onSnakeMove(snake)}>onSnakeMove</button>
        <button onClick={onSnakeEat}>onSnakeEat</button>
        <button onClick={this.snakeRef.onSnakeDied}>onSnakeDied</button>
      </div>
    );
  }
}

const enhance = withPropFromStream('snake', snake$);

export default enhance(Example);
