<?php

// Script 1

$handle = fopen("tile.txt", "r");
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        $filenameTile = preg_match("/tileset(.*)png/", $line, $matches);
        //echo $line;
        $filename = $matches[0];
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
/*
$allName = "";

$handle = fopen("tile.txt", "r");
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        $filenameTile = preg_match("/tileset(.*)png/", $line, $matches);
        //echo $line;
        $filename = $matches[0];
        $name = str_replace("/", "_", $filename);
        $name = substr($name, 8, -4);
        $allName .= $name . ", "; 
        //echo $name . "\n";
        echo "const $name = map.addTilesetImage(\"$name\", \"$name\");\n";
    }

    fclose($handle);
} else {
     echo "error opening the file.\n";
} 

echo "const allLayers = [$allName];\n";
*/
?>
