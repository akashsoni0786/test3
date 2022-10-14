import React, { useState } from "react";
import "./Home.css";
import { connect } from "react-redux";
import { mapstatetodispatch, mapstatetoprops } from "./redux/Mapping";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    props.show_products();
  }, []);
  const viewproduct =(e)=>{
    navigate("/products",{state:{"cid":e}})
  }

  return (
    <div>
      <img
        className="upperimg"
        alt=""
        src="https://images.unsplash.com/photo-1512389098783-66b81f86e199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=914&q=80"
      />

      <div className="productspart">
        <div>
          <p className="heading">Latest Items</p>
        </div>
      
        {products === [] ? (
          <div className="loader">
            <CircularProgress />
          </div>
        ) : (
          <div className="productscolumn">
            {props.all_products.map(
              (i, index) => {
                return (
                  <div className="productBox" key={index}>
                    <img alt="" className="productimg" src={i.main_image} />
                    <div className="productdetails">
                      <p className="nameofproduct">
                        {i.product_type} {i.tags}
                      </p>
                      <p className="priceofproduct">200$</p>
                    </div>
                    <button className="viewbtn" onClick={()=>viewproduct(i.container_id)}> View </button>
                  </div>
                );
              }
            )}
          </div>
        )} 
      </div>
    </div>
  );
};
export default connect(mapstatetoprops, mapstatetodispatch)(Home);
