import { Observable } from 'rxjs';
import keyCodes from './utils/keyCodes';
import Point from './utils/Point';
import { toDirection, isLegalMove } from './utils/directionUtils';
import detectCollision from './utils/detectCollision';
import { candy$, players$, onSnakeEat, onSnakeMove, onSnakeDied } from './utils/firebaseUtils';

export default function (gameSize, displaySnake, displayCandy, displayPlayers, displayMessage, clearMessage) {
}
