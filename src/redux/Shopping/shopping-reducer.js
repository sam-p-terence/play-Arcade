import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "XBOX (2001)",
      description:
        "Original XBOX, released in 2021 and paired with the popular shooter HALO",
      price: 199,
      image:
        "https://www.lifewire.com/thmb/AWMk8FUwurwdefvZ1n2SXog3fXk=/2000x1333/filters:fill(auto,1)/x-box-731a722dbdca4e86919196e580b9385e.jpg",
    },
    {
      id: 2,
      title: "PlayStation 2 (2000)",
      description:
        "The best selling gaming console of all time, and the first with a built in CD/DVD player",
      price: 202,
      image:
        "https://www.copetti.org/images/consoles/ps2/international.71e8126f72c944c3b2887685a6583cb0ef47bba48e421618b1e12bdfefff42ae.png",
    },
    {
      id: 3,
      title: "Gameboy Advance (2001)",
      description:
        "The sequel to the Gameboy color, equipped with a faster processor and graphics card",
      price: 150.0,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7d/Nintendo-Game-Boy-Advance-Purple-FL.jpg",
    },
    {
      id: 3,
      title: "Gameboy Color (1998)",
      description:
        "One of the greatest portable gaming handhelds, mainly used to play Pokemon and Tetris",
      price: 200,
      image:
      "https:upload.wikimedia.org/wikipedia/commons/7/76/Nintendo-Game-Boy-Color-FL.jpg",
    },
    // {
    //   id: 
    //   title: 
    //   description:
    //   price:
    //   image:
    // },



  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
