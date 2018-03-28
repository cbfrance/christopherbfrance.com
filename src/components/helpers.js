
// How many pixels are in a single grid unit?
// Todo: Infer this from the grid settings
const gridMultiple = 4;
const gridOffset = 1;

// Convert pixels to larger grid units
export function convertToGrid (y, x) {

  return `${Math.floor(y / gridMultiple) + gridOffset}/${Math.floor(x / gridMultiple) + gridOffset}`;

}

export function copyToClipboard (str) {

  const el = document.createElement('textarea');

  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  console.log(`Copied ${str} to clipboard`);

}
