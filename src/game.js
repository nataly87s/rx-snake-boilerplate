import { Observable } from 'rxjs';
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

}
