const productos = [
    { id: '1', nombre: 'Coconut Porter', precio: '$350', tipo: 'Negra', descripcion: 'Birra negra que fuciona los aromas del coco y el chocolate con el torrado de la malta', stock: '10', categoria: 'cervezas' },
    { id: '2', nombre: 'Red Haze', precio: '$350', tipo: 'Roja', descripcion: 'Birra colorada de buen cuerpo con un lijero toque de avellanas', stock: '10', categoria: 'cervezas' },
    { id: '3', nombre: 'American IPA', precio: '$300', tipo: 'IPA', descripcion: 'IPA americana con una combinacion de lupulos que no dejan pasar el aroma a pino y un dejo de cogollos ;)', stock: '10', categoria: 'cervezas' },
    { id: '4', nombre: 'Gin Republica de los Perros', precio: '$680', tipo: '', descripcion: 'Gin bien patagonico', stock: '10', categoria: 'aperitivos' },
    { id: '5', nombre: 'Cheetos De Queso', precio: '$166', tipo: '', descripcion: 'Snack de harina de maiz sabor a queso', stock: '20', categoria: 'snacks' }
]

export const apiProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
};

export const idProducto = (id) => {
    return new Promise(respuesta => {
        setTimeout(() => {
            respuesta(productos.find(producto => producto.id === id))
        }, 2000)
    })
};

export const categoriaProducto = (categoriaId) => {
    return new Promise(respuesta => {
        setTimeout(() => {
            respuesta(productos.filter(producto => producto.categoria === categoriaId))
        }, 2000)
    })
};