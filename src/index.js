import 'phaser';

import Config from './Config/Config';
import GameScene from './Scenes/GameScene';
import DungeonScene from './Scenes/DungeonScene';
import StendhalScene from './Scenes/StendhalScene';
import HouseScene from './Scenes/HouseScene';

import TileMapping from './TileMapping/TileMapping';

import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import Music from './Music/Music';

import MouseTileMarker from './MouseTileMarker/MouseTileMarker'

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    const music = new Music();
    this.globals = { music, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Dungeon', DungeonScene);
    this.scene.add('Stendhal', StendhalScene);
    this.scene.add('House', HouseScene);

    this.scene.start('Boot');
  }
}

window.game = new Game();
