import 'phaser';

import Config from './Config/Config';
import GameScene from './Scenes/GameScene';
import DungeonScene from './Scenes/DungeonScene';
import Level0AdosCityScene from './Scenes/Level0/Ados/City';
import InteriorsAdosHouse70Scene from './Scenes/Interiors/Ados/House70';
import InteriorsAdosHouse68Scene from './Scenes/Interiors/Ados/House68';

import Mission1Scene from './Scenes/Missions/Mission1Scene';

import TileMapping from './TileMapping/TileMapping';

import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import MenuScene from './Scenes/MenuScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import HelpScene from './Scenes/HelpScene';
import CombatScene from './Scenes/CombatScene';
import CharacterScene from './Scenes/CharacterScene';


import Music from './Music/Music';

import MouseTileMarker from './MouseTileMarker/MouseTileMarker'

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    const music = new Music();
    this.globals = { music, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Menu', MenuScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Help', HelpScene);
    this.scene.add('Combat', CombatScene);
    this.scene.add('Character', CharacterScene);


    this.scene.add('Game', GameScene);
    this.scene.add('Dungeon', DungeonScene);
    this.scene.add('Level0AdosCity', Level0AdosCityScene);
    this.scene.add('InteriorsAdosHouse70', InteriorsAdosHouse70Scene);
    this.scene.add('InteriorsAdosHouse68', InteriorsAdosHouse68Scene);
    this.scene.add('Mission1', Mission1Scene);
        this.scene.start('Boot');
  }
}

window.game = new Game();
