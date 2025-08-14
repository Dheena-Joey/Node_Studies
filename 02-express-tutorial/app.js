const express = require('express');
const path = require('path')
const app = express();


const logger = (req, res, next)=>{
    const url = req.url
    const method = req.method
    const time = new Date().getDate()
    console.log(url, method, time)
    next()
}


app.get('/', logger, (req, res)=>{
    res.send(`hello`)
})




app.listen(5000, ()=>{
    console.log('App listening at port 5000')
 })

 
 
 
 
 
 // const { products , people } = require('./data.js')

// app.get('/', (req, res)=>{
//     res.send(`<h1>HOME PAGE</h1> <br> <a href='/api/products'>PRODUCTS</a>`)   //albanysofa
// })

// app.get('/api/products', (req, res)=>{
//     const newProduct = products.map((product)=>{
//         const { id, name, image } = product;
//         return {id, name, image }
//     })
//     res.send(newProduct)
// })

// app.get('/api/products/:productID', (req, res)=>{
//    const { productID } = req.params
//    const singleProduct = products.find((product)=> product.id === Number(productID) )
//    if(!singleProduct){
//     return res.status(404).send('Product not found')
//    }
//    return res.json(singleProduct)
// })

/*
app.get('/api/product/query', (req, res) => {
    const { start, limit } = req.query;
    let filteredProducts = [...products];
    
    if (start) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.startsWith(start)
        );
        }
        
        if (limit) {
            filteredProducts = filteredProducts.slice(0, Number(limit));
            }
            
            if (filteredProducts.length === 0) {
                return res.status(404).send('product not found');
                }
                
                res.send(filteredProducts);
                });
                */ 
               
               
               
                
                
                // app.get('/api/product/query',(req, res)=>{
                //     const { start, limit } = req.query
                //     let sortedProducts = [...products]
                //     if(start){
                //         sortedProducts = sortedProducts.filter((product)=>{
                //         return product.name.startsWith(start)
                //     })}
                
                //     if(limit){
                //         sortedProducts = sortedProducts.slice(0,Number(limit))
                //     }
                //     if(sortedProducts.length < 1){
                //         return res.status(200).json( { success:true, data:[] } )
                //     }
                //     res.send(sortedProducts)
                // })
// app.get('/api/products/1', (req, res)=>{
//    const singleProduct = products.find(( product )=> product.id === 1)
//     res.json(singleProduct)
// })


// //albanysofa
// app.get('/api/albanysofa', (req, res)=>{
//     const newProduct = products.map((product)=>{
//         const { name } = product;
//         if(name === 'albany sofa'){
//             res.send(product)
//         }
//     })
// })