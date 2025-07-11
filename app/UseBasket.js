import { create } from "zustand";

const UseBasket = create((set, get) => ({
  items: [],
  invoice: {
    totalPrice: 0,
    deliveryPrice: 0,
    totalDiscount: 0,
    finalPrice: 0,
    totalQuantity: 0,
  },
  actions: {
    addToBasket: (item) => {
      set((state) => {
        const existingItem = state.items.find(i => i.id === item.id);
        let newItems;
        if (existingItem) {
          newItems = state.items.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else {
          newItems = [...state.items, { ...item, quantity: 1 }];
        }
        return { items: newItems };
      });
      get().actions.updateInvoice();
    },
    editItem: (item) => {
      set((state) => {
        let newItems;
        if (item.quantity === 0) {
          newItems = state.items.filter(i => i.id !== item.id);
        } else {
          newItems = state.items.map(i => (i.id === item.id ? item : i));
        }
        return { items: newItems };
      });
      get().actions.updateInvoice();
    },
    setTotalQuantity: () => {
      const totalQuantity = get().items.reduce((sum, item) => sum + (item.quantity || 0), 0);
      set((state) => ({
        invoice: {
          ...state.invoice,
          totalQuantity,
        },
      }));
    },
    setPrice: () => {
      const totalPrice = get().items.reduce(
        (total, item) => total + item.price * (item.quantity || 0),
        0
      );
      set((state) => ({
        invoice: {
          ...state.invoice,
          totalPrice,
        },
      }));
    },
    updateInvoice: () => {
      get().actions.setPrice();
      get().actions.setTotalQuantity();
    },
  },
}));

export default UseBasket;
