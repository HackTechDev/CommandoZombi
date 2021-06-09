import Player from "../Player/Player";
import 'phaser';
import Dungeon from "@mikewesthad/dungeon";
import TILES from "../TileMapping/TileMapping.js";
import MouseTileMarker from "../MouseTileMarker/MouseTileMarker.js";

/**
 * Scene that generates a new dungeon
 */
export default class DungeonScene extends Phaser.Scene {

  constructor () {
    super('Dungeon');
  }


  preload() {
    this.load.image("tiles", "assets/tilesets/buch-tileset-48px-extruded.png");
    this.load.atlas("atlas", "assets/atlas/atlas.png", "assets/atlas/atlas.json");
  }

  create() {
    this.dungeon = new Dungeon({
      width: 50,
      height: 50,
      doorPadding: 2,
      rooms: {
        width: { min: 7, max: 15, onlyOdd: true },
        height: { min: 7, max: 15, onlyOdd: true }
      }
    });

    const map = this.make.tilemap({
      tileWidth: 48,
      tileHeight: 48,
      width: this.dungeon.width,
      height: this.dungeon.height
    });
    const tileset = map.addTilesetImage("tiles", null, 48, 48, 1, 2); // 1px margin, 2px spacing
    this.groundLayer = map.createBlankDynamicLayer("Ground", tileset);
    this.stuffLayer = map.createBlankDynamicLayer("Stuff", tileset);

    this.groundLayer.fill(TILES.BLANK);

    this.dungeon.rooms.forEach(room => {
      const { x, y, width, height, left, right, top, bottom } = room;

      this.groundLayer.fill(TILES.FLOOR, x + 1, y + 1, width - 2, height - 2);
    
      this.groundLayer.putTileAt(TILES.WALL.TOP_LEFT, left, top);
      this.groundLayer.putTileAt(TILES.WALL.TOP_RIGHT, right, top);
      this.groundLayer.putTileAt(TILES.WALL.BOTTOM_RIGHT, right, bottom);
      this.groundLayer.putTileAt(TILES.WALL.BOTTOM_LEFT, left, bottom);

      
      this.groundLayer.fill(TILES.WALL.TOP, left + 1, top, width - 2, 1);
      this.groundLayer.fill(TILES.WALL.BOTTOM, left + 1, bottom, width - 2, 1);
      this.groundLayer.fill(TILES.WALL.LEFT, left, top + 1, 1, height - 2);
      this.groundLayer.fill(TILES.WALL.RIGHT, right, top + 1, 1, height - 2);
    
      var doors = room.getDoorLocations(); // → Returns an array of {x, y} objects
      for (var i = 0; i < doors.length; i++) {
        if (doors[i].y === 0) {
          this.groundLayer.putTilesAt(TILES.DOOR.TOP, x + doors[i].x - 1, y + doors[i].y);
        } else if (doors[i].y === room.height - 1) {
          this.groundLayer.putTilesAt(TILES.DOOR.BOTTOM, x + doors[i].x - 1, y + doors[i].y);
        } else if (doors[i].x === 0) {
          this.groundLayer.putTilesAt(TILES.DOOR.LEFT, x + doors[i].x, y + doors[i].y - 1);
        } else if (doors[i].x === room.width - 1) {
          this.groundLayer.putTilesAt(TILES.DOOR.RIGHT, x + doors[i].x, y + doors[i].y - 1);
        }
      }
        

    });


    this.groundLayer.setCollisionByExclusion([-1, 6, 7, 8, 26]);

    this.player = new Player(this, map.widthInPixels / 2, map.heightInPixels / 2);

    this.physics.add.collider(this.player.sprite, this.groundLayer);

    const camera = this.cameras.main;

    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.startFollow(this.player.sprite);

    this.marker = new MouseTileMarker(this, map);

    this.add
      .text(16, 16, "Arrow keys to move", {
        font: "18px monospace",
        fill: "#000000",
        padding: { x: 20, y: 10 },
        backgroundColor: "#ffffff"
      })
      .setScrollFactor(0);
  }

  update(time, delta) {
    this.marker.update();
    this.player.update();

    // Add a colliding tile at the mouse position
    const pointer = this.input.activePointer;
    const worldPoint = pointer.positionToCamera(this.cameras.main);
    if (pointer.isDown) {
      const tile = this.groundLayer.putTileAtWorldXY(20, worldPoint.x, worldPoint.y);
      tile.setCollision(true);
    }


  }
}
