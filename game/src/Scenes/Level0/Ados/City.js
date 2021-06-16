import Soldier from "../../../Player/Soldier";
import Knight from "../../../Player/Knight";
import Zombi from "../../../Enemy/Zombi";

import MouseTileMarker from "../../../MouseTileMarker/MouseTileMarker"


import 'phaser';

var keyO, keyM, keyJ, keyE;
var keyC, keyP;
var keyP, keyT;
var keyG, keyK;

var keyB, keyN;

var dialogueBackground;

var npcBlacklord;
var talkToBlacklord = false, canTalkToBlacklord = false;
var blacklordIsColliding, blacklordWasColliding;
var blacklordDialogueDisplay = false;
var dialogueTextBlacklord = false;
var once = false;

var npcZombi;

var soldierStat;

var weaponName1s;

var hud;
var weaponName1Text;
var healthText;

var weaponName1;
var weaponQuantity1;
var health;


var p, n, distanceBetween2PC;

var camera;

var mapWidth, mapHeight;

/* Path following */
var path;
var graphics1;
var graphics2;
var follower;
var zombia;

export default class Level0AdosCityScene extends Phaser.Scene {
  constructor () {
    super('Level0AdosCity');
  }

    init(data){
          this.px = data.px;
          this.py = data.py;
    }


    preload() {

       this.load.image("ground_indoor_tiles", "assets/stendhal/tiled/tileset/ground/indoor/tiles.png");
       this.load.image("building_castle", "assets/stendhal/tiled/tileset/building/castle.png");
       this.load.image("ground_ground", "assets/stendhal/tiled/tileset/ground/ground.png");
       this.load.image("ground_ground_2", "assets/stendhal/tiled/tileset/ground/ground_2.png");
       this.load.image("building_wall_wall_brown", "assets/stendhal/tiled/tileset/building/wall/wall_brown.png");
       this.load.image("building_decoration_banner", "assets/stendhal/tiled/tileset/building/decoration/banner.png");
       this.load.image("ground_brown_paving", "assets/stendhal/tiled/tileset/ground/brown_paving.png");
       this.load.image("ground_water_dungeon_water", "assets/stendhal/tiled/tileset/ground/water/dungeon_water.png");
       this.load.image("ground_water_pool", "assets/stendhal/tiled/tileset/ground/water/pool.png");
       this.load.image("building_roof_blue", "assets/stendhal/tiled/tileset/building/roof/blue.png");
       this.load.image("building_roof_yellow", "assets/stendhal/tiled/tileset/building/roof/yellow.png");
       this.load.image("building_wall_stone", "assets/stendhal/tiled/tileset/building/wall/stone.png");
       this.load.image("building_roof_green", "assets/stendhal/tiled/tileset/building/roof/green.png");
       this.load.image("building_wall_wood", "assets/stendhal/tiled/tileset/building/wall/wood.png");
       this.load.image("building_roof_red", "assets/stendhal/tiled/tileset/building/roof/red.png");
       this.load.image("plant_flower_daisy_white", "assets/stendhal/tiled/tileset/plant/flower/daisy_white.png");
       this.load.image("item_statue_green_stone", "assets/stendhal/tiled/tileset/item/statue/green_stone.png");
       this.load.image("ground_cobbled_paving", "assets/stendhal/tiled/tileset/ground/cobbled_paving.png");
       this.load.image("item_statue_bird", "assets/stendhal/tiled/tileset/item/statue/bird.png");
       this.load.image("building_fence_fence_chunky", "assets/stendhal/tiled/tileset/building/fence/fence_chunky.png");
       this.load.image("plant_grasses", "assets/stendhal/tiled/tileset/plant/grasses.png");
       this.load.image("plant_bush_hedge", "assets/stendhal/tiled/tileset/plant/bush/hedge.png");
       this.load.image("plant_flower_daisy_blue", "assets/stendhal/tiled/tileset/plant/flower/daisy_blue.png");
       this.load.image("plant_flower_daisy_red", "assets/stendhal/tiled/tileset/plant/flower/daisy_red.png");
       this.load.image("plant_flower_daisy_yellow", "assets/stendhal/tiled/tileset/plant/flower/daisy_yellow.png");
       this.load.image("plant_bush_bushes", "assets/stendhal/tiled/tileset/plant/bush/bushes.png");
       this.load.image("plant_tree_tree_green", "assets/stendhal/tiled/tileset/plant/tree/tree_green.png");
       this.load.image("building_window_window_long", "assets/stendhal/tiled/tileset/building/window/window_long.png");
       this.load.image("building_window_window_left", "assets/stendhal/tiled/tileset/building/window/window_left.png");
       this.load.image("building_door_closed_with_key", "assets/stendhal/tiled/tileset/building/door/closed_with_key.png");
       this.load.image("building_window_window_right", "assets/stendhal/tiled/tileset/building/window/window_right.png");
       this.load.image("furniture_chair_wooden_pale", "assets/stendhal/tiled/tileset/furniture/chair/wooden_pale.png");
       this.load.image("furniture_table_wooden_pale", "assets/stendhal/tiled/tileset/furniture/table/wooden_pale.png");
       this.load.image("item_statue_grey_stone", "assets/stendhal/tiled/tileset/item/statue/grey_stone.png");
       this.load.image("item_statue_fairypool", "assets/stendhal/tiled/tileset/item/statue/fairypool.png");
       this.load.image("ground_eye", "assets/stendhal/tiled/tileset/ground/eye.png");
       this.load.image("item_sign_large", "assets/stendhal/tiled/tileset/item/sign_large.png");
       this.load.image("plant_stump_small_stump", "assets/stendhal/tiled/tileset/plant/stump/small_stump.png");
       this.load.image("building_door_door_n", "assets/stendhal/tiled/tileset/building/door/door_n.png");
       this.load.image("building_decoration_chimney", "assets/stendhal/tiled/tileset/building/decoration/chimney.png");
       this.load.image("building_door_closed", "assets/stendhal/tiled/tileset/building/door/closed.png");
       this.load.image("building_decoration_orbpedestal", "assets/stendhal/tiled/tileset/building/decoration/orbpedestal.png");
       this.load.image("building_decoration_longhorn_skull", "assets/stendhal/tiled/tileset/building/decoration/longhorn_skull.png");
       this.load.image("building_church", "assets/stendhal/tiled/tileset/building/church.png");
       this.load.image("building_entrance_int_iron_bars", "assets/stendhal/tiled/tileset/building/entrance/int_iron_bars.png");
       this.load.image("building_decoration_chimney_big", "assets/stendhal/tiled/tileset/building/decoration/chimney_big.png");
       this.load.image("item_statue_green_stone_2", "assets/stendhal/tiled/tileset/item/statue/green_stone_2.png");
       this.load.image("building_decoration_library_banner", "assets/stendhal/tiled/tileset/building/decoration/library_banner.png");
       this.load.image("building_door_door_e", "assets/stendhal/tiled/tileset/building/door/door_e.png");
       this.load.image("building_door_door_w", "assets/stendhal/tiled/tileset/building/door/door_w.png");
       this.load.image("logic_collision", "assets/stendhal/tiled/tileset/logic/collision.png");
       this.load.image("furniture_other_stick", "assets/stendhal/tiled/tileset/furniture/other/stick.png");
       this.load.image("building_decoration_numbers", "assets/stendhal/tiled/tileset/building/decoration/numbers.png");
       this.load.image("ground_water_pool_deep", "assets/stendhal/tiled/tileset/ground/water/pool_deep.png");
       this.load.image("object_suspension_bridge", "assets/stendhal/tiled/tileset/object/suspension_bridge.png");
       this.load.image("logic_creature_animal", "assets/stendhal/tiled/tileset/logic/creature/animal.png");
       this.load.image("logic_creature_mutant", "assets/stendhal/tiled/tileset/logic/creature/mutant.png");
       this.load.image("building_stairs_stairs", "assets/stendhal/tiled/tileset/building/stairs/stairs.png");
       this.load.image("object_boardwalk", "assets/stendhal/tiled/tileset/object/boardwalk.png");
       this.load.image("plant_stump_log_vertical", "assets/stendhal/tiled/tileset/plant/stump/log_vertical.png");
       this.load.image("plant_stump_stump_vertical", "assets/stendhal/tiled/tileset/plant/stump/stump_vertical.png");
       this.load.image("ground_green_paving", "assets/stendhal/tiled/tileset/ground/green_paving.png");
       this.load.image("light_light_5x5", "assets/stendhal/tiled/tileset/light/light_5x5.png");
       this.load.image("light_door_light", "assets/stendhal/tiled/tileset/light/door_light.png");
       this.load.image("furniture_light_lamp_bronze", "assets/stendhal/tiled/tileset/furniture/light/lamp_bronze.png");
       this.load.image("light_dim_light_7x5", "assets/stendhal/tiled/tileset/light/dim_light_7x5.png");
       this.load.image("building_huts", "assets/stendhal/tiled/tileset/building/huts.png");
       this.load.image("logic_creature_fowl", "assets/stendhal/tiled/tileset/logic/creature/fowl.png");

       this.load.tilemapTiledJSON("level0AdosCity", "assets/stendhal/tiled/Level 0/ados/city.json");

       this.load.atlas("atlas-soldier", "assets/atlas/soldier/atlas-soldier.png", "assets/atlas/soldier/atlas-soldier.json");
       this.load.atlas("atlas-knight", "assets/atlas/knight/atlas-knight.png", "assets/atlas/knight/atlas-knight.json");
       this.load.atlas("atlas-zombi", "assets/atlas/zombi/atlas-zombi.png", "assets/atlas/zombi/atlas-zombi.json");

       this.load.image('weaponName1', 'assets/images/knife.png');

       this.load.image('blacklord', 'assets/stendhal/data/sprites/npc/blacklord.png');

       this.load.image('zombi', 'assets/atlas/zombi/zombi-front.png');
        
        this.load.spritesheet('zombia', 'assets/atlas/zombi/zombi-front.png', {
                frameWidth: 48,
                frameHeight: 64,
            });
    }

    create() {
        const level0AdosCity = this.make.tilemap({ key: "level0AdosCity" });


        const ground_indoor_tiles = level0AdosCity.addTilesetImage("ground_indoor_tiles", "ground_indoor_tiles");
        const building_castle = level0AdosCity.addTilesetImage("building_castle", "building_castle");
        const ground_ground = level0AdosCity.addTilesetImage("ground_ground", "ground_ground");
        const ground_ground_2 = level0AdosCity.addTilesetImage("ground_ground_2", "ground_ground_2");
        const building_wall_wall_brown = level0AdosCity.addTilesetImage("building_wall_wall_brown", "building_wall_wall_brown");
        const building_decoration_banner = level0AdosCity.addTilesetImage("building_decoration_banner", "building_decoration_banner");
        const ground_brown_paving = level0AdosCity.addTilesetImage("ground_brown_paving", "ground_brown_paving");
        const ground_water_dungeon_water = level0AdosCity.addTilesetImage("ground_water_dungeon_water", "ground_water_dungeon_water");
        const ground_water_pool = level0AdosCity.addTilesetImage("ground_water_pool", "ground_water_pool");
        const building_roof_blue = level0AdosCity.addTilesetImage("building_roof_blue", "building_roof_blue");
        const building_roof_yellow = level0AdosCity.addTilesetImage("building_roof_yellow", "building_roof_yellow");
        const building_wall_stone = level0AdosCity.addTilesetImage("building_wall_stone", "building_wall_stone");
        const building_roof_green = level0AdosCity.addTilesetImage("building_roof_green", "building_roof_green");
        const building_wall_wood = level0AdosCity.addTilesetImage("building_wall_wood", "building_wall_wood");
        const building_roof_red = level0AdosCity.addTilesetImage("building_roof_red", "building_roof_red");
        const plant_flower_daisy_white = level0AdosCity.addTilesetImage("plant_flower_daisy_white", "plant_flower_daisy_white");
        const item_statue_green_stone = level0AdosCity.addTilesetImage("item_statue_green_stone", "item_statue_green_stone");
        const ground_cobbled_paving = level0AdosCity.addTilesetImage("ground_cobbled_paving", "ground_cobbled_paving");
        const item_statue_bird = level0AdosCity.addTilesetImage("item_statue_bird", "item_statue_bird");
        const building_fence_fence_chunky = level0AdosCity.addTilesetImage("building_fence_fence_chunky", "building_fence_fence_chunky");
        const plant_grasses = level0AdosCity.addTilesetImage("plant_grasses", "plant_grasses");
        const plant_bush_hedge = level0AdosCity.addTilesetImage("plant_bush_hedge", "plant_bush_hedge");
        const plant_flower_daisy_blue = level0AdosCity.addTilesetImage("plant_flower_daisy_blue", "plant_flower_daisy_blue");
        const plant_flower_daisy_red = level0AdosCity.addTilesetImage("plant_flower_daisy_red", "plant_flower_daisy_red");
        const plant_flower_daisy_yellow = level0AdosCity.addTilesetImage("plant_flower_daisy_yellow", "plant_flower_daisy_yellow");
        const plant_bush_bushes = level0AdosCity.addTilesetImage("plant_bush_bushes", "plant_bush_bushes");
        const plant_tree_tree_green = level0AdosCity.addTilesetImage("plant_tree_tree_green", "plant_tree_tree_green");
        const building_window_window_long = level0AdosCity.addTilesetImage("building_window_window_long", "building_window_window_long");
        const building_window_window_left = level0AdosCity.addTilesetImage("building_window_window_left", "building_window_window_left");
        const building_door_closed_with_key = level0AdosCity.addTilesetImage("building_door_closed_with_key", "building_door_closed_with_key");
        const building_window_window_right = level0AdosCity.addTilesetImage("building_window_window_right", "building_window_window_right");
        const furniture_chair_wooden_pale = level0AdosCity.addTilesetImage("furniture_chair_wooden_pale", "furniture_chair_wooden_pale");
        const furniture_table_wooden_pale = level0AdosCity.addTilesetImage("furniture_table_wooden_pale", "furniture_table_wooden_pale");
        const item_statue_grey_stone = level0AdosCity.addTilesetImage("item_statue_grey_stone", "item_statue_grey_stone");
        const item_statue_fairypool = level0AdosCity.addTilesetImage("item_statue_fairypool", "item_statue_fairypool");
        const ground_eye = level0AdosCity.addTilesetImage("ground_eye", "ground_eye");
        const item_sign_large = level0AdosCity.addTilesetImage("item_sign_large", "item_sign_large");
        const plant_stump_small_stump = level0AdosCity.addTilesetImage("plant_stump_small_stump", "plant_stump_small_stump");
        const building_door_door_n = level0AdosCity.addTilesetImage("building_door_door_n", "building_door_door_n");
        const building_decoration_chimney = level0AdosCity.addTilesetImage("building_decoration_chimney", "building_decoration_chimney");
        const building_door_closed = level0AdosCity.addTilesetImage("building_door_closed", "building_door_closed");
        const building_decoration_orbpedestal = level0AdosCity.addTilesetImage("building_decoration_orbpedestal", "building_decoration_orbpedestal");
        const building_decoration_longhorn_skull = level0AdosCity.addTilesetImage("building_decoration_longhorn_skull", "building_decoration_longhorn_skull");
        const building_church = level0AdosCity.addTilesetImage("building_church", "building_church");
        const building_entrance_int_iron_bars = level0AdosCity.addTilesetImage("building_entrance_int_iron_bars", "building_entrance_int_iron_bars");
        const building_decoration_chimney_big = level0AdosCity.addTilesetImage("building_decoration_chimney_big", "building_decoration_chimney_big");
        const item_statue_green_stone_2 = level0AdosCity.addTilesetImage("item_statue_green_stone_2", "item_statue_green_stone_2");
        const building_decoration_library_banner = level0AdosCity.addTilesetImage("building_decoration_library_banner", "building_decoration_library_banner");
        const building_door_door_e = level0AdosCity.addTilesetImage("building_door_door_e", "building_door_door_e");
        const building_door_door_w = level0AdosCity.addTilesetImage("building_door_door_w", "building_door_door_w");
        const logic_collision = level0AdosCity.addTilesetImage("logic_collision", "logic_collision");
        const furniture_other_stick = level0AdosCity.addTilesetImage("furniture_other_stick", "furniture_other_stick");
        const building_decoration_numbers = level0AdosCity.addTilesetImage("building_decoration_numbers", "building_decoration_numbers");
        const ground_water_pool_deep = level0AdosCity.addTilesetImage("ground_water_pool_deep", "ground_water_pool_deep");
        const object_suspension_bridge = level0AdosCity.addTilesetImage("object_suspension_bridge", "object_suspension_bridge");
        const logic_creature_animal = level0AdosCity.addTilesetImage("logic_creature_animal", "logic_creature_animal");
        const logic_creature_mutant = level0AdosCity.addTilesetImage("logic_creature_mutant", "logic_creature_mutant");
        const building_stairs_stairs = level0AdosCity.addTilesetImage("building_stairs_stairs", "building_stairs_stairs");
        const object_boardwalk = level0AdosCity.addTilesetImage("object_boardwalk", "object_boardwalk");
        const plant_stump_log_vertical = level0AdosCity.addTilesetImage("plant_stump_log_vertical", "plant_stump_log_vertical");
        const plant_stump_stump_vertical = level0AdosCity.addTilesetImage("plant_stump_stump_vertical", "plant_stump_stump_vertical");
        const ground_green_paving = level0AdosCity.addTilesetImage("ground_green_paving", "ground_green_paving");
        const light_light_5x5 = level0AdosCity.addTilesetImage("light_light_5x5", "light_light_5x5");
        const light_door_light = level0AdosCity.addTilesetImage("light_door_light", "light_door_light");
        const furniture_light_lamp_bronze = level0AdosCity.addTilesetImage("furniture_light_lamp_bronze", "furniture_light_lamp_bronze");
        const light_dim_light_7x5 = level0AdosCity.addTilesetImage("light_dim_light_7x5", "light_dim_light_7x5");
        const building_huts = level0AdosCity.addTilesetImage("building_huts", "building_huts");
        const logic_creature_fowl = level0AdosCity.addTilesetImage("logic_creature_fowl", "logic_creature_fowl");

        const allTileset = [ground_indoor_tiles, building_castle, ground_ground, ground_ground_2, building_wall_wall_brown, building_decoration_banner, ground_brown_paving, ground_water_dungeon_water, ground_water_pool, building_roof_blue, building_roof_yellow, building_wall_stone, building_roof_green, building_wall_wood, building_roof_red, plant_flower_daisy_white, item_statue_green_stone, ground_cobbled_paving, item_statue_bird, building_fence_fence_chunky, plant_grasses, plant_bush_hedge, plant_flower_daisy_blue, plant_flower_daisy_red, plant_flower_daisy_yellow, plant_bush_bushes, plant_tree_tree_green, building_window_window_long, building_window_window_left, building_door_closed_with_key, building_window_window_right, furniture_chair_wooden_pale, furniture_table_wooden_pale, item_statue_grey_stone, item_statue_fairypool, ground_eye, item_sign_large, plant_stump_small_stump, building_door_door_n, building_decoration_chimney, building_door_closed, building_decoration_orbpedestal, building_decoration_longhorn_skull, building_church, building_entrance_int_iron_bars, building_decoration_chimney_big, item_statue_green_stone_2, building_decoration_library_banner, building_door_door_e, building_door_door_w, logic_collision, furniture_other_stick, building_decoration_numbers, ground_water_pool_deep, object_suspension_bridge, logic_creature_animal, logic_creature_mutant, building_stairs_stairs, object_boardwalk, plant_stump_log_vertical, plant_stump_stump_vertical, ground_green_paving, light_light_5x5, light_door_light, furniture_light_lamp_bronze, light_dim_light_7x5, building_huts, logic_creature_fowl];

        this.collisionLayer = level0AdosCity.createLayer("collision", allTileset, 0, 0);
        this.floorLayer = level0AdosCity.createLayer("0_floor", allTileset, 0, 0);
        this.terrainLayer = level0AdosCity.createLayer("1_terrain", allTileset, 0, 0);
        this.objectLayer = level0AdosCity.createLayer("2_object", allTileset, 0, 0);
        const roofLayer = level0AdosCity.createLayer("3_roof", allTileset, 0, 0);
        this.roofaddLayer = level0AdosCity.createLayer("4_roof_add", allTileset, 0, 0);
        this.objectsLayer = level0AdosCity.createLayer("objects", allTileset, 0, 0);

        this.collisionLayer.setCollisionByProperty({ collides: true });

        roofLayer.setDepth(10);


        /* Player position */
        const playerSpawn = level0AdosCity.findObject("Objects", obj => obj.name === "Spawn Point");


        if ( this.px === undefined && this.py === undefined) {
            this.player = new Soldier(this, playerSpawn.x, playerSpawn.y);
        } else {
            this.player = new Soldier(this, this.px, this.py);
        }

        this.knight = new Knight(this, playerSpawn.x , playerSpawn.y + 100);

        this.physics.add.collider(this.player.sprite, this.collisionLayer);
        this.physics.add.collider(this.knight.sprite, this.collisionLayer);

        this.physics.add.collider(this.knight.sprite, this.player.sprite)
        

        /* Camera */
        camera = this.cameras.main;
        camera.startFollow(this.player.sprite);
        camera.setBounds(0, 0, level0AdosCity.widthInPixels, level0AdosCity.heightInPixels);

        
        /* World size */
        mapWidth = level0AdosCity.widthInPixels;
        mapHeight = level0AdosCity.heightInPixels;
        

        /* Marker */
        this.marker = new MouseTileMarker(this, level0AdosCity);


        /* Weapon */
        weaponName1s = this.physics.add.group({
            key: 'weaponName1',
            repeat: 9,
            setXY: { x: 490, y: 2723, stepX: 30 }
        });

        this.physics.add.overlap(this.player.sprite, weaponName1s, this.collectWeapon1, null, this);



        /* Get stat */

        soldierStat = JSON.parse(localStorage.getItem('soldierStat'));
        weaponName1 = soldierStat.weaponName1;
        weaponQuantity1 = soldierStat.weaponQuantity1;
        health = soldierStat.health;

        /* HUD*/
        hud = this.add.rectangle( 10, 10, 200, 90, 0xffffff, 1)
                            .setOrigin(0, 0)
                            .setScrollFactor(0)
                            .setDepth(29);

         weaponName1Text = this.add
            .text(16, 16, weaponName1 + ": " + weaponQuantity1, {
              font: "18px monospace",
              fill: "#000000",
              padding: { x: 20, y: 10 },
              backgroundColor: "#ffffff"
            })
            .setScrollFactor(0)
            .setDepth(30);

         healthText = this.add
            .text(16, 50, "Santé: " + health, {
              font: "18px monospace",
              fill: "#000000",
              padding: { x: 20, y: 10 },
              backgroundColor: "#ffffff"
            })
            .setScrollFactor(0)
            .setDepth(30);


        /* NPC and collision */
        npcBlacklord = this.physics.add.sprite(727,2641, "blacklord");
        npcBlacklord.body.immovable = true;
        npcBlacklord.body.moves = false;

        this.physics.add.collider(this.player.sprite, npcBlacklord, this.collideToBlacklord, null, this);
        this.physics.add.collider(this.knight.sprite, npcBlacklord, this.collideToBlacklord, null, this);

        npcZombi = this.physics.add.sprite(927,2641, "zombi");
        npcZombi.body.immovable = true;
        npcZombi.body.moves = false;

        this.physics.add.collider(this.player.sprite, npcZombi, this.collideToZombi, null, this);
        this.physics.add.collider(this.knight.sprite, npcZombi, null, null, this);

        this.createEnemies(0, 0, mapWidth, mapHeight, 10);
        this.physics.add.collider(this.player.sprite, this.zombis);
        this.physics.add.collider(this.knight.sprite, this.zombis);

        this.timedEvent = this.time.addEvent({
            delay: 3000,
            callback: this.moveEnemies,
            callbackScope: this,
            loop: true
        });


        /* Path following */
        graphics1 = this.add.graphics({ lineStyle: { color: 0x666666 } });
        graphics2 = this.add.graphics({ lineStyle: { color: 0xffff00 } });

        path = new Phaser.Curves.Path();
        path.moveTo(436, 3190);
        path.lineTo(1351, 3190);
        path.lineTo(1351, 3700);
        path.lineTo(430, 3700);
        path.lineTo(436, 3190);

        path.draw(graphics1);
 
        follower = this.add.follower(path, 0, 0, "zombia").startFollow({
                        duration: 80000,
                        loop: -1,
                    });
 
        this.physics.world.enable(follower);
        follower.body.setImmovable();
        this.physics.add.collider(this.player.sprite, follower);      

        /* Command */
        // Construct/Destruct
        this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.testKeyC = false;
        this.testKeyOnceC = true;

        this.keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
        this.testKeyV = false;
        this.testKeyOnceV = true;

        // Parler        
        this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        this.testKeyP = false;
        this.testKeyOnceP = true;

        this.keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        this.testKeyK = false;
        this.testKeyOnceK = true;

        // Change Camera view
        this.keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        this.testKeyN = false;
        this.testKeyOnceN = true;

        this.keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        this.testKeyB = false;
        this.testKeyOnceB = true;

        // Debug Tile       
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.testKeyT = false;
        this.testKeyOnceT = true;


        /* */
        keyO = this.input.keyboard.addKey("o");
        keyJ = this.input.keyboard.addKey("j");
        keyM = this.input.keyboard.addKey("m");
        keyP = this.input.keyboard.addKey("p");
        keyE = this.input.keyboard.addKey("e");
        this.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);

    }

    /* Enemy */

    createEnemies(zonex, zoney, zoneWidth, zoneHeight, nbEnemy) {
        // where the enemies will be
        this.zombis = this.physics.add.group({
          classType: Phaser.GameObjects.Sprite
        });
        
        for (var i = 0; i < nbEnemy; i++) {
          //console.log("zombi: " + i);
          const location = this.getValidLocation(zonex, zoney, zoneWidth, zoneHeight);
          var enemy = this.zombis.create(location.x, location.y, this.getEnemySprite());
          //console.log("x: " + enemy.body.x + " / y: " + enemy.body.y);
          enemy.body.setImmovable();
        }

    }


    getEnemySprite() {
        var sprites = ['zombi'];
        return sprites[Math.floor(Math.random() * sprites.length)];
    }

    getValidLocation(zonex, zoney, zoneWidth, zoneHeight) {
        var validLocation1 = false;
        var validLocation2 = false;
        var x, y;

        while (!validLocation1 || !validLocation2) {
            var occupied1 = false;
            var occupied2 = false;

            x = Phaser.Math.RND.between(zonex, zonex + zoneWidth);
            y = Phaser.Math.RND.between(zoney, zoney + zoneHeight);


            this.zombis.getChildren().forEach((child) => {
                if (child.getBounds().contains(x, y)) {
                    //console.log("occupied: bound ");
                    occupied1 = true;
                }
            });

           this.zombis.getChildren().forEach((child) => {
                var tile = this.collisionLayer.getTileAtWorldXY(x, y);
                if(tile != null) {
                    //console.log("occupied tile", tile.properties.collides);
                    // Debug
                    /*
                    this.worldTile = this.collisionLayer.putTileAtWorldXY(33, x, y);
                    this.worldTile.setCollision(true);
                    this.worldTile = this.terrainLayer.putTileAtWorldXY(33, x, y);
                    */

                    occupied2 = true;
                }
            });


            if (!occupied1) {
                validLocation1 = true;
            }

            if (!occupied2) {
                validLocation2 = true;
            }

        }

        return { x, y };
    }


    moveEnemies () {
      this.zombis.getChildren().forEach((enemy) => {
        const randNumber = Math.floor((Math.random() * 4) + 1);
     
        switch(randNumber) {
          case 1:
            enemy.body.setVelocityX(50);
            break;
          case 2:
            enemy.body.setVelocityX(-50);
            break;
          case 3:
            enemy.body.setVelocityY(50);
            break;
          case 4:
            enemy.body.setVelocityY(50);
            break;
          default:
            enemy.body.setVelocityX(50);
        }
      });
     
      setTimeout(() => {
        this.zombis.setVelocityX(0);
        this.zombis.setVelocityY(0);
      }, 500);
    }


    /* Collision */
    collectWeapon1(player, weaponName) {
        weaponName.disableBody(true, true);
        weaponQuantity1 += 1;

        /* Save stat */
        soldierStat.weaponQuantity1 = weaponQuantity1;
        localStorage.setItem('soldierStat',JSON.stringify(soldierStat));

        weaponName1Text.setText(weaponName1 + ": " + weaponQuantity1);
    }

    collideToBlacklord(player, npc) {
        p = player.body.touching.none;
        n = npc.body.touching.none;
    }

    collideToZombi(player, npc) {
        p = player.body.touching.none;
        n = npc.body.touching.none;
        health -= 10;

        /* Save stat */
        soldierStat.health = health;
        localStorage.setItem('soldierStat',JSON.stringify(soldierStat));

        healthText.setText('Santé : ' + health);
    }

    checkDoor(playerx, playery, doorx, doory) {
       if(playerx >= doorx-2 && playerx <= doorx+2 && playery >= doory-2 && playery <= doory+2)
            return true;
        return false;
    }


    update(time, delta) {
        this.player.update();
        this.knight.update();

        this.marker.update();

        const pointer = this.input.activePointer;
        const worldPoint = pointer.positionToCamera(this.cameras.main);


        /**/

         if (!follower.isFollowing()) return;



        /* Open door */
        if(keyO.isDown){
            console.log("o");
            if(this.checkDoor(this.player.sprite.x, this.player.sprite.y, 720, 3624)) {
                    /* Save stat */
                    soldierStat.weaponQuantity1= weaponQuantity1;
                    soldierStat.health = health;
                    localStorage.setItem('soldierStat',JSON.stringify(soldierStat));
                    console.log("file:", soldierStat);

                    /* Go to the next scene */
                    console.log("house_70");
                    this.scene.start('InteriorsAdosHouse70', {px: 400, py: 704});
            }

            if(this.checkDoor(this.player.sprite.x, this.player.sprite.y, 592, 1960)) {
                    /* Save stat */
                    soldierStat.weaponQuantity1= weaponQuantity1;
                    soldierStat.health = health;
                    localStorage.setItem('soldierStat',JSON.stringify(soldierStat));
                    console.log("file:", soldierStat);

                    /* Go to the next scene */
                    console.log("house_68");
                    this.scene.start('InteriorsAdosHouse68' , {px: 432, py: 672});
            }

        }

        /* Construct */      
        if(this.keyC.isDown) {

            if (!this.keyOnceC) {
                this.worldTile = this.collisionLayer.putTileAtWorldXY(33, worldPoint.x, worldPoint.y);                
                this.worldTile.setCollision(true);
                this.worldTile = this.terrainLayer.putTileAtWorldXY(33, worldPoint.x, worldPoint.y);  
                console.log("C key pressed")
                this.keyOnceC = true;                
            }
        }

        if(this.keyC.isUp) {
          this.keyOnceC = false;
        }
        
        if(this.keyV.isDown) {

            if (!this.keyOnceV) {
                this.worldTile = this.collisionLayer.putTileAtWorldXY(0, worldPoint.x, worldPoint.y);                
                this.worldTile.setCollision(false);
                this.worldTile = this.terrainLayer.putTileAtWorldXY(0, worldPoint.x, worldPoint.y);  
                console.log("V key pressed")
                this.keyOnceV = true;                
            }
        }

        if(this.keyV.isUp) {
          this.keyOnceV = false;
        }

    
        /* Change camera focus*/
         if(this.keyB.isDown) {
            if (!this.keyOnceB) {
                console.log("B key pressed");
                camera.startFollow(this.knight.sprite);
                this.keyOnceB = true;                
            }
        }

        if(this.keyB.isUp) {
          this.keyOnceB = false;
        }
   
         if(this.keyN.isDown) {
            if (!this.keyOnceN) {
                console.log("N key pressed");
                camera.startFollow(this.player.sprite);
                this.keyOnceN = true;                
            }
        }

        if(this.keyN.isUp) {
          this.keyOnceN = false;
        }
 

        /* Kombat */
        if(this.keyK.isDown) {

            if (!this.keyOnceK) {
                console.log("K key pressed")
                distanceBetween2PC = Phaser.Math.Distance.Between(this.player.sprite.x, this.player.sprite.y, npcZombi.x, npcZombi.y);
                if(distanceBetween2PC <= 50) {
                    console.log("Kombat");
                    this.scene.start('Combat', {previousScene: "Level0AdosCity", px: this.player.sprite.x, py: this.player.sprite.y, weaponQuantity1: this.player.weaponQuantity1});
                } 
                this.keyOnceK = true;                
            }
        }

        if(this.keyK.isUp) {
          this.keyOnceK = false;
        }
 

        /* Dialogue */
        distanceBetween2PC = Phaser.Math.Distance.Between(this.player.sprite.x, this.player.sprite.y, npcBlacklord.x, npcBlacklord.y);
        if(distanceBetween2PC <= 50) {
            if (once == false) {
                canTalkToBlacklord = true;
            }
        } else {
            canTalkToBlacklord = false;
            once = false;
            if(blacklordDialogueDisplay == true) {
                dialogueTextBlacklord.destroy();
                dialogueBackground.destroy();
                blacklordDialogueDisplay = false;
            }
        }

        if(this.keyP.isDown) {
            if (!this.keyOnceP) {
                if(canTalkToBlacklord == true && once == false) {
                    dialogueBackground = this.add.rectangle(300, 500, 500, 100, 0xffffff, 1)
                            .setScrollFactor(0,0)
                            .setDepth(29);
                  
                    dialogueTextBlacklord = this.add.text(50, 450, 'Moi : Oh Grand Black Lord !\nGrand Black Lord : Salut à toi !\nTue tous les zombies!!!! \\o/', {
                          font: "12apx monospace",
                          fill: "#000000",
                          padding: { x: 20, y: 10 },
                          backgroundColor: "#ffffff"
                        })
                        .setScrollFactor(0,0)
                        .setDepth(30);
                    blacklordDialogueDisplay = true;
                    canTalkToBlacklord = false;
                    once = true;
                }
                
                this.keyOnceP = true;                
            }
        }

        if(this.keyP.isUp) {
          this.keyOnceP = false;
        }
 

        /* Debug: player*/
        if(keyE.isDown){
            console.log(this.player.sprite.x + " " + this.player.sprite.y);
            //console.log(mapWidth + " " +  mapHeight);        

            //console.log("Character");
            //this.scene.start("Character", {previousScene: "Level0AdosCity", player: this.player});
        }
 

        /* Debug: Tile */   
         if(this.keyT.isDown) {
            if (!this.keyOnceT) {
                console.log("T key pressed");
                console.log("mousex: " + worldPoint.x + " / mousey: " +  worldPoint.y);
                var tile = this.collisionLayer.getTileAtWorldXY(worldPoint.x, worldPoint.y);
                if(tile != null) {
                    console.log("tile: ", tile.properties.collides);
                }
                this.keyOnceT = true;                
            }
        }

        if(this.keyT.isUp) {
          this.keyOnceT = false;
        }

  
        /* Debug: graphism */
        if (Phaser.Input.Keyboard.JustDown(this.keyG)){
            this.physics.world.createDebugGraphic();
            const graphics = this.add
              .graphics()
              .setAlpha(0.75)
              .setDepth(20);
            this.terrainLayer.renderDebug(graphics, {
              tileColor: null,
              collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
              faceColor: new Phaser.Display.Color(40, 39, 37, 255)
            });

        }

    }
}
