import { Observable } from 'rxjs/Rx';
import keyCodes from './utils/keyCodes';
import Point from './utils/Point';
import { toDirection, isLegalMove } from './utils/directionUtils';
import detectCollision from './utils/detectCollision';
import { candy$, players$, onSnakeEat, onSnakeMove, onSnakeDied } from './utils/firebaseUtils';

/**
 * the function that executes the game's logic
 * @param {Object} gameSize - the size of the game's board
 * @param {function} displaySnake - displays the snake on the board
 * @param {function} displayCandy - displays the candy on the board
 * @param {function} displayPlayers - displays the players on the board
 * @param {function} displayMessage - displays a message on the board
 * @param {function} clearMessage - clears the message from the board
 */
export default function (gameSize, displaySnake, displayCandy, displayPlayers, displayMessage, clearMessage) {
  candy$.subscribe(displayCandy);
  players$.subscribe(displayPlayers);

  const keyDown$ = Observable.fromEvent(document, 'keydown').share();

  function startGame() {
    const directions$ = keyDown$.map(toDirection)
      .filter(d => d !== null);

    const directionTicks$ = Observable.interval(80)
      .withLatestFrom(directions$, (_, direction) => direction)
      .scan((prev, next) => isLegalMove(prev, next) ? next : prev);

    const initialSnake = new Array(5).fill(Point.random(gameSize));

    const snake$ = directionTicks$
      .scan((point, direction) => point.move(direction).wrap(gameSize), initialSnake[0])
      .withLatestFrom(candy$, (nextPoint, candy) => nextPoint.tryEat(candy))
      .scan((snake, nextPoint) => {
        if (!nextPoint.hasEaten) snake = snake.slice(0, -1);
        return [nextPoint, ...snake];
      }, initialSnake)
      .do(snake => snake[0].hasEaten && onSnakeEat())
      .takeWhile(snake => !detectCollision(snake[0], snake.slice(1)))
      .withLatestFrom(players$)
      .takeWhile(([snake, players]) => players.every(player => !detectCollision(snake[0], player)))
      .map(([snake]) => snake)
      .do(onSnakeMove)
      .startWith(initialSnake)
      .do(displaySnake);

    return snake$
      .finally(onSnakeDied)
      .finally(() => displayMessage('GAME ENDED'));
  }

  const restart$ = keyDown$.filter(e => e.key === keyCodes.Enter)
    .first()
    .ignoreElements()
    .finally(clearMessage);

  Observable.concat(Observable.defer(startGame), restart$)
    .repeat()
    .subscribe();
}
