import Player from "../Player/Player";
import MouseTileMarker from "../MouseTileMarker/MouseTileMarker"

import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

    preload() {
        this.load.image("tiles", "assets/tilesets/tuxmon-sample-32px-extruded.png");
        this.load.tilemapTiledJSON("map", "assets/tilemaps/tuxemon-town.json");

         this.load.atlas("atlas", "assets/atlas/atlas.png", "assets/atlas/atlas.json");

    }

    create() {
        const map = this.make.tilemap({ key: "map" });

        const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");

        this.belowLayer = map.createDynamicLayer("Below Player", tileset, 0, 0);

        const worldLayer = map.createDynamicLayer("World", tileset, 0, 0);
        const aboveLayer = map.createStaticLayer("Above Player", tileset, 0, 0);

        worldLayer.setCollisionByProperty({ collides: true });

        aboveLayer.setDepth(10);

        const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

        console.log(spawnPoint.x + " " + spawnPoint.y);

        this.player = new Player(this, spawnPoint.x, spawnPoint.y);

        this.physics.add.collider(this.player.sprite, worldLayer);

        const camera = this.cameras.main;
        camera.startFollow(this.player.sprite);
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        this.marker = new MouseTileMarker(this, map);

        this.add
            .text(16, 16, 'Move: Arrow keys', {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: "#ffffff"
            })
        .setScrollFactor(0)
        .setDepth(30);


    }


    update(time, delta) {
        this.player.update();
        this.marker.update();

        // Add a colliding tile at the mouse position
        const pointer = this.input.activePointer;
        const worldPoint = pointer.positionToCamera(this.cameras.main);
        if (pointer.isDown) {
          const tile = this.belowLayer.putTileAtWorldXY(20, worldPoint.x, worldPoint.y);
          tile.setCollision(true);
        }



    }
}
