// Configuración global disponible para todos los componentes
const CONFIG = {
    WHATSAPP_NUMBER: '5354066204',
    PAYMENT_METHODS: {
        ZELLE: 'Zelle',
        TRANSFER_CUP: 'Transferencia CUP',
        CASH_CUP:'Efectivo',
        TRANSFER_MLC: 'Transferencia MLC',
        CASH: 'Efectivo'
    },
    CONVERSION_RATES: {
        CUP: 330,
        MLC: 1.25
    },
    STORES: [
        {
            id: 'store1',
            name: 'TuDespensa',
            description: 'Entrega a domicilio de todo tipo de alimentos frescos y de alta calidad, directamente a tu puerta.',
            address: 'Guanajay',
            phone: '',
            whatsappNumber: '5354066204',
            products: [
                {
                    id: 1,
                    name: "Jugo La Estancia 1l",
                    description: "Sabor naranja",
                    price: 1.50,
                    image: "jugonaranja.jpg"
                },
                {
                    id: 2,
                    name: "Jugo 200 ml",
                    description: "sabor pera",
                    price: 0.70,
                    image: "200ml.jfif"
                }
            ]
        },
        {
            id: 'store2',
            name: 'Café Matojo',
            description: 'Baristas profesionales, su mejor opción al alcance de un click.',
            address: 'Guanajay',
            phone: '',
            whatsappNumber: '5354066204',
            products: [
                {
                    id: 1,
                    name: "Café Suturado",
                    description: "Café cortado",
                    price: 1.20,
                    image: "cortado.jpg"
                },
                {
                    id: 2,
                    name: "Café Exconvicto ",
                    description: "Café expreso",
                    price: 0.80,
                    image: "cafeexpreso.jpg"
                }
            ]
        },
        {
            id: 'store3',
            name: 'Cafetería Dulce',
            description: 'Postres, dulces y bebidas calientes',
            address: 'Avenida 5ta, Miramar',
            phone: '+53 5555-5678',
            whatsappNumber: '5355555678',
            products: [
                {
                    id: 1,
                    name: "Flan de Caramelo",
                    description: "Flan casero con salsa de caramelo",
                    price: 5.99,
                    image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                },
                {
                    id: 2,
                    name: "Café Cubano",
                    description: "Café expreso tradicional cubano",
                    price: 2.99,
                    image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80"
                }
            ]
        }
    ]
};

// Variables y funciones globales
window.APP = {
    config: CONFIG
};
