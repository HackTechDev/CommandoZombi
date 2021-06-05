import 'phaser';

import Config from './Config/Config';
import GameScene from './Scenes/GameScene';
import DungeonScene from './Scenes/DungeonScene';
import Level0AdosCityScene from './Scenes/Level0/Ados/City';
import InteriorsAdosHouse70Scene from './Scenes/Interiors/Ados/House70';
import InteriorsAdosHouse68Scene from './Scenes/Interiors/Ados/House68';

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
    this.scene.add('Level0AdosCity', Level0AdosCityScene);
    this.scene.add('InteriorsAdosHouse70', InteriorsAdosHouse70Scene);
    this.scene.add('InteriorsAdosHouse68', InteriorsAdosHouse68Scene);

    this.scene.start('Boot');
  }
}

window.game = new Game();
