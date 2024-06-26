import { State } from '@/core/state';
import { controls } from '@/core/controls';
import { gameStateMachine } from '@/game-state-machine';
import { gameState } from './game.state';
import { background, colorDark } from '@/core/draw-engine';

class IntroState implements State {
  onEnter() {
    background(colorDark);
    intro.classList.remove('hide');
    play.addEventListener('click', this.startGame);
  }

  onLeave() {
    intro.classList.add('hide');
    play.removeEventListener('click', this.startGame);
  }

  onUpdate() {
    this.updateControls();
  }

  updateControls() {
    if (controls.isConfirm && !controls.previousState.isConfirm) {
      this.startGame();
    }
  }

  startGame() {
    gameStateMachine.setState(gameState);
  }
}

export const introState = new IntroState();
