const blocks = document.querySelector(".blocks");

getProduct();

function getProduct() {
  let newProduct = JSON.parse(localStorage.getItem("menu")) || [];
  newProduct.forEach((el) => {
    let block = document.createElement("div");
    block.setAttribute("class", "block");

    let img = document.createElement("img");
    img.src = el.img;
    block.append(img);

    let blockText = document.createElement("div");
    blockText.setAttribute("class", "block-text");

    let TextBlock = document.createElement("div");
    TextBlock.setAttribute("class", "text-block");

    let h3 = document.createElement("h3");
    h3.innerHTML = `${el.name}`;
    TextBlock.append(h3);

    let h4 = document.createElement("h4");
    h4.innerText = `${el.price} $`;
    TextBlock.append(h4);

    let btn = document.createElement("button");
    btn.innerText = "to order";
    blockText.append(TextBlock, btn);
    block.append(blockText);
    blocks.append(block);
  });
}
