import React, { createContext,useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    function addToCart(item) {
        if(cartList.some(article => article.id === item.id)){
            const newCart = cartList.map(article => {
                if (article.id === item.id) {
                    article.count = item.count + article.count;
                }
                return article;
            })
            updateCart(newCart);
        } else {
            updateCart([
                ...cartList,
                item
            ])
        }
    }

    function updateCart(arr) {
        setCartList(arr);
        setTotalPrice(arr
            .map(curr => curr.count*curr.price)
            .reduce((acc,curr) => acc+curr,0)
        );
        setTotalItems(arr
            .map(curr => curr.count)
            .reduce((acc,curr) => acc+curr,0)
        );
    }


    const removeItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id === id);
        newCart.splice(index, 1);
        setCartList([...newCart])
    }

    const removeCart = () => {
        setCartList([])
        setTotalPrice(0)
        setTotalItems(0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeItem,
            removeCart,
            totalPrice,
            totalItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;