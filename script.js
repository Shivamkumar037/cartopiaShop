var login_first=true;
document.getElementById("login").addEventListener("click",()=>{
            if(login_first){
            let form_page=document.getElementsByClassName("login-form")[0];
            form_page.classList.toggle("open");
            let my_form=document.getElementById("my-form");
            my_form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let formData=new FormData(my_form);
    let user_photo=document.getElementById("profile-photo");
    user_photo.innerHTML= `<h1>${formData.get("name")[0]}</h1>`;
    let user_name=document.getElementById("user_name");
    user_name.textContent= formData.get("name").split(" ")[0];
    let login=document.getElementById("login");
    login.innerHTML= `<h1>${formData.get("name")[0]}</h1>`;
    login.classList.toggle("open5");
    login_first=false;
    form_page.classList.remove("open");
});
            }else{

                let form_page=document.getElementById("logo-page");
                form_page.classList.toggle("open2");
            }
        });
        // main-item-box">
        //     <div class="item-box ">
        //         <div class="photo-of-product"></div>
        //         <h1 class="product-name flex">product name</h1>
        //     </div>
        let glossary = [
  "Variable", "Function", "Array", "Object", "Loop", "Condition", "Event", "Callback", "Promise",
  "Async/Await", "Class", "Module", "Prototype", "Scope", "Closures", "Arrow Function", "DOM",
  "BOM", "JSON", "Local Storage", "Session Storage", "API", "Fetch", "Regex", "String Methods",
  "Number Methods", "Date Methods", "Math Methods", "Error Handling", "Hoisting", "Strict Mode",
  "ES6", "Event Listener", "SetInterval", "SetTimeout", "WebSocket", "XHR", "Polyfill", "Transpile",
  "Debugging", "Webpack", "Node.js", "Express.js", "MongoDB", "React.js", "Vue.js", "Angular", "Redux",
  "TypeScript", "Jest", "Mocha"
];
const imageLinks = ["https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=200", // Pen
  "https://images.unsplash.com/photo-1545062080-a71640f7c82b?w=200", // Notebook
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=200", // Mobile
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=200", // Watch
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200", // Headphones
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200", // Sunglasses
  "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=200", // Shirt
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=200", // Shoes
  "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=200", // Eyeglasses
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200", // Camera
  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=200", // Bicycle
  "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=200", // Laptop
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200", // Perfume
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200", // Bag
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200", // Earphones
  "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=200", // Cup
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200", // Chair
  "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200", // Keyboard
  "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200", // Wallet
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200", // Backpack
  "https://images.unsplash.com/photo-1567538096439-8a5c6bdf5b1a?w=200", // Table
  "https://images.unsplash.com/photo-1527814050087-3793815479db?w=200", // Mouse
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200", // Book
  "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200", // Smartphone
  "https://images.unsplash.com/photo-1558379850-8231031a7e6d?w=200", // Speaker
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200", // Notebook (different from first)
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200", // Charger
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200", // Deodorant
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200", // Smartwatch
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200", // Sunglass
  "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=200", // T-shirt
  "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=200", // Sneakers
  "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=200", // DSLR
  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=200", // Cycle
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200", // Macbook
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=200", // Handbag
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200", // Earbuds
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200", // Mug
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=200", // Sofa
  "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=200", // Gaming Keyboard
  "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200", // Leather Wallet
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200", // School Bag
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200", // Wooden Table
  "https://images.unsplash.com/photo-1527814050087-3793815479db?w=200", // Wireless Mouse
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200", // Diary
  "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200", // iPhone
  "https://images.unsplash.com/photo-1558379850-8231031a7e6d?w=200", // Bluetooth Speaker
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200", // Journal
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200"  // Power Bank ];
];
  const imageNames = [
    "Pen",
    "Notebook",
    "Mobile",
    "Watch",
    "Headphones",
    "Sunglasses",
    "Shirt",
    "Shoes",
    "Eyeglasses",
    "Camera",
    "Bicycle",
    "Laptop",
    "Perfume",
    "Bag",
    "Earphones",
    "Cup",
    "Chair",
    "Keyboard",
    "Wallet",
    "Backpack",
    "Table",
    "Mouse",
    "Book",
    "Smartphone",
    "Speaker",
    "Notebook",
    "Charger",
    "Deodorant",
    "Smartwatch",
    "Sunglass",
    "T-shirt",
    "Sneakers",
    "DSLR",
    "Cycle",
    "Macbook",
    "Handbag",
    "Earbuds",
    "Mug",
    "Sofa",
    "Gaming Keyboard",
    "Leather Wallet",
    "School Bag",
    "Wooden Table",
    "Wireless Mouse",
    "Diary",
    "iPhone",
    "Bluetooth Speaker",
    "Journal",
    "Power Bank"
  ];
  const prices = [
    15,     // Pen
    80,     // Notebook
    15000,  // Mobile
    5000,   // Watch
    2000,   // Headphones
    1500,   // Sunglasses
    500,    // Shirt
    2500,   
    3000,
    45000,
    8000,   // Bicycle
    60000,  // Laptop
    800,    // Perfume
    1200,   // Bag
    1500,   // Earphones
    100,    // Cup
    3500,   // Chair
    1200,   // Keyboard
    500,    // Wallet
    1500,   // Backpack
    8000,   // Table
    600,    // Mouse
    200,    // Book
    80000,  // Smartphone
    3500,   // Speaker
    100,    // Notebook (duplicate)
    1000,   // Charger
    200,    // Deodorant
    15000,  // Smartwatch
    1800,   // Sunglass
    400,    // T-shirt
    3500,   // Sneakers
    75000,  // DSLR
    10000,  // Cycle
    120000, // Macbook
    2500,   // Handbag
    3000,   // Earbuds
    150,    // Mug
    25000,  // Sofa
    5000,   // Gaming Keyboard
    800,    // Leather Wallet
    800,    // School Bag
    12000,  // Wooden Table
    2500,   // Wireless Mouse
    150,    // Diary
    79000,  // iPhone
    4500,   // Bluetooth Speaker
    120,    // Journal
    2000    // Power Bank
];
const features = [
    "Ball Pen (Blue Ink) - Smooth Writing, Pack of 5, Plastic Body",  // Pen
    "200 Pages Notebook - A4 Size, Ruled, Hard Cover, Spiral Binding",  // Notebook
    "Samsung Galaxy M34 - 6GB RAM, 128GB Storage, 6000mAh Battery",  // Mobile
    "Noise ColorFit Pro - 1.8\" Display, Heart Rate Monitor, 10-Day Battery",  // Watch
    "Boat Rockerz 450 - 40mm Drivers, 15H Playtime, Wireless Bluetooth",  // Headphones
    "Vincent Chase Polarized - UV Protection, Rectangle Frame, Matte Black",  // Sunglasses
    "Van Heusen Cotton Shirt - Slim Fit, Full Sleeves, Machine Wash",  // Shirt
    "Nike Revolution 6 - Cushioned Sole, Breathable Mesh, Size 10",  // Shoes
    "Lenskart Air Classic - Blue Light Blocking, Rectangle Frame, Lightweight",  // Eyeglasses
    "Canon EOS 1500D - 24MP, 3\" LCD, Full HD Recording, Wi-Fi",  // Camera
    "Hero Sprint Next - 21 Speed, Steel Frame, Dual Disc Brakes",  // Bicycle
    "HP Pavilion - Ryzen 5, 8GB RAM, 512GB SSD, 15.6\" FHD",  // Laptop
    "Fogg Wood Extreme - 150ml, Long Lasting, Eau de Parfum",  // Perfume
    "American Tourister - 30L, Waterproof, Laptop Compartment",  // Bag
    "Realme Buds Air 3 - ANC, 30H Playtime, Bluetooth 5.2",  // Earphones
    "Milton Thermosteel - 500ml, Leakproof, Hot/Cold Retention",  // Cup
    "Green Soul Jupiter - Ergonomic, 3D Armrest, 250kg Capacity",  // Chair
    "Logitech K380 - Wireless, Multi-Device, Silent Keys",  // Keyboard
    "Zara Leather Wallet - 8 Card Slots, RFID Blocking, Genuine Leather",  // Wallet
    "Wildcraft 45L - Padded Straps, Rain Cover, Laptop Sleeve",  // Backpack
    "Urban Ladder - 4 Seater, Solid Wood, Anti-Scratch Finish",  // Table
    "HP X1000 - Wired, 1200DPI, Plug & Play, 3 Buttons",  // Mouse
    "Atomic Habits by James Clear - Paperback, 320 Pages",  // Book
    "iPhone 15 - A16 Bionic, 128GB, Dynamic Island, 48MP Camera",  // Smartphone
    "JBL Flip 5 - 20W Output, IPX7 Waterproof, 12H Battery",  // Speaker
    "Classmate Spiral Notebook - 120 Pages, A5 Size, Soft Cover",  // Notebook (duplicate)
    "Apple 20W Adapter - USB-C, Fast Charging, Compatible with iPhone/iPad",  // Charger
    "Nivea Fresh - 150ml, Roll-On, 48H Protection",  // Deodorant
    "Fire-Boltt Phoenix - 1.3\" Display, Blood Oxygen Monitor, 7-Day Battery",  // Smartwatch
    "Fastrack Wayfarer - Polarized, UV400, Unisex Design",  // Sunglass
    "Puma Cotton T-Shirt - Round Neck, Regular Fit, Machine Wash",  // T-shirt
    "Adidas Runfalcon - Cloudfoam Midsole, Breathable Upper, Size 9",  // Sneakers
    "Nikon D3500 - 24MP, 1080p Video, 11-Point AF, Kit Lens",  // DSLR
    "Hero Sprint - Single Speed, Steel Frame, 26\" Wheels",  // Cycle
    "MacBook Air M1 - 8GB RAM, 256GB SSD, 13.3\" Retina",  // Macbook
    "Hidesign Handbag - Genuine Leather, Gold Zipper, Shoulder Strap",  // Handbag
    "OnePlus Buds Z2 - ANC, 40H Playtime, Dolby Atmos",  // Earbuds
    "Borosil Tea Mug - 350ml, Ceramic, Microwave Safe",  // Mug
    "HomeTown L-Shaped Sofa - Fabric, 3-Seater, Wooden Legs",  // Sofa
    "Cosmic Byte GK-18 - RGB Backlit, Mechanical Switches, Wired",  // Gaming Keyboard
    "Caprese Leather Wallet - 6 Card Slots, Coin Pocket, Magnetic Clip",  // Leather Wallet
    "Skybags 30L - Padded Back, Reflective Stripes, School/College Use",  // School Bag
    "Durian Wood Table - 6 Seater, Sheesham Wood, Anti-Termite",  // Wooden Table
    "Logitech M221 - Wireless, 1000DPI, Silent Click, 18M Battery",  // Wireless Mouse
    "Parker Diary - 200 Pages, Hardbound, Lock & Key",  // Diary
    "iPhone 14 - 128GB, A15 Bionic, 12MP Dual Camera, Ceramic Shield",  // iPhone
    "Bose SoundLink - 360° Sound, 12H Battery, Voice Assistant",  // Bluetooth Speaker
    "PAPERIK Journal - 120GSM Paper, Dotted, Elastic Closure",  // Journal
    "Mi Power Bank 3i - 20000mAh, 18W Fast Charging, Dual Output"  // Power Bank
];
  let i=0;
const main_item=document.getElementsByClassName("main-item-box")[0];
imageNames.forEach((element)=>{
   let new_div=document.createElement("div");
   new_div.setAttribute("class","item-box");
   let photo_of_product=document.createElement("div");
   photo_of_product.setAttribute("class","photo-of-product");
   photo_of_product.setAttribute("style",`background-image: url('${imageLinks[i]}');`)
let title=document.createElement("h1");
title.setAttribute("class","product-name");
title.textContent=element;
new_div.appendChild(photo_of_product);
new_div.appendChild(title);
main_item.appendChild(new_div);
i+=1;
});

            let j=0;
let scrool_items=document.getElementsByClassName("scrool-items")[0];
imageNames.forEach((element)=>{
   let new_div=document.createElement("div");
   new_div.setAttribute("class","item-box2");
   let photo_of_product=document.createElement("div");
   photo_of_product.setAttribute("class","photo-of-product2");
   photo_of_product.setAttribute("style",`background-image: url('${imageLinks[j]}');`);
let title=document.createElement("h1");
title.setAttribute("class","product-name2");
title.textContent=element;
new_div.appendChild(photo_of_product);
new_div.appendChild(title);
scrool_items.appendChild(new_div);
j+=1;
});
let items = document.getElementsByClassName("item-box");
Array.from(items).forEach((item,i) => {
    item.addEventListener("click", () => {
localStorage.setItem("price",prices[i]);
localStorage.setItem("product_name",imageNames[i]);
localStorage.setItem("details",features[i]);
localStorage.setItem("background-image",imageLinks[i]);
localStorage.setItem("location",item);


        window.location.href = "details.html";
    });
});

document.getElementById("cart").addEventListener("click",()=>{
        let form_page=document.getElementsByClassName("orders-cart")[0];
        form_page.classList.toggle("open4");

});
window.onload=()=>{
    let data=document.getElementsByClassName("orders-cart")[0];
    data.innerHTML+=`<p>${localStorage.getItem("product_item")}</p>`;
    // let data=document.getElementsByClassName("orders-cart")[0];
    // let atag=document.createElement("a");
    // atag.setAttribute("href",`details.html`);
    // atag.textContent+=localStorage.getItem("product_item");
    // data.appendChild(ptag);

}
