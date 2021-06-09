<?php

/*


$ cat house_70.json | grep tileset > tile.txt
$ php tilesetGenerator.php > code.txt

*/ 


// Script 1

$handle = fopen("tile.txt", "r");
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        $filenameTile = preg_match("/tileset(.*)png/", $line, $matches);
        //echo $line;
        
        $filename = $matches[0];
        $filename = str_replace("\\", "", $filename);
        //echo $filename . "\n";
        
        $name = str_replace("/", "_", $filename);
        $name = substr($name, 8, -4);
        //echo $name . "\n";
        echo "   this.load.image(\"$name\", \"assets/stendhal/tiled/$filename\");\n";
    }

    fclose($handle);
} else {
     echo "error opening the file.\n";
} 


// Script 2

$handle = fopen("tile.txt", "r");

$const = "";
$allName = "";

if ($handle) {
    while (($line = fgets($handle)) !== false) {

        $filenameTile = preg_match("/tileset(.*)png/", $line, $matches);
        //echo $line;
        
        $filename = $matches[0];
        $filename = str_replace("\\", "", $filename);
        //echo $filename . "\n";
        
        $name = str_replace("/", "_", $filename);
        $name = substr($name, 8, -4);

        $allName .= $name . ", "; 

        $const .= "    const $name = map.addTilesetImage(\"$name\", \"$name\");\n";
    }

    echo $const . "\n";

    fclose($handle);
} else {
     echo "error opening the file.\n";
} 

echo "   const allTileset = [$allName];\n";

?>
