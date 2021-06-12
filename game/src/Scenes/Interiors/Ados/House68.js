import Player from "../../../Player/Soldier";

import 'phaser';

var keyO, keyD, keyM, keyA, keyS;

export default class InteriorsAdosHouse68Scene extends Phaser.Scene {
  constructor () {
    super('InteriorsAdosHouse68');
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

        */

       this.load.image("furniture_carpet_carpets_2", "assets/stendhal/tiled/tileset/furniture/carpet/carpets_2.png");
       this.load.image("building_wall_int_wall_pale", "assets/stendhal/tiled/tileset/building/wall/int_wall_pale.png");
       this.load.image("building_wall_int_wall_purple", "assets/stendhal/tiled/tileset/building/wall/int_wall_purple.png");
       this.load.image("building_entrance_pale_red_ns", "assets/stendhal/tiled/tileset/building/entrance/pale_red_ns.png");
       this.load.image("plant_indoor_flower_vase", "assets/stendhal/tiled/tileset/plant/indoor/flower_vase.png");
       this.load.image("furniture_shelve_bright_bookshelf_and_cupboard", "assets/stendhal/tiled/tileset/furniture/shelve/bright_bookshelf_and_cupboard.png");
       this.load.image("furniture_chair_wooden_pale", "assets/stendhal/tiled/tileset/furniture/chair/wooden_pale.png");
       this.load.image("plant_indoor_flowering_plant", "assets/stendhal/tiled/tileset/plant/indoor/flowering_plant.png");
       this.load.image("furniture_chair_stool", "assets/stendhal/tiled/tileset/furniture/chair/stool.png");
       this.load.image("furniture_table_wooden_pale", "assets/stendhal/tiled/tileset/furniture/table/wooden_pale.png");
       this.load.image("furniture_light_small_lamp", "assets/stendhal/tiled/tileset/furniture/light/small_lamp.png");
       this.load.image("logic_collision", "assets/stendhal/tiled/tileset/logic/collision.png");
       this.load.image("furniture_carpet_blue", "assets/stendhal/tiled/tileset/furniture/carpet/blue.png");
       this.load.image("item_chest_small", "assets/stendhal/tiled/tileset/item/chest/small.png");
       this.load.image("item_drink_red_wine", "assets/stendhal/tiled/tileset/item/drink/red_wine.png");
       this.load.image("item_food_fruit_basket", "assets/stendhal/tiled/tileset/item/food/fruit_basket.png");
       this.load.image("furniture_table_long_front_on", "assets/stendhal/tiled/tileset/furniture/table/long_front_on.png");
       this.load.image("item_documents_book", "assets/stendhal/tiled/tileset/item/documents/book.png");
       this.load.image("plant_indoor_flower_vase", "assets/stendhal/tiled/tileset/plant/indoor/flower_vase.png");
       this.load.image("furniture_shelve_pale_book_bottle_shelf", "assets/stendhal/tiled/tileset/furniture/shelve/pale_book_bottle_shelf.png");
       this.load.image("furniture_kitchen_pie_safe", "assets/stendhal/tiled/tileset/furniture/kitchen/pie_safe.png");
       this.load.image("furniture_kitchen_stove", "assets/stendhal/tiled/tileset/furniture/kitchen/stove.png");
       this.load.image("logic_item_sheepfood", "assets/stendhal/tiled/tileset/logic/item/sheepfood.png");
       this.load.image("furniture_chair_sofa_red", "assets/stendhal/tiled/tileset/furniture/chair/sofa_red.png");
       this.load.image("plant_bush_hosta", "assets/stendhal/tiled/tileset/plant/bush/hosta.png");
       this.load.image("furniture_chair_sofa", "assets/stendhal/tiled/tileset/furniture/chair/sofa.png");
       this.load.image("plant_indoor_pot_plant_1", "assets/stendhal/tiled/tileset/plant/indoor/pot_plant_1.png");
       this.load.image("furniture_kitchen_warmer", "assets/stendhal/tiled/tileset/furniture/kitchen/warmer.png");
       this.load.image("plant_indoor_flower_baskets", "assets/stendhal/tiled/tileset/plant/indoor/flower_baskets.png");
       this.load.image("furniture_carpet_carpets", "assets/stendhal/tiled/tileset/furniture/carpet/carpets.png");
       this.load.image("item_brush", "assets/stendhal/tiled/tileset/item/brush.png");
       this.load.image("furniture_shelve_bright_bookshelf", "assets/stendhal/tiled/tileset/furniture/shelve/bright_bookshelf.png");
       this.load.image("furniture_table_wooden_rectangular", "assets/stendhal/tiled/tileset/furniture/table/wooden_rectangular.png");
       this.load.image("item_food_rustic_meals", "assets/stendhal/tiled/tileset/item/food/rustic_meals.png");
       this.load.image("item_food_meals_2", "assets/stendhal/tiled/tileset/item/food/meals_2.png");
       this.load.image("furniture_chair_sofa_chair_blue", "assets/stendhal/tiled/tileset/furniture/chair/sofa_chair_blue.png");
       this.load.image("item_food_meals_3", "assets/stendhal/tiled/tileset/item/food/meals_3.png");
       this.load.image("ground_ground", "assets/stendhal/tiled/tileset/ground/ground.png");
       this.load.image("building_wall_bricked_edges", "assets/stendhal/tiled/tileset/building/wall/bricked_edges.png");
       this.load.image("logic_item_vegetable", "assets/stendhal/tiled/tileset/logic/item/vegetable.png");
       this.load.image("furniture_bed_double_blue", "assets/stendhal/tiled/tileset/furniture/bed/double_blue.png");
   
        this.load.tilemapTiledJSON("interiorsAdosHouse68", "assets/stendhal/tiled/interiors/ados/house_68.json");

        this.load.atlas("atlas", "assets/atlas/atlas.png", "assets/atlas/atlas.json");

    }

    create() {
        const interiorsAdosHouse68 = this.make.tilemap({ key: "interiorsAdosHouse68" });

        const furniture_carpet_carpets_2 = interiorsAdosHouse68.addTilesetImage("furniture_carpet_carpets_2", "furniture_carpet_carpets_2");
        const building_wall_int_wall_pale = interiorsAdosHouse68.addTilesetImage("building_wall_int_wall_pale", "building_wall_int_wall_pale");
        const building_wall_int_wall_purple = interiorsAdosHouse68.addTilesetImage("building_wall_int_wall_purple", "building_wall_int_wall_purple");
        const building_entrance_pale_red_ns = interiorsAdosHouse68.addTilesetImage("building_entrance_pale_red_ns", "building_entrance_pale_red_ns");
        const furniture_shelve_bright_bookshelf_and_cupboard = interiorsAdosHouse68.addTilesetImage("furniture_shelve_bright_bookshelf_and_cupboard", "furniture_shelve_bright_bookshelf_and_cupboard");
        const furniture_chair_wooden_pale = interiorsAdosHouse68.addTilesetImage("furniture_chair_wooden_pale", "furniture_chair_wooden_pale");
        const plant_indoor_flowering_plant = interiorsAdosHouse68.addTilesetImage("plant_indoor_flowering_plant", "plant_indoor_flowering_plant");
        const furniture_chair_stool = interiorsAdosHouse68.addTilesetImage("furniture_chair_stool", "furniture_chair_stool");
        const furniture_table_wooden_pale = interiorsAdosHouse68.addTilesetImage("furniture_table_wooden_pale", "furniture_table_wooden_pale");
        const furniture_light_small_lamp = interiorsAdosHouse68.addTilesetImage("furniture_light_small_lamp", "furniture_light_small_lamp");
        const logic_collision = interiorsAdosHouse68.addTilesetImage("logic_collision", "logic_collision");
        const furniture_carpet_blue = interiorsAdosHouse68.addTilesetImage("furniture_carpet_blue", "furniture_carpet_blue");
        const item_chest_small = interiorsAdosHouse68.addTilesetImage("item_chest_small", "item_chest_small");
        const item_drink_red_wine = interiorsAdosHouse68.addTilesetImage("item_drink_red_wine", "item_drink_red_wine");
        const item_food_fruit_basket = interiorsAdosHouse68.addTilesetImage("item_food_fruit_basket", "item_food_fruit_basket");
        const furniture_table_long_front_on = interiorsAdosHouse68.addTilesetImage("furniture_table_long_front_on", "furniture_table_long_front_on");
        const item_documents_book = interiorsAdosHouse68.addTilesetImage("item_documents_book", "item_documents_book");
        const plant_indoor_flower_vase = interiorsAdosHouse68.addTilesetImage("plant_indoor_flower_vase", "plant_indoor_flower_vase");
        const furniture_shelve_pale_book_bottle_shelf = interiorsAdosHouse68.addTilesetImage("furniture_shelve_pale_book_bottle_shelf", "furniture_shelve_pale_book_bottle_shelf");
        const furniture_kitchen_pie_safe = interiorsAdosHouse68.addTilesetImage("furniture_kitchen_pie_safe", "furniture_kitchen_pie_safe");
        const furniture_kitchen_stove = interiorsAdosHouse68.addTilesetImage("furniture_kitchen_stove", "furniture_kitchen_stove");
        const logic_item_sheepfood = interiorsAdosHouse68.addTilesetImage("logic_item_sheepfood", "logic_item_sheepfood");
        const furniture_chair_sofa_red = interiorsAdosHouse68.addTilesetImage("furniture_chair_sofa_red", "furniture_chair_sofa_red");
        const plant_bush_hosta = interiorsAdosHouse68.addTilesetImage("plant_bush_hosta", "plant_bush_hosta");
        const furniture_chair_sofa = interiorsAdosHouse68.addTilesetImage("furniture_chair_sofa", "furniture_chair_sofa");
        const plant_indoor_pot_plant_1 = interiorsAdosHouse68.addTilesetImage("plant_indoor_pot_plant_1", "plant_indoor_pot_plant_1");
        const furniture_kitchen_warmer = interiorsAdosHouse68.addTilesetImage("furniture_kitchen_warmer", "furniture_kitchen_warmer");
        const plant_indoor_flower_baskets = interiorsAdosHouse68.addTilesetImage("plant_indoor_flower_baskets", "plant_indoor_flower_baskets");
        const furniture_carpet_carpets = interiorsAdosHouse68.addTilesetImage("furniture_carpet_carpets", "furniture_carpet_carpets");
        const item_brush = interiorsAdosHouse68.addTilesetImage("item_brush", "item_brush");
        const furniture_shelve_bright_bookshelf = interiorsAdosHouse68.addTilesetImage("furniture_shelve_bright_bookshelf", "furniture_shelve_bright_bookshelf");
        const furniture_table_wooden_rectangular = interiorsAdosHouse68.addTilesetImage("furniture_table_wooden_rectangular", "furniture_table_wooden_rectangular");
        const item_food_rustic_meals = interiorsAdosHouse68.addTilesetImage("item_food_rustic_meals", "item_food_rustic_meals");
        const item_food_meals_2 = interiorsAdosHouse68.addTilesetImage("item_food_meals_2", "item_food_meals_2");
        const furniture_chair_sofa_chair_blue = interiorsAdosHouse68.addTilesetImage("furniture_chair_sofa_chair_blue", "furniture_chair_sofa_chair_blue");
        const item_food_meals_3 = interiorsAdosHouse68.addTilesetImage("item_food_meals_3", "item_food_meals_3");
        const ground_ground = interiorsAdosHouse68.addTilesetImage("ground_ground", "ground_ground");
        const building_wall_bricked_edges = interiorsAdosHouse68.addTilesetImage("building_wall_bricked_edges", "building_wall_bricked_edges");
        const logic_item_vegetable = interiorsAdosHouse68.addTilesetImage("logic_item_vegetable", "logic_item_vegetable");
        const furniture_bed_double_blue = interiorsAdosHouse68.addTilesetImage("furniture_bed_double_blue", "furniture_bed_double_blue");


        const allTileset = [furniture_carpet_carpets_2, building_wall_int_wall_pale, building_wall_int_wall_purple, building_entrance_pale_red_ns, plant_indoor_flower_vase, furniture_shelve_bright_bookshelf_and_cupboard, furniture_chair_wooden_pale, plant_indoor_flowering_plant, furniture_chair_stool, furniture_table_wooden_pale, furniture_light_small_lamp, logic_collision, furniture_carpet_blue, item_chest_small, item_drink_red_wine, item_food_fruit_basket, furniture_table_long_front_on, item_documents_book, plant_indoor_flower_vase, furniture_shelve_pale_book_bottle_shelf, furniture_kitchen_pie_safe, furniture_kitchen_stove, logic_item_sheepfood, furniture_chair_sofa_red, plant_bush_hosta, furniture_chair_sofa, plant_indoor_pot_plant_1, furniture_kitchen_warmer, plant_indoor_flower_baskets, furniture_carpet_carpets, item_brush, furniture_shelve_bright_bookshelf, furniture_table_wooden_rectangular, item_food_rustic_meals, item_food_meals_2, furniture_chair_sofa_chair_blue, item_food_meals_3, ground_ground, building_wall_bricked_edges, logic_item_vegetable, furniture_bed_double_blue];


        this.collisionLayer = interiorsAdosHouse68.createLayer("collision", allTileset, 0, 0);
        this.floorLayer = interiorsAdosHouse68.createLayer("0_floor", allTileset, 0, 0);
        this.terrainLayer = interiorsAdosHouse68.createLayer("1_terrain", allTileset, 0, 0);
        this.objectLayer = interiorsAdosHouse68.createLayer("2_object", allTileset, 0, 0);
        const roofLayer = interiorsAdosHouse68.createLayer("3_roof", allTileset, 0, 0);
        this.roofaddLayer = interiorsAdosHouse68.createLayer("4_roof_add", allTileset, 0, 0);
        this.objectsLayer = interiorsAdosHouse68.createLayer("objects", allTileset, 0, 0);

        this.collisionLayer.setCollisionByProperty({ collides: true });

        roofLayer.setDepth(10);

        const spawnPoint = interiorsAdosHouse68.findObject("Objects", obj => obj.name === "Spawn Point");

        this.player = new Player(this, this.px, this.py);

        this.physics.add.collider(this.player.sprite, this.collisionLayer);

        const camera = this.cameras.main;
        camera.startFollow(this.player.sprite);
        camera.setBounds(0, 0, interiorsAdosHouse68.widthInPixels, interiorsAdosHouse68.heightInPixels);

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
            if(this.checkDoor(this.player.sprite.x, this.player.sprite.y, 432, 672)) {
               console.log("ados");
               this.scene.start("Level0AdosCity", {px: 592, py: 1960});                   
           }
        }

        if(keyD.isDown){
            console.log( this.player.sprite.x + " " + this.player.sprite.y);
        }

        if(keyM.isDown){
            console.log( "Mission1");
            this.scene.start("Mission1", {previousScene: "InteriorsAdosHouse68"});
        }
        
        if(keyA.isDown){
            console.log("Aide");
            this.scene.start('Help', {previousScene: "InteriorsAdosHouse68"});
        }  

        if(keyS.isDown){
            console.log("Option: Son");
            this.scene.start('Options', {previousScene: "InteriorsAdosHouse68"});
        } 

    }
}
