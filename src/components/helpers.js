
// How many pixels are in a single grid unit?
const gridMultiple = 4;
const gridOffset = 1;

// Convert pixels to larger grid units
export function convertToGrid (y, x) {

  // Hm, this function doesn't work I think because it's dependent on the pixel density of the monitor :|
  return `${Math.floor(y / gridMultiple) + gridOffset}/${Math.floor(x / gridMultiple) + gridOffset}`;
  
  // Return `${(y / gridMultiple).toFixed(0)}/${(x / gridMultiple).toFixed(0)}`;

}
