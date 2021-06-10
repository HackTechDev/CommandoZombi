
#### 1/ Génération des images individuels. 

$ php ./createSpriteFromTemplate.php 


#### 2/ Génération de l'atlas.

https://www.codeandweb.com/texturepacker

- Lancement : 

$ TexturePackerGUI


- Configuration :

```
- Settings
  - Data
    - Data Format : Phaser (JSONHash)
    - Data file : atlas.json
    - Trim sprite names : V

- Layout
  - Algorithm : Basic
  - Sort by : Name
  - Sort order : Ascending

- Sprites
    - Trim mode : None
```


- Génération de l'image : atlas_orig.png


#### 3/ Fix de l'atlas.

Remplace les images défecteuses de l'image atlas_orig.png par les bonnes images individuelles.

Les positions des images individuelles se trouvent dans la fichier atlas.json

$ php ./fixAtlasPNG.php

Génére le fichier : atlas.png
