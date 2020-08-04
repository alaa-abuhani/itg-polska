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