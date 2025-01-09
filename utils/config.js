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
            name: 'MC Logistic',
            description: 'La excelencia a su puerta',
            address: 'Guanajay',
            phone: '',
            whatsappNumber: '5354066204',
            products: [
                {
                    id: 1,
                    name: "Whisky Johnnie Walker Black Label",
                    description: "750 ml",
                    price: 5.99,
                    image: "black.jfif"
                },
                {
                    id: 2,
                    name: "Whisky Johnnie Walker Red Label",
                    description: "750 ml",
                    price: 3.99,
                    image: "red.jfif"
                }
            ]
        }
    ]
};

// Variables y funciones globales
window.APP = {
    config: CONFIG
};
