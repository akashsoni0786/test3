import { ADDTOCART, MYCHOICE, SHOWPRODUCTS } from "./Constants";

const initialstate = {
  all_products: [
    {
      tags: "Loading...",
      product_type: "Loading...",
      main_image:
        "https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png",
    },

    {
      tags: "Loading...",
      product_type: "Loading...",
      main_image:
        "https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png",
    },

    {
      tags: "Loading...",
      product_type: "Loading...",
      main_image:
        "https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png",
    },

    {
      tags: "Loading...",
      product_type: "Loading...",
      main_image:
        "https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png",
    },
  ],
  my_choice: [
    {
      main_image:
        "https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png",
      brand: "Loading...",
      tags: "",
      variant_title: "Loading...",
    },
    {
      main_image: "https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png",
      brand: "Loading...",
      tags: "",
      variant_title: "Loading...",
    },
  ],
  cart_product :[]
};

export const Reducer = (state = initialstate, actions) => {
  if (actions.type === SHOWPRODUCTS) {
    console.log("reducer");
    localStorage.setItem("products_data", JSON.stringify(actions.payload));
    if (
      localStorage.getItem("products_data") === undefined ||
      localStorage.getItem("products_data") === null
    ) {
      localStorage.setItem("products_data", JSON.stringify(actions.payload));
      console.log(actions.payload);
      return {
        ...state,
        all_products: actions.payload,
      };
    } else {
      return {
        ...state,
        all_products: JSON.parse(localStorage.getItem("products_data")),
      };
    }
  }

  if (actions.type === MYCHOICE) {
    return {
      ...state,
      my_choice: actions.payload,
    };
  }

  if (actions.type === ADDTOCART) {
    alert("Al")
    return {
      ...state,
      cart_product: [...state.cart_product,actions.payload,],
    };
  }
  return { ...state };
};
