<?php 

// Split image
$width = 48;
$height = 64;
$player = "knight";

$source_image = imagecreatefrompng($player . ".png");

for ($i = 0; $i < 4; $i++) {
    for($j = 0; $j < 3; $j++) {
        $destination_image = imagecreatetruecolor($width, $height);
        imagesavealpha($destination_image, true);
        $transparent_background = imagecolorallocatealpha($destination_image, 0, 0, 0, 127);
        imagefill($destination_image, 0, 0, $transparent_background);

        imagecopy($destination_image, $source_image, 0, 0, $j * 48, $i * 64, $width, $height);

        if($i == 0) $position = "back";
        if($i == 1) $position = "right";
        if($i == 2) $position = "front";
        if($i == 3) $position = "left";

        imagepng($destination_image, "$player-$position-walk.00$j.png");

        if($j == 1 ) {
            imagepng($destination_image, "$player-$position-walk.003.png");
            imagepng($destination_image, "$player-$position.png");
        }

        imagedestroy($destination_image);
    }
}

imagedestroy($source_image);

?>
