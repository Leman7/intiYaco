const productos = [
    {
        id: '1',
        nombre: 'Almendras',
        precio: 1000,
        stock: 10,
        imagen: 'imagenes/almendras.png'
    },

    {
        id: '2',
        nombre: 'Salsa de soja',
        precio: 1000,
        stock: 10,
        imagen: 'imagenes/salsaSoja.png'
    },

    {
        id: '3',
        nombre: 'Hamburguesas veganas',
        precio: 1000,
        stock: 10,
        imagen: 'imagenes/veganBurguer.png'
    }
]

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}