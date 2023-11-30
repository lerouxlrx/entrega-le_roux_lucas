const products = [
    {
        id: '1',
        name: 'Alargue blanco 1 pieza',
        price: 2000,
        category: 'Alargues',
        img: 'https://punto12electricidad.com.ar/wp-content/uploads/2020/05/prolongador-300x300.jpg',
        stock: 10,
        description: 'Alargue blanco, con enchufes en 1 pieza redondeados'
    },
    {
        id: '2',
        name: 'Alargue blanco armado',
        price: 2500,
        category: 'Alargues',
        img: 'https://www.qloud.ar/SITES/IMG/dps-digital-08-2021/tumb_230_20-01-2023-09-01-08-alargue-1.jpg',
        stock: 5,
        description: 'Alargue blanco, con enchufes intercambiables'
    },
    {
        id: '3',
        name: 'Alargue negro',
        price: 2500,
        category: 'Alargues',
        img: 'https://static.wixstatic.com/media/9442b5_ebabe00328504bf3a9fb9751b6c9cbcf~mv2.jpg/v1/fill/w_407,h_305,al_c,lg_1,q_80,enc_auto/9442b5_ebabe00328504bf3a9fb9751b6c9cbcf~mv2.jpg',
        stock: 20,
        description: 'Alargue negro, con enchufes intercambiables'
    },
    {
        id: '4',
        name: 'Alargue largo',
        price: 5000,
        category: 'Alargues',
        img: 'https://http2.mlstatic.com/D_NQ_NP_734749-MLA45482851650_042021-O.webp',
        stock: 8,
        description: 'Alargue negro, largo y con enchufes blancos.'
    },
    {
        id: '5',
        name: 'Adaptador 3a2',
        price: 1000,
        category: 'Adaptadores',
        img: 'https://corralonsanjavier.com.ar/4713-home_default/ficha-adaptadora-2-a-3-10a.jpg',
        stock: 20,
        description: 'Adaptador de 3 a 2, blanco.'
    },
    {
        id: '6',
        name: 'Adaptador x3a3',
        price: 2000,
        category: 'Adaptadores',
        img: 'https://http2.mlstatic.com/D_NQ_NP_859387-MLA70754506122_072023-O.webp',
        stock: 10,
        description: 'Adaptador con 3 entradas triples y planas a 3, blanco.'
    },
    {
        id: '7',
        name: 'Zapatilla blanca x4',
        price: 3000,
        category: 'Zapatillas',
        img: 'https://acdn.mitiendanube.com/stores/877/534/products/image-removebg-preview-471-4cf3c92e652fa3343a16646562435884-640-0.png',
        stock: 2,
        description: 'Zapatilla de 4 enchufes, de 3 tipos.'
    },
    {
        id: '8',
        name: 'Zapatilla x4 con USB',
        price: 4500,
        category: 'Zapatillas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_605759-MLA47130787719_082021-O.webp',
        stock: 4,
        description: 'Zapatilla de 4 enchufes, de 3 tipos + 2 USB.'
    },
    {
        id: '9',
        name: 'Zapatilla x2',
        price: 1500,
        category: 'Zapatillas',
        img: 'https://mrshops.com.ar/wp-content/uploads/2022/04/1-12.png',
        stock: 15,
        description: 'Zapatilla de 2 enchufes.'
    },
    {
        id: '10',
        name: 'Estabilizador retro x6',
        price: 15000,
        category: 'Estabilizadores',
        img: 'https://www.mylshop.com.ar/wp-content/uploads/2019/08/Estabilizador-de-tension-unico-6-tomas-Atomlux-01.jpg',
        stock: 2,
        description: 'Estabilizador estilo retro, con 6 entradas.'
    },
    {
        id: '11',
        name: 'Estabilizador negro x4',
        price: 10000,
        category: 'Estabilizadores',
        img: 'https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-7349417.jpg',
        stock: 10,
        description: 'Estabilizador negro, con 4 entradas.'
    },
    {
        id: '12',
        name: 'Estabilizador negro x8 plano',
        price: 15000,
        category: 'Estabilizadores',
        img: 'https://mesajil.com/wp-content/uploads/2023/02/15571-1.jpg',
        stock: 4,
        description: 'Estabilizador negro, con 8 entradas planas.'
    },
    {
        id: '13',
        name: 'UPS negra digital',
        price: 50000,
        category: 'UPS',
        img: 'https://i0.wp.com/rte.mx/wp-content/uploads/2021/05/39A359_AS01.jpg?ssl=1',
        stock: 10,
        description: 'UPS negra con pantalla digital.'
    },
    {
        id: '14',
        name: 'UPS negra',
        price: 40000,
        category: 'UPS',
        img: 'https://www.voragolive.com/images2/cat_articulos/145__imagen_1576623642.jpg',
        stock: 3,
        description: 'UPS negra.'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        },500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
