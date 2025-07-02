//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // First reset all colors
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = "transparent";
  }

  // Then apply new color to selected block
  const targetBlock = document.getElementById(blockId);
  if (targetBlock) {
    targetBlock.style.backgroundColor = color;
  }
});

document.getElementById("Reset").addEventListener("click", function () {
  // Reset all blocks to transparent
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = "transparent";
  }
});
