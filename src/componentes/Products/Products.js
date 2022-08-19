const products = [
    {
        id: '1',
        name: 'Almendras',
        price: 1000,
        stock: 10,
        img: 'imagenes/almendras.png',
        category: 'frutos secos',
        description: 'Frutos secos llenos de vitaminas y energia para todo el día.'
    },

    {
        id: '2',
        name: 'Salsa de soja',
        price: 1000,
        stock: 10,
        img: 'imagenes/salsaSoja.png',
        category: 'salsas',
        description: 'Salsa de soja ideal para acompañar tus comidas.'
    },

    {
        id: '3',
        name: 'Hamburguesas veganas',
        price: 1000,
        stock: 10,
        img: 'imagenes/veganBurguer.png',
        category: 'carnes',
        description: 'La mejor opcion para aquellos que no comen carne.'
        
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}