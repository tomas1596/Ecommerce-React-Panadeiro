import React, { createContext,useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        if(cartList.some(article => article.id === item.id)){
            const newCart = cartList.map(article => {
                if (article.id === item.id) {
                    article.count = item.count + article.count;
                }
                return article;
            })
            setCartList(newCart);
        } else {
            setCartList([
                ...cartList,
                item
            ])
        }
    }


    const removeItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id === id);
        newCart.splice(index, 1);

        setCartList([...newCart])
    }

    const removeCart = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeItem,
            removeCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;