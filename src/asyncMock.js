const products =[
    {
        id:'1',
        name:'Sofa Italia',
        price: 30000,
        category: 'living',
        img:'https://www.pngplay.com/wp-content/uploads/6/Couch-PNG-HD-Quality.png',
        stock: 15,
        description: 'Descripcion de Sofa Italia'
    },
    {
        id:'2',
        name:'Mueble Venecia',
        price: 25000,
        category: 'muebles',
        img:'https://w7.pngwing.com/pngs/113/105/png-transparent-kitchen-cabinet-living-room-cabinetry-kitchen-file-miscellaneous-kitchen-angle.png',
        stock: 15,
        description: 'Descripcion de Mueble Venecia'  
    },
    {
        id:'3',
        name:'Mueble Cielo',
        price: 40000,
        category: 'muebles exterior',
        img:'https://w7.pngwing.com/pngs/603/658/png-transparent-garden-furniture-table-chair-sofa-angle-furniture-sofa.png',
        stock: 15,
        description: 'Descripcion de Mueble cielo'  
    }
]

export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById =(productId) =>{
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id===productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))

        }, 500)

    })

};