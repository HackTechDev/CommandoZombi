<?php

$width = 50;
$height = 792;

$source_image = imagecreatefrompng("atlas-orig.png");

$destination_image = imagecreatetruecolor($width, $height);

imagesavealpha($destination_image, true);
$transparent_background = imagecolorallocatealpha($destination_image, 0, 0, 0, 127);
imagefill($destination_image, 0, 0, $transparent_background);

imagecopy($destination_image, $source_image, 0, 0, 0, 0, $width, $height);

$width = 48;
$height = 64;

$posx = 1;
$posy= 199;
$source_image = imagecreatefrompng("zombi-front-walk.000.png");
imagecopy($destination_image, $source_image, $posx, $posy, 0, 0, $width, $height);

$posx = 1;
$posy= 463;
$source_image = imagecreatefrompng("zombi-left-walk.001.png");
imagecopy($destination_image, $source_image, $posx, $posy, 0, 0, $width, $height);


imagepng($destination_image, "atlas.png");



imagedestroy($destination_image);
?>
