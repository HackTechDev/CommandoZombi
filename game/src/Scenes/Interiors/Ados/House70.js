import Player from "../../../Player/Soldier";

import 'phaser';

var keyO, keyD, keyM, keyA, keyS;

export default class InteriorsAdosHouse70 extends Phaser.Scene {
  constructor () {
    super('InteriorsAdosHouse70');
  }

    init(data){
          this.px = data.px;
          this.py = data.py;
    }

    preload() {
        /*
        1/

        https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6
 
        Tiled version : Tiled-1.6.0-x86_64.AppImage
        Format de Calque de Tuiles : CSV
        Exporter en tant que... : .json

        Ouvrir : Files of type: Fichiers de carte JSON (*.json)


        2/

        Selectionner le jeux de tuile "logic_collision"
        [Editer le jeu de Tuiles]
    
        Propriétés Personnalisées :
            - [+]
            - Ajouter la propriété : collides
              Type : Bool
            - Coche la case         


        2/ 

        Selectionner le calques "1_terrain"
        [Objets]
        - Ajout un Calque d'Objet
        - Renommer en : Objects
        - Insérer un Point
        - Rénommer en : Spawn Point       

        3/ 
        php ./tilesetGenerator.php 

        
        4/ Dans le fichier json : 

         "image":"..\/..\/tileset\/furniture\/carpet\/carpets_2.png",
         "name":"carpets_2.png",

         Remplacer "name" par :

         "name":"furniture_carpet_carpets_2",


        */

       this.load.image("logic_collision", "assets/stendhal/tiled/tileset/logic/collision.png");
       this.load.image("furniture_carpet_purple", "assets/stendhal/tiled/tileset/furniture/carpet/purple.png");
       this.load.image("ground_ground_2", "assets/stendhal/tiled/tileset/ground/ground_2.png");
       this.load.image("ground_ground_3", "assets/stendhal/tiled/tileset/ground/ground_3.png");
       this.load.image("ground_indoor_oriental_tan_tile", "assets/stendhal/tiled/tileset/ground/indoor/oriental_tan_tile.png");
       this.load.image("ground_indoor_floor_tiles2", "assets/stendhal/tiled/tileset/ground/indoor/floor_tiles2.png");
       this.load.image("plant_bush_bushes", "assets/stendhal/tiled/tileset/plant/bush/bushes.png");
       this.load.image("plant_indoor_pot_plant_1", "assets/stendhal/tiled/tileset/plant/indoor/pot_plant_1.png");
       this.load.image("plant_indoor_small_flowerpots", "assets/stendhal/tiled/tileset/plant/indoor/small_flowerpots.png");
       this.load.image("building_wall_int_green_purple", "assets/stendhal/tiled/tileset/building/wall/int_green_purple.png");
       this.load.image("building_entrance_green_purple_ns_ew", "assets/stendhal/tiled/tileset/building/entrance/green_purple_ns_ew.png");
       this.load.image("furniture_chair_wooden_pale", "assets/stendhal/tiled/tileset/furniture/chair/wooden_pale.png");
       this.load.image("furniture_kitchen_cabinets", "assets/stendhal/tiled/tileset/furniture/kitchen/cabinets.png");
       this.load.image("furniture_table_white", "assets/stendhal/tiled/tileset/furniture/table/white.png");
       this.load.image("furniture_table_concrete_table", "assets/stendhal/tiled/tileset/furniture/table/concrete_table.png");
       this.load.image("furniture_chair_sofa_chair_pink", "assets/stendhal/tiled/tileset/furniture/chair/sofa_chair_pink.png");
       this.load.image("furniture_bed_double_purple_gold", "assets/stendhal/tiled/tileset/furniture/bed/double_purple_gold.png");
       this.load.image("furniture_chair_armchair_pink", "assets/stendhal/tiled/tileset/furniture/chair/armchair_pink.png");
       this.load.image("furniture_chair_stool", "assets/stendhal/tiled/tileset/furniture/chair/stool.png");
       this.load.image("furniture_chair_colorful", "assets/stendhal/tiled/tileset/furniture/chair/colorful.png");
       this.load.image("furniture_shelve_wardrobe_lateral", "assets/stendhal/tiled/tileset/furniture/shelve/wardrobe_lateral.png");
       this.load.image("furniture_clock_wooden_clock", "assets/stendhal/tiled/tileset/furniture/clock/wooden_clock.png");
       this.load.image("furniture_table_long_side_on_pale", "assets/stendhal/tiled/tileset/furniture/table/long_side_on_pale.png");
       this.load.image("furniture_kitchen_warmer_2", "assets/stendhal/tiled/tileset/furniture/kitchen/warmer_2.png");
       this.load.image("item_textile_towels", "assets/stendhal/tiled/tileset/item/textile/towels.png");
       this.load.image("furniture_bathroom_basin", "assets/stendhal/tiled/tileset/furniture/bathroom/basin.png");
       this.load.image("furniture_bathroom_toilet", "assets/stendhal/tiled/tileset/furniture/bathroom/toilet.png");
       this.load.image("furniture_bathroom_bathtub", "assets/stendhal/tiled/tileset/furniture/bathroom/bathtub.png");
       this.load.image("item_pot_wastebin", "assets/stendhal/tiled/tileset/item/pot/wastebin.png");
       this.load.image("furniture_light_lights_candle", "assets/stendhal/tiled/tileset/furniture/light/lights_candle.png");
       this.load.image("building_decoration_fancy_gate", "assets/stendhal/tiled/tileset/building/decoration/fancy_gate.png");
       this.load.image("furniture_picture_cats", "assets/stendhal/tiled/tileset/furniture/picture/cats.png");
       this.load.image("furniture_picture_oil_paintings", "assets/stendhal/tiled/tileset/furniture/picture/oil_paintings.png");
       this.load.image("item_documents_books2", "assets/stendhal/tiled/tileset/item/documents/books2.png");
       this.load.image("item_brush", "assets/stendhal/tiled/tileset/item/brush.png");
       this.load.image("item_chest_chests_red", "assets/stendhal/tiled/tileset/item/chest/chests_red.png");
       this.load.image("item_drink_bottles_and_cups", "assets/stendhal/tiled/tileset/item/drink/bottles_and_cups.png");
       this.load.image("item_food_bread", "assets/stendhal/tiled/tileset/item/food/bread.png");
       this.load.image("furniture_shelve_rack", "assets/stendhal/tiled/tileset/furniture/shelve/rack.png");
       this.load.image("item_household_food_preparation", "assets/stendhal/tiled/tileset/item/household/food_preparation.png");
       this.load.image("item_household_food_preparation_2", "assets/stendhal/tiled/tileset/item/household/food_preparation_2.png");
       this.load.image("item_drink_juice_glass", "assets/stendhal/tiled/tileset/item/drink/juice_glass.png");
       this.load.image("item_statue_nymph_reddish", "assets/stendhal/tiled/tileset/item/statue/nymph_reddish.png");
       this.load.image("item_instrument_ukulele", "assets/stendhal/tiled/tileset/item/instrument/ukulele.png");
       this.load.image("logic_portal", "assets/stendhal/tiled/tileset/logic/portal.png");
       this.load.image("logic_item_sheepfood", "assets/stendhal/tiled/tileset/logic/item/sheepfood.png");
       this.load.image("terrain_cave_edges_blue", "assets/stendhal/tiled/tileset/terrain/cave_edges_blue.png");
       this.load.image("ground_slate_tiles", "assets/stendhal/tiled/tileset/ground/slate_tiles.png");

       this.load.tilemapTiledJSON("interiorsAdosHouse70", "assets/stendhal/tiled/interiors/ados/house_70.json");
    }

    create() {
        const interiorsAdosHouse70 = this.make.tilemap({ key: "interiorsAdosHouse70" });

        const logic_collision = interiorsAdosHouse70.addTilesetImage("logic_collision", "logic_collision");
        const furniture_carpet_purple = interiorsAdosHouse70.addTilesetImage("furniture_carpet_purple", "furniture_carpet_purple");
        const ground_ground_2 = interiorsAdosHouse70.addTilesetImage("ground_ground_2", "ground_ground_2");
        const ground_ground_3 = interiorsAdosHouse70.addTilesetImage("ground_ground_3", "ground_ground_3");
        const ground_indoor_oriental_tan_tile = interiorsAdosHouse70.addTilesetImage("ground_indoor_oriental_tan_tile", "ground_indoor_oriental_tan_tile");
        const ground_indoor_floor_tiles2 = interiorsAdosHouse70.addTilesetImage("ground_indoor_floor_tiles2", "ground_indoor_floor_tiles2");
        const plant_bush_bushes = interiorsAdosHouse70.addTilesetImage("plant_bush_bushes", "plant_bush_bushes");
        const plant_indoor_pot_plant_1 = interiorsAdosHouse70.addTilesetImage("plant_indoor_pot_plant_1", "plant_indoor_pot_plant_1");
        const plant_indoor_small_flowerpots = interiorsAdosHouse70.addTilesetImage("plant_indoor_small_flowerpots", "plant_indoor_small_flowerpots");
        const building_wall_int_green_purple = interiorsAdosHouse70.addTilesetImage("building_wall_int_green_purple", "building_wall_int_green_purple");
        const building_entrance_green_purple_ns_ew = interiorsAdosHouse70.addTilesetImage("building_entrance_green_purple_ns_ew", "building_entrance_green_purple_ns_ew");
        const furniture_chair_wooden_pale = interiorsAdosHouse70.addTilesetImage("furniture_chair_wooden_pale", "furniture_chair_wooden_pale");
        const furniture_kitchen_cabinets = interiorsAdosHouse70.addTilesetImage("furniture_kitchen_cabinets", "furniture_kitchen_cabinets");
        const furniture_table_white = interiorsAdosHouse70.addTilesetImage("furniture_table_white", "furniture_table_white");
        const furniture_table_concrete_table = interiorsAdosHouse70.addTilesetImage("furniture_table_concrete_table", "furniture_table_concrete_table");
        const furniture_chair_sofa_chair_pink = interiorsAdosHouse70.addTilesetImage("furniture_chair_sofa_chair_pink", "furniture_chair_sofa_chair_pink");
        const furniture_bed_double_purple_gold = interiorsAdosHouse70.addTilesetImage("furniture_bed_double_purple_gold", "furniture_bed_double_purple_gold");
        const furniture_chair_armchair_pink = interiorsAdosHouse70.addTilesetImage("furniture_chair_armchair_pink", "furniture_chair_armchair_pink");
        const furniture_chair_stool = interiorsAdosHouse70.addTilesetImage("furniture_chair_stool", "furniture_chair_stool");
        const furniture_chair_colorful = interiorsAdosHouse70.addTilesetImage("furniture_chair_colorful", "furniture_chair_colorful");
        const furniture_shelve_wardrobe_lateral = interiorsAdosHouse70.addTilesetImage("furniture_shelve_wardrobe_lateral", "furniture_shelve_wardrobe_lateral");
        const furniture_clock_wooden_clock = interiorsAdosHouse70.addTilesetImage("furniture_clock_wooden_clock", "furniture_clock_wooden_clock");
        const furniture_table_long_side_on_pale = interiorsAdosHouse70.addTilesetImage("furniture_table_long_side_on_pale", "furniture_table_long_side_on_pale");
        const furniture_kitchen_warmer_2 = interiorsAdosHouse70.addTilesetImage("furniture_kitchen_warmer_2", "furniture_kitchen_warmer_2");
        const item_textile_towels = interiorsAdosHouse70.addTilesetImage("item_textile_towels", "item_textile_towels");
        const furniture_bathroom_basin = interiorsAdosHouse70.addTilesetImage("furniture_bathroom_basin", "furniture_bathroom_basin");
        const furniture_bathroom_toilet = interiorsAdosHouse70.addTilesetImage("furniture_bathroom_toilet", "furniture_bathroom_toilet");
        const furniture_bathroom_bathtub = interiorsAdosHouse70.addTilesetImage("furniture_bathroom_bathtub", "furniture_bathroom_bathtub");
        const item_pot_wastebin = interiorsAdosHouse70.addTilesetImage("item_pot_wastebin", "item_pot_wastebin");
        const furniture_light_lights_candle = interiorsAdosHouse70.addTilesetImage("furniture_light_lights_candle", "furniture_light_lights_candle");
        const building_decoration_fancy_gate = interiorsAdosHouse70.addTilesetImage("building_decoration_fancy_gate", "building_decoration_fancy_gate");
        const furniture_picture_cats = interiorsAdosHouse70.addTilesetImage("furniture_picture_cats", "furniture_picture_cats");
        const furniture_picture_oil_paintings = interiorsAdosHouse70.addTilesetImage("furniture_picture_oil_paintings", "furniture_picture_oil_paintings");
        const item_documents_books2 = interiorsAdosHouse70.addTilesetImage("item_documents_books2", "item_documents_books2");
        const item_brush = interiorsAdosHouse70.addTilesetImage("item_brush", "item_brush");
        const item_chest_chests_red = interiorsAdosHouse70.addTilesetImage("item_chest_chests_red", "item_chest_chests_red");
        const item_drink_bottles_and_cups = interiorsAdosHouse70.addTilesetImage("item_drink_bottles_and_cups", "item_drink_bottles_and_cups");
        const item_food_bread = interiorsAdosHouse70.addTilesetImage("item_food_bread", "item_food_bread");
        const furniture_shelve_rack = interiorsAdosHouse70.addTilesetImage("furniture_shelve_rack", "furniture_shelve_rack");
        const item_household_food_preparation = interiorsAdosHouse70.addTilesetImage("item_household_food_preparation", "item_household_food_preparation");
        const item_household_food_preparation_2 = interiorsAdosHouse70.addTilesetImage("item_household_food_preparation_2", "item_household_food_preparation_2");
        const item_drink_juice_glass = interiorsAdosHouse70.addTilesetImage("item_drink_juice_glass", "item_drink_juice_glass");
        const item_statue_nymph_reddish = interiorsAdosHouse70.addTilesetImage("item_statue_nymph_reddish", "item_statue_nymph_reddish");
        const item_instrument_ukulele = interiorsAdosHouse70.addTilesetImage("item_instrument_ukulele", "item_instrument_ukulele");
        const logic_portal = interiorsAdosHouse70.addTilesetImage("logic_portal", "logic_portal");
        const logic_item_sheepfood = interiorsAdosHouse70.addTilesetImage("logic_item_sheepfood", "logic_item_sheepfood");
        const terrain_cave_edges_blue = interiorsAdosHouse70.addTilesetImage("terrain_cave_edges_blue", "terrain_cave_edges_blue");
        const ground_slate_tiles = interiorsAdosHouse70.addTilesetImage("ground_slate_tiles", "ground_slate_tiles");

       const allTileset = [logic_collision, furniture_carpet_purple, ground_ground_2, ground_ground_3, ground_indoor_oriental_tan_tile, ground_indoor_floor_tiles2, plant_bush_bushes, plant_indoor_pot_plant_1, plant_indoor_small_flowerpots, building_wall_int_green_purple, building_entrance_green_purple_ns_ew, furniture_chair_wooden_pale, furniture_kitchen_cabinets, furniture_table_white, furniture_table_concrete_table, furniture_chair_sofa_chair_pink, furniture_bed_double_purple_gold, furniture_chair_armchair_pink, furniture_chair_stool, furniture_chair_colorful, furniture_shelve_wardrobe_lateral, furniture_clock_wooden_clock, furniture_table_long_side_on_pale, furniture_kitchen_warmer_2, item_textile_towels, furniture_bathroom_basin, furniture_bathroom_toilet, furniture_bathroom_bathtub, item_pot_wastebin, furniture_light_lights_candle, building_decoration_fancy_gate, furniture_picture_cats, furniture_picture_oil_paintings, item_documents_books2, item_brush, item_chest_chests_red, item_drink_bottles_and_cups, item_food_bread, furniture_shelve_rack, item_household_food_preparation, item_household_food_preparation_2, item_drink_juice_glass, item_statue_nymph_reddish, item_instrument_ukulele, logic_portal, logic_item_sheepfood, terrain_cave_edges_blue, ground_slate_tiles];


        this.collisionLayer = interiorsAdosHouse70.createLayer("collision", allTileset, 0, 0);
        this.floorLayer = interiorsAdosHouse70.createLayer("0_floor", allTileset, 0, 0);
        this.terrainLayer = interiorsAdosHouse70.createLayer("1_terrain", allTileset, 0, 0);
        this.objectLayer = interiorsAdosHouse70.createLayer("2_object", allTileset, 0, 0);
        const roofLayer = interiorsAdosHouse70.createLayer("3_roof", allTileset, 0, 0);
        this.roofaddLayer = interiorsAdosHouse70.createLayer("4_roof_add", allTileset, 0, 0);
        this.objectsLayer = interiorsAdosHouse70.createLayer("objects", allTileset, 0, 0);

        this.collisionLayer.setCollisionByProperty({ collides: true });

        roofLayer.setDepth(10);

        const spawnPoint = interiorsAdosHouse70.findObject("Objects", obj => obj.name === "Spawn Point");

        this.player = new Player(this, this.px, this.py);

        this.physics.add.collider(this.player.sprite, this.collisionLayer);

        const camera = this.cameras.main;
        camera.startFollow(this.player.sprite);
        camera.setBounds(0, 0, interiorsAdosHouse70.widthInPixels, interiorsAdosHouse70.heightInPixels);

        keyO = this.input.keyboard.addKey("o");
        keyD = this.input.keyboard.addKey("d");
        keyM = this.input.keyboard.addKey("m");
        keyA = this.input.keyboard.addKey("a");
        keyS = this.input.keyboard.addKey("s");
    }

    checkDoor(playerx, playery, doorx, doory) {
       if(playerx >= doorx-2 && playerx <= doorx+2 && playery >= doory-2 && playery <= doory+2)
            return true;
        return false;
    }


    update(time, delta) {
        this.player.update();
 
        if(keyO.isDown){
            console.log("o");
            if(this.checkDoor(this.player.sprite.x, this.player.sprite.y, 400, 704)) {
               console.log("ados");
               this.scene.start("Level0AdosCity", {px: 720, py: 3624});                   
           }
        }
        
        if(keyD.isDown){
            console.log( this.player.sprite.x + " " + this.player.sprite.y);
        }

        if(keyM.isDown){
            console.log("Mission1");
            this.scene.start("Mission1", {previousScene: "InteriorsAdosHouse70"});
        }   
  
        if(keyA.isDown){
            console.log("Aide");
            this.scene.start('Help', {previousScene: "InteriorsAdosHouse70"});
        }          

        if(keyS.isDown){
            console.log("Option: Son");
            this.scene.start('Options', {previousScene: "InteriorsAdosHouse70"});
        } 

    }
}
