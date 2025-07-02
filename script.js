document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all blocks
  const items = document.getElementsByClassName("grid-item");
  for (let item of items) {
    item.style.backgroundColor = "transparent";
  }

  // Apply new color only if valid blockId (1 to 9)
  const targetBlock = document.getElementById(blockId);
  if (targetBlock && color) {
    targetBlock.style.backgroundColor = color;
  }
});

document.getElementById("Reset").addEventListener("click", function () {
  const items = document.getElementsByClassName("grid-item");
  for (let item of items) {
    item.style.backgroundColor = "transparent";
  }
});
