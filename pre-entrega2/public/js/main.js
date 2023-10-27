// Quise hacer este arreglo en otro archivo, use export e import para pasarlo a este pero no funciono, asi que debi escribirlo directamente aca 
const products = [
    {
        id: 1,
        name: "achicoria (atado)",
        price: 150,
        category: "verdura",
        image: "public/imgs/achicoria.jpg",
        desc: "Hortaliza de la familia de las asteráceas, de hojas verde oscuro y sabor ligeramente amargo."
    },
    {
        id: 2,
        name: "banana kilo",
        price: 800,
        category: "fruta",
        image: "public/imgs/banana.jpg",
        desc: "La naturaleza nos regala una exquisita fruta ya envuelta en su sobre de seguridad. Debajo de una gruesa cáscara encontramos su dulce y cremosa pulpa. La banana es esa práctica fruta lista para consumir que se disfruta a lo largo de todo el año."
    },
    {
        id: 3,
        name: "brocoli kilo",
        price: 1700,
        category: "verdura",
        image: "public/imgs/brocoli.jpg",
        desc: "De color verde profundo e intenso, partiendo de un tallo firme y robusto hasta una particular e inconfundible forma irregular en su copa. El brócoli llega para regalarnos un suave pero distintivo sabor que oscila entre lo amargo y lo dulce."
    },
    {
        id: 4,
        name: "coco kilo",
        price: 2000,
        category: "fruta",
        image: "public/imgs/coco.jpg",
        desc: "Coco"
    },
    {
        id: 5,
        name: "lechuga repollada kilo",
        price: 650,
        category: "verdura",
        image: "public/imgs/lechuga-repollada.jpg",
        desc: "Es la típica lechuga para sandwiches y crujientes ensaladas originales con un toque personal."
    },
    {
        id: 6,
        name: "mandarina kilo",
        price: 700,
        category: "fruta",
        image: "public/imgs/mandarina.jpg",
        desc:"Su sabor varía entre lo dulce, lo amargo y lo ácido. Explosivamente jugosas. Las familiares de las naranjas más famosas, las mandarinas."
    },
    {
        id: 7,
        name: "manzana roja kilo",
        price: 1050,
        category: "fruta",
        image: "public/imgs/manzana-roja.jpg",
        desc: "Crujiente y jugosa con un  dulce sabor a vainilla pero ácida finalmente. Una textura única e inconfundible, densa y de grano fino."
    },
    {
        id: 8,
        name: "naranja ombligo kilo",
        price: 600,
        category: "fruta",
        image:"public/imgs/naranja-ombligo.jpg",
        desc:"Una dulce y ácida explosión, rebosante de jugosidad y frescura, una fruta sin igual y exquisita por donde se la mire."
    },
    {
        id: 9,
        name: "palta kilo",
        price: 5000,
        category: "fruta",
        image:"public/imgs/palta.jpg",
        desc:"Famosa por el original guacamole, la palta nos ofrece un irresistible suave sabor “aceitado”, una tierna textura y un inconfundible color verde pastel en su interior."
    },
    {
        id: 10,
        name: "papa kilo",
        price: 480,
        category: "verdura",
        image: "public/imgs/papa.jpg",
        desc:"Fritas, al horno, salteadas, hervidas, en puré, en ensaladas, con cascara, sin cáscara, españolas, francesas, americanas. Por un lado, frías, por otro lado calientes. La lista de variedad de papas es interminable. Eso sí, cualquiera sea la diversidad elegida, jamás será una mala elección."
    },
    {
        id: 11,
        name: "rabanitos kilo",
        price: 600,
        category: "verdura",
        image:"public/imgs/rabanitos.jpg",
        desc:"Son ideales para incluir en una dieta para adelgazar y perder peso. Nos ayudan a mantener una piel sana."
    },
    {
        id: 12,
        name: "remolacha kilo",
        price: 500,
        category: "verdura",
        image:"public/imgs/remolacha.jpg",
        desc: "La remolacha es tal vez el vegetal más dulce de la naturaleza, sus formas redondas de color violeta profundo nos aportan exquisitos sabores y contrastes de colores en todos nuestros platos."
    }
];  


alert("Hola que tal!, bienvenido a el Bolson de Thiago, verduleria y fruteria");
alert("Contamos con dos tipos de productos:\n-Verduras\n-Frutas");

// Usando querySelector (quise usar getElementByClassName pero no funcionaba), guardamos en la variable catalog al div donde van a estar todas las tarjetas de productos
let catalog = document.querySelector(".product-catalog");

// Esta funcion, usando un forEach, recorre el arreglo de objetos products y va guardando la informacion de cada fruta y verdura en un div con una clase (para estilizarlo mejor).
function showProducts(products){
    products.forEach(element => {

        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.className = 'product-card';

        tarjetaProducto.innerHTML = `
            <div class="img-container">
                <img src="${element.image}" alt="${element.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${element.name}</div>
                <div class="product-price">$${element.price}</div>
                <div class="product-desc">${element.category}</div>
                <button onclick="buyProduct(${element.id})" type="button">Comprar</button>
            </div>
        `;

        catalog.appendChild(tarjetaProducto);
});
}

// Esta funcion se activa cuando el boton que tiene cada tarjeta de producto es apretado, tomando la ID del respectivo producto que apretes para mostrarte toda su informacion y asi dejarte a eleccion si compras o no.
function buyProduct(productID){
    const selectedProduct = products.find(product => product.id === productID);

    if(selectedProduct){
        const confirmation = confirm(`Nombre: ${selectedProduct.name}\nPrecio: $${selectedProduct.price}\nDescripción: ${selectedProduct.desc}\n¿Desea completar la compra?`)
        
        if(confirmation){
            const arriveDate = new Date();
            arriveDate.setDate(arriveDate.getDate() + 7 );
            alert(`Gracais por tu compra! Tu compra deberia estar llegando a tu casa en los proximos dias, espere la compra desde el ${arriveDate.toLocaleDateString()}`);
        }else{
            alert("Gracias por visitarnos! Vuelva pronto");
        } 
    // Este else es por si alguien modifica al boton escribiendo otro numero no existente.  
    }else{
        alert("El producto seleccionado no está disponible");
    }
}

// Finalmente, le pasamos a la funcion antes mencionada la informacion de products
showProducts(products);