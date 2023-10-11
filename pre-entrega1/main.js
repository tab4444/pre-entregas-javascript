function shop_proceeding() {
    const user_name = prompt("Por favor, ingrese su nombre:");
    user_welcoming(user_name);

    const product = get_product();
    show_product_info(product);

    const confirmation = confirm("¿Desea comprar este artículo?");
    if (confirmation) {
        let adress;
        do{
            adress = prompt("Ingrese su dirección para poder realizar el envío del pedido:");
        }while(adress == "");

        alert(`Su articulo sera enviado a: ${adress}`);
        alert("Muchas gracias por su compra, vuelva pronto!");
    } else {
        alert("Muchas gracias por su visita.");
    }
}

function user_welcoming(user_name) {
    alert(`Bienvenido a nuestro ecommerce ${user_name}.`);
}
function get_product() {
    let product;
    do {
        product = prompt("¿Qué desea comprar?\nElija la opción 1 si es una barra olimpica, opción 2 si es una mancuerna de 10kg");
    } while (product !== '1' && product !== '2');

    return product;
}

function show_product_info(product) {
    if (product === '1') {
        alert("Usted eligió la barra olimpica. Su precio es de $78.000.");
    } else if (product === '2') {
        alert("Usted eligió la mancuerna. Su precio es de $25.000.");
    }
}

shop_proceeding();