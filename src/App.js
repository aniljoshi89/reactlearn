import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";






const resobj = {
    "info": {
                      "id": "234875",
                      "name": "Adil Hotel",
                      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
                      "locality": "Rautha Wada",
                      "areaName": "Chhindwara Locality",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 4.3,
                      "parentId": "27123",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.0K+",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 10.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "10.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-25 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d79d0efb-1d90-4d17-a6b8-0f1fefaa8da9"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
                      "type": "WEBLINK"
                    }
                  }






const AppLayout = () =>(
     <>
     <Header />
     <Body />
     </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);