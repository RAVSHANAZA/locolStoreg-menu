const img = document.querySelector(".img");
const name = document.querySelector(".name");
const price = document.querySelector(".price");
const btnCreate = document.querySelector("button");

btnCreate.addEventListener("click", () => product());

function product() {
  let obj = {
    img: img.value,
    name: name.value,
    price: price.value,
  };
  let product = JSON.parse(localStorage.getItem("menu")) || [];
  product.push(obj);
  localStorage.setItem("menu", JSON.stringify(product));
  //   getProduct();
}
