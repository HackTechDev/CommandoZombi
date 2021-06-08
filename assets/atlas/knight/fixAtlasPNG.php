<?php

$width = 50;
$height = 792;

$source_image = imagecreatefrompng("atlas_orig.png");

$destination_image = imagecreatetruecolor($width, $height);

imagesavealpha($destination_image, true);
$transparent_background = imagecolorallocatealpha($destination_image, 0, 0, 0, 127);
imagefill($destination_image, 0, 0, $transparent_background);

imagecopy($destination_image, $source_image, 0, 0, 0, 0, $width, $height);

$width = 48;
$height = 64;

$posx = 1;
$posy= 67;
$source_image = imagecreatefrompng("misa-back-walk.001.png");
imagecopy($destination_image, $source_image, $posx, $posy, 0, 0, $width, $height);

$posx = 1;
$posy= 133;
$source_image = imagecreatefrompng("misa-back-walk.002.png");
imagecopy($destination_image, $source_image, $posx, $posy, 0, 0, $width, $height);


imagepng($destination_image, "atlas.png");



imagedestroy($destination_image);
?>
