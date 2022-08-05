const productos = [
    {
        id: '1',
        nombre: 'Almendras',
        precio: 1000,
        stock: 10,
        imagen: 'imagenes/almendras.png',
        categoria: 'frutos secos'
    },

    {
        id: '2',
        nombre: 'Salsa de soja',
        precio: 1000,
        stock: 10,
        imagen: 'imagenes/salsaSoja.png',
        categoria: 'salsas' 
    },

    {
        id: '3',
        nombre: 'Hamburguesas veganas',
        precio: 1000,
        stock: 10,
        imagen: 'imagenes/veganBurguer.png',
        categoria: 'carnes'
    }
]

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const obtenerProductosPorCategoria = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoryId))
        }, 500)
    })
}

export const obtenerProductosPorId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}