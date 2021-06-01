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


        this.belowLayer = map.createLayer("Below Player", tileset, 0, 0);
        this.worldLayer = map.createLayer("World", tileset, 0, 0);
        const aboveLayer = map.createLayer("Above Player", tileset, 0, 0);


        this.worldLayer.setCollisionByProperty({ collides: true });

        aboveLayer.setDepth(10);

        const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

        console.log(spawnPoint.x + " " + spawnPoint.y);

        this.player = new Player(this, spawnPoint.x, spawnPoint.y);

        this.physics.add.collider(this.player.sprite, this.worldLayer);

        const camera = this.cameras.main;
        camera.startFollow(this.player.sprite);
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        this.marker = new MouseTileMarker(this, map);

        
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        this.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);

        this.testKeyP = false;
        this.testKeyG = false;

        this.testKeyPOnce = true;
        this.testKeyGOnce = true;


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
            if (this.testKeyP) {
              const worldTile = this.worldLayer.putTileAtWorldXY(128, worldPoint.x, worldPoint.y);
              worldTile.setCollision(true);
            } else {
              const worldTile = this.worldLayer.putTileAtWorldXY(125, worldPoint.x, worldPoint.y);
              worldTile.setCollision(false);
            }
        }
       


        if(this.keyG.isDown) {

            if (!this.keyGOnce) {
                const worldTile = this.worldLayer.getTileAtWorldXY(worldPoint.x, worldPoint.y);
                const belowTile = this.belowLayer.getTileAtWorldXY(worldPoint.x, worldPoint.y);
                console.log('G key pressed')
                this.keyGOnce = true;
                if (worldTile != null) {
                    console.log("Get worldTile: ", worldTile);
                    console.log("Get worldTile: ", worldTile.index);
                }
                
                if (belowTile != null) {
                    console.log("Get belowTile: ", belowTile);
                    console.log("Get belowTile: ", belowTile.index);
                }
                

            }
        }

        if(this.keyG.isUp) {
          this.keyGOnce = false;
        }


        if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
            console.log("Fire!");
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyP)){
            this.testKeyP = !this.testKeyP;
            console.log("Put: " + this.testKeyP);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyG)){
            this.testKeyG = !this.testKeyG;
            console.log("Get:"  + this.testKeyG);
        }


        if (Phaser.Input.Keyboard.JustDown(this.keyC)){
            this.physics.world.createDebugGraphic();
            const graphics = this.add
              .graphics()
              .setAlpha(0.75)
              .setDepth(20);
            this.worldLayer.renderDebug(graphics, {
              tileColor: null,
              collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
              faceColor: new Phaser.Display.Color(40, 39, 37, 255)
            });

        }


    }
}
