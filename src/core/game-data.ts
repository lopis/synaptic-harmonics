import { twoGearsLevel } from "@/game-states/levels/gears";
import { helixLevel } from "@/game-states/levels/helix";
import { dockLevel } from "@/game-states/levels/dock";
import { metronomeLevel } from "@/game-states/levels/metronome";
import { cylinderLevel } from "@/game-states/levels/cylinder";
import { twoCubesLevel } from "@/game-states/levels/two-cubes";
import { color4, color5, color6 } from "./draw-engine";
import { flyLevel } from "@/game-states/levels/fly";
import { circleLevel } from "@/game-states/levels/circle";
import { switchLevel } from "@/game-states/levels/switch";
import { metronome2Level } from "@/game-states/levels/metronome2";

export const levels = [
  metronomeLevel,
  twoCubesLevel,
  dockLevel,
  twoGearsLevel,
  cylinderLevel,
  flyLevel,
  circleLevel,
  switchLevel,
  helixLevel,
  metronome2Level,
];

export const levelColors = [
  color6,
  color5,
  color4,
];

function getStorage(): number {
  const storage = localStorage.getItem('meat_brain_cell_optimizer__level') || "";
  const level = parseInt(storage);

  if (level <= levels.length) {
    return level;
  } else {
    return 0;
  }
}

class GameData {
  level = 0;
  maxLevel = 0;

  constructor() {
    this.maxLevel = getStorage();
  }

  getLevel() {
    return levels[this.level];
  }

  nextLevel() {
    return levels[this.level + 1];
  }

  prevLevel() {
    return levels[this.level - 1];
  }

  storeLevel() {
    const level = getStorage();
    if (!level || level < this.level) {
      localStorage.setItem('meat_brain_cell_optimizer__level', `${this.level}`);
    }
  }

  color() {
    return levelColors[this.level % levelColors.length];
  }
}

export const gameData = new GameData();