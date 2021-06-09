// Our custom tile mapping with:
// - Single index for putTileAt
// - Array of weights for weightedRandomize
// - Array or 2D array for putTilesAt
const TILE_MAPPING = {
  BLANK: 20,
  WALL: {
    TOP_LEFT: 3,
    TOP_RIGHT: 4,
    BOTTOM_RIGHT: 23,
    BOTTOM_LEFT: 22,
    TOP: 39,
    LEFT: 21,
    RIGHT: 19,
    BOTTOM: 1
  },
  FLOOR: 6,
  POT: [{ index: 13, weight: 1 }, { index: 32, weight: 1 }, { index: 51, weight: 1 }],
  DOOR: {
    TOP: [40, 6, 38],
    // prettier-ignore
    LEFT: [
      [40], 
      [6], 
      [2]
    ],
    BOTTOM: [2, 6, 0],
    // prettier-ignore
    RIGHT: [
      [38], 
      [6], 
      [0]
    ]
  },
  CHEST: 166,
  STAIRS: 81,
  // prettier-ignore
  TOWER: [
    [186],
    [205]
  ]
};

export default TILE_MAPPING;
