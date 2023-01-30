import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";

import './Recipe.css'

function Recipe() {

    let params = useParams();
    const [ details, setDetails ] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");


    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY_1}`
        );
        const detailData = await data.json();
        setDetails(detailData);
    };

  

    useEffect(() => {
        fetchDetails();
    },[params.name]);
    
    if (!details.extendedIngredients){
        return null
    }
    


  return (
    <div>
        <div className="recipe-section">
            
            <div className="zoom">
                <Card
                    img={details.image}
                    title={details.title}
                    time={details.readyInMinutes}
                    servings={details.servings}
                    like={details.aggregateLikes}
                />
            </div>
            <div className="recipe-text">

                <div className="recipe-description">
                    <h1>Description</h1>
                    <h5 dangerouslySetInnerHTML={{__html: details.summary}}></h5>
                </div>
                <button className={activeTab ===   `ingredients` ? `active` : ``} onClick={() => setActiveTab("ingredients")}>
                    Ingredients
                </button>
                <button className={activeTab ===   `instructions` ? `active` : ``} onClick={() => setActiveTab("instructions")}>
                    Instructions
                </button>
                
                {activeTab === `ingredients` && (
                    <div className="recipe-ingredients">
                        <ul>
                            {details.extendedIngredients.map((ingredient) =>(
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === `instructions` && (
                    <div className="recipe-instructions">
                        <h5 dangerouslySetInnerHTML={{__html: details.instructions}}></h5>
                    </div>
                )}
            </div>
        </div>
        
        
    
    </div>
  )
  
}

export default Recipe

