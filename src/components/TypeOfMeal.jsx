import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Loader from "./Loader/Loader";
import Card from "./Card/Card";

function TypeOfMeal() {
    const [typeofmeal, setCategory] = useState([]);
    const [loader, setloader] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    let params = useParams();

    useEffect(() => {
        getCategory(params.type)
    }, [params.type]);

    const getCategory = async (name) => {
        setloader(true);
        const data = await axios
            .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_1}&tags=vegetarian&type=${name}&number=12`)
            .then(res => {
                setCategory(res.data.results);
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)

            })
            .finally(() => {
                setloader(false);
            });
    };

    if (!typeofmeal) {
        return null;
        
    } 

    if (loader) {
        return <Loader />
    }

    if (errorMessage) {
        return (<h1 className="errorMessage">{errorMessage}</h1>)
    }

    return <div className="cards-group-category">
        {typeofmeal.map((item) => 
            <div className="cards" key={item.id}>
                <Link to={"/recipe/" + item.id}>
                    <Card
                        img={item.image}
                        title={item.title}
                    />
                </Link>
            </div>
        )}
    </div>
}

export default TypeOfMeal