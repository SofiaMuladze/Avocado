import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import Card from "./Card/Card";
import Loader from "./Loader/Loader";

function Popular() {
    const [popular, setPopular] = useState([]);
    const [loader, setloader] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        setloader(true);
        const data = await axios
            .get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_1}&number=12&tags=vegetarian`)
            .then(res => {
                setPopular(res.data.recipes)
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })
            .finally(() => {
                setloader(false);
            });
    };

    if (!popular) {
        return null
    }
    
    if (loader) {
        return <Loader />
    }
    if (errorMessage) {
        return (<h1 className="errorMessage">{errorMessage}</h1>)
    }

    return <div> 
        
        <div className="category-title">
            <h1> Popular Recipes</h1>
        </div>
        <div className="cards-group-category" >
            {popular.map((recipe) =>
                <div className="cards" key={recipe.id}>
                    <Link to={"/recipe/" + recipe.id}>
                        <Card
                            img={recipe.image}
                            title={recipe.title}
                            time={recipe.readyInMinutes}
                            servings={recipe.servings}
                            like={recipe.aggregateLikes}
                        />
                    </Link>
                </div>
            )}
        </div>
    </div>
}

export default Popular;