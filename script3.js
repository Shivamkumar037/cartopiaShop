 window.onload=()=>{


    let img_box = document.createElement("div");
    img_box.setAttribute("class", "img-box");
img_box.setAttribute("style",`background-image: url('${`${localStorage.getItem("background-image")}`}');`);
    let price_product = document.createElement("h5");
    price_product.setAttribute("class", "price");
    price_product.textContent = localStorage.getItem("price")+"Rs";

    let details_box = document.createElement("div");
    details_box.setAttribute("class", "details-box");

    let title_product = document.createElement("h1");
    title_product.setAttribute("class", "title-name");
    title_product.textContent = localStorage.getItem("product_name");

    let details_product = document.createElement("p");
    details_product.setAttribute("class", "details");
    details_product.textContent = localStorage.getItem("details");

    details_box.appendChild(title_product);
    details_box.appendChild(details_product);

    let order_btn = document.createElement("button");
    order_btn.setAttribute("id","btn");
    order_btn.textContent = "Order Now";

    let parent_details_box = document.getElementsByClassName("box-of-details")[0];
    if (parent_details_box) {
      parent_details_box.appendChild(img_box);
      parent_details_box.appendChild(price_product);
      parent_details_box.appendChild(details_box);
      parent_details_box.appendChild(order_btn);
    }
let btn=document.getElementById("btn");
btn.addEventListener("click", () => {
   localStorage.setItem("product_item",localStorage.getItem("product_name"));
    alert("product Added");
});


    }