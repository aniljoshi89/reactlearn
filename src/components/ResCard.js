import React from "react";
import logo from "../images/food.jpeg"
const ResCard = (props) =>{
    // console.log(props);
   const {resData} = props;
       return (
        <div className="res-card" >
            <img src={logo} alt="img" style={{width:"100%"}}></img>
            <h4>{resData.name}</h4>
            <h5>Rating . {resData.rating}</h5>
            <h5>Delivery Time . {resData.deliveryTime}</h5>
            {/* <img src={logo} style={{width:"100%"}}></img>
            <h4>{resData.info.name}</h4>
            <h5>Rating . {resData.rating}</h5>
            <h5>Delivery Time . {resData.deliveryTime}</h5> */}
        </div>
    );
}

export default ResCard;
