import { create } from "zustand";
const UseBasket =create(
    ((set)=>{
    return{ 
    items:[],
    invoice: {
        totalPrice:0,
        deliveryPrice:0,
        totalDiscount:0,
        finalPrice:0,
    },
    actions:{editItem: (item) => {
        set((state) => {
            if (item.quantity === 0) {
                return {
                    items: state.items.filter(
                        (cartItem) => cartItem.id !== item.id
                    ),
                };
            } else {
                return {
                    items: state.items.map((cartItem) => {
                        if (item.id === cartItem.id) {
                            return item;
                        }
                        return cartItem;
                    }),
                };
            }
        });
    },
    setPrice: () => {
        set((state) => {
            return {
                invoice: {
                    ...state.invoice,
                    totalPrice: state.items.reduce(
                        (total, item) =>
                                total + item.price * (item.quantity || 0), 0),},
                    };
                });
            },

            addToBasket:(item) => {
                set((state) => {
                    return {
                        items: [
                            ...state.items,
                            { ...item, quantity: 1 },
                        ],
                    };
                });
            },
            setTotalQuantity: (quantity) => {
                set((state) => {
                    return {
                        invoice: {
                            ...state.invoice,
                            totalQuantity: quantity,
                        },
                    };
                });
            },
        },
    };
})
)
export default UseBasket