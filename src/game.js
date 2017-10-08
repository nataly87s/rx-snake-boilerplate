import { Observable } from 'rxjs';
import keyCodes from './utils/keyCodes';
import Point from './utils/Point';
import repeat from './utils/repeat';
import toDirection from './utils/toDirection';
import detectCollision from './utils/detectCollision';
import { candy$, players$, onCandyChanged, onSnakeChanged, onSnakeDied } from './utils/firebaseUtils';

export default function (gameSize, displaySnake, displayCandy, displayPlayers, displayMessage, clearMessage) {
}
