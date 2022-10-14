import { adding_to_cart, showdata, show_product_data } from "./Actions";

export const mapstatetoprops = (state) => {
  return { ...state };
};

export const mapstatetodispatch = (disatch) => {
  return {
    show_products() {
      disatch(showdata());
    },
    show_product_details(e) {
      disatch(show_product_data(e));
    },

    add_to_cart_props(e){
      disatch(adding_to_cart(e))
    }
  };
};
