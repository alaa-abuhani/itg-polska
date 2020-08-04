var slickSlider = () => {
    $(document).ready(function () {

        $('.wrapper-item-slide ').slick({
            infinite: true,
            slidesToShow: 4.5,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
            rtl: true,
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3.5,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        settings: "unslick"
                    }
                }

            ]

        });
    });
}
//select itemcontainer
const container = document.querySelector('.wrapper-item-slide');
// ajax request
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const products = JSON.parse(this.responseText);

            for (let i = 0; i < products.items.length; i++) {

                container.appendChild(creatProduct(products.items[i]));
            }

            slickSlider();
        }
    };

    xhttp.open("GET", "https://raw.githubusercontent.com/alaa-abuhani/project-version/master/dist/pro.json", true);
    xhttp.send();
}
loadDoc();


//creat product
function creatProduct(obj) {

    //creat item
    const product = document.createElement("div");
    product.className = "card";
    // card onmouseover
    const clildproductAtt = document.createAttribute("onmouseover");
    clildproductAtt.value = "onover(this)";
    product.setAttributeNode(clildproductAtt);

    //card onmouseleave
    const clildproductAtt2 = document.createAttribute("onmouseleave");
    clildproductAtt2.value = "onleave(this)";
    product.setAttributeNode(clildproductAtt2);
    // append cart
    const cart = document.createElement("div");
    cart.className = "cart";
    cart.className = "cart cart-hover";
    const assetCart = document.createElement("div");
    assetCart.className = "asset-cart";

    //append mini cart img
    const clildCart = document.createElement("img");
    const clildCartAtt = document.createAttribute("src");
    clildCartAtt.value = obj["product-cart"];
    clildCart.setAttributeNode(clildCartAtt);
    const clildCartAtt2 = document.createAttribute("alt");
    clildCartAtt2.value = ("Card cart");
    clildCart.setAttributeNode(clildCartAtt2);
    clildCart.className = "img-hover";
    assetCart.appendChild(clildCart);
    cart.appendChild(assetCart);
    product.appendChild(cart);


    const containerImg = document.createElement("div");
    containerImg.className = "container-img";
    //append img-card
    const child1 = document.createElement("img");
    const chdAtt1 = document.createAttribute("src");
    chdAtt1.value = obj["product-img"];
    child1.setAttributeNode(chdAtt1);
    const chdAtt2 = document.createAttribute("alt");
    chdAtt2.value = ("Card image cap");
    child1.setAttributeNode(chdAtt2);
    child1.className = "img";
    containerImg.appendChild(child1);
    product.appendChild(containerImg);

    //append card body
    const child2 = document.createElement("div");
    child2.className = "card-body";
    product.appendChild(child2);
    //append product name
    const first = document.createElement("h5");
    const firstAtt = document.createTextNode(obj["product-name"]);
    first.appendChild(firstAtt);
    child2.appendChild(first);
    //append separator
    const sept = document.createElement("div");
    sept.className = "separator";
    child2.appendChild(sept);
    //append product brand
    const two = document.createElement("p");
    const twoAtt = document.createTextNode(obj["product-brand"]);
    two.appendChild(twoAtt);
    child2.appendChild(two);
    //append product line
    const three = document.createElement("h6");
    const threeAtt = document.createTextNode(obj["product-line"]);
    three.appendChild(threeAtt);
    child2.appendChild(three);

    return product;
}
//open menu mobile
function openNav() {
    document.getElementById('myNav').style.height = '100%'
}
//close menu mobile
function closeNav() {
    document.getElementById('myNav').style.height = '0%'
}

//hover mini cart slider
function onover(x) {
    x.getElementsByClassName("cart-hover")[0].style.backgroundColor = '#000';
    x.getElementsByClassName("img-hover")[0].src = "../../imag-pro/cart-copy/cart-copy-2.png";
}

function onleave(x) {
    x.getElementsByClassName("cart-hover")[0].style.backgroundColor = '#fff';
    x.getElementsByClassName("img-hover")[0].src = "../imag-pro/slide-image/cart/cart-copy-5.png";
}
//# sourceMappingURL=main.js.map
