import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Product.css";
import { mapstatetodispatch, mapstatetoprops } from "./redux/Mapping";

const Product = (props) => {
  const [ind, setInd] = useState(0);
  const [quan, setQuan] = useState(1);
  const location_data = useLocation();
  React.useEffect(() => {
    props.show_product_details(location_data.state.cid);
  }, []);
  const changevarient = (e) => {
    setInd(e);
  };
  const addtocart=(e)=>{
    let item = {
      img:props.my_choice[ind].main_image,
      name:props.my_choice[ind].brand+" "+props.my_choice[ind].tags,
      price : 1000,
      quantity:quan
    }
    if(e === ind)
    {
      
    }
    
    props.add_to_cart_props(item)
  }
  console.log(props.cart_product.length)
  return (
    <div className="productpage">
      {props.my_choice[ind].main_image === "" ? (
        <img
          className="productimg"
          alt=""
          src="https://image.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg"
        />
      ) : (
        <img
          className="productimg"
          alt=""
          src={props.my_choice[ind].main_image}
        />
      )}

      <div className="productDetails">
        <p className="nameheading">
          {props.my_choice[ind].brand}&nbsp;{props.my_choice[ind].tags}
        </p>
        <p>Rs. 1000</p>
        <p>Color</p>
        <div className="variantname">
          {props.my_choice.map((j, index) => {
            return (
              <button
                onClick={() => {
                  changevarient(index);
                }}
                className="variants"
              >
                {j.variant_title}{" "}
              </button>
            );
          })}
        </div>

        <div className="quantitybtnsdiv">
          <button className="quanbtn">-</button>
          <p className="quantitycount">0</p>
          <button className="quanbtn">+</button>
        </div>
        <button className="addtocart" onClick={()=>addtocart(ind)}>Add to cart</button>
        <button className="buynow">Buy Now</button>
        <p className="productdesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining
        </p>
      </div>
    </div>
  );
};

export default connect(mapstatetoprops, mapstatetodispatch)(Product);
