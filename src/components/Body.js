import React, { useState } from "react";
import ResCard from "./ResCard";



//console.log(resList)

const Body = () =>{
    let [resList,setresList] = useState([
        {
           name : "KFC",
           rating : "4.1",
           deliveryTime : "35 minutes",
           
           id : 1
        },
        {
            name : "Insta mart",
            rating : "4.5",
            deliveryTime : "35 minutes",
            id : 2
        },
        {
            name : "MBA CHAI WALA",
            rating : "4.8",
            deliveryTime : "35 minutes",
            id : 3
           
        },
        {
            name : "RAGHU KI CHAI",
            rating : "3.2",
            deliveryTime : "35 minutes",
            id : 4
        },
        {
            name : "FUN & TEA",
            rating : "4.1",
            deliveryTime : "35 minutes",
            id : 5
        },
        {
            name : "FUN & TEA",
            rating : "4.1",
            deliveryTime : "35 minutes",
            id : 6
        },
        {
            name : "FUN & TEA",
            rating : "4.1",
            deliveryTime : "35 minutes",
            id : 7
        },{
            name : "FUN & TEA",
            rating : "4.1",
            deliveryTime : "35 minutes",
            id : 8
        },{
            name : "FUN & TEA",
            rating : "4.1",
            deliveryTime : "35 minutes",
            id : 9
        }
    ])

    return (
        
     <div className="body">
     <h3>serach</h3>
     <button onClick={()=>{
      const filteredList = resList.filter(
        (res)=>res.rating>4
       )
       setresList(filteredList);
     }}>Top rated restro</button>
     <div className="res-container">
         {
             resList.map((res)=>{
                return <ResCard key={res.id} resData={res} />
             }
         )
         }
     </div>
     </div>
 )
 }

 export default Body;