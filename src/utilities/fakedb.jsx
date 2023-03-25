// manage the data from local

const addToDb = id => {

    let shoppingCart = {};
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = parseInt(quantity) + 1;
    }
    else {
        shoppingCart[id] = 1;
    }
    //save to local storage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));



    // uporer part practise er jonno

    // // -----------objectBD---------
    // let shoppingCart = {};
    // // get the cart
    // const storeCart = localStorage.getItem('shopping-cart');
    // if (storeCart) {
    //     shoppingCart = JSON.parse(storeCart);
    // }

    // //add quantity
    // const quantity = shoppingCart[id];
    // if (quantity) {
    //     const newQuantity = quantity + 1;
    //     shoppingCart[id] = newQuantity;
    // }
    // else {
    //     shoppingCart[id] = 1;
    // }

    // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))








    //--------------normal db --------------
    // const quantity = localStorage.getItem(id);

    // if (quantity) {
    //     const newQuantity = parseInt(quantity) + 1;
    //     localStorage.setItem(id, newQuantity);
    // }
    // else {
    //     localStorage.setItem(id, 1);
    // }


}
// delete from db 
const removedFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        //console.log('shpooing cart', shoppingCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}
export {
    addToDb,
    removedFromDb
}