import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import Loader from '../components/Loader/Loader';
import Card from '../components/Card/Card';

function Searched() {
    const [searchedRecipes, setSearchdResipes] = useState([]);
    const [loader, setloader] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    let params = useParams();
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    const getSearched = async (name) => {
        setloader(true);
        const data = await axios
            .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&query=${name}`)
            .then(res => {
                setSearchdResipes(res.data.results);
            })
            
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })
            .finally(() => {
                setloader(false);
                
            });
    }

    if (!searchedRecipes) {
        return null
    }

    if (loader) {
        return <Loader />
    }
    if (errorMessage) {
        return (<h1 className="errorMessage">{errorMessage}</h1>)
    }

    return <div className="cards-group-category">
        {searchedRecipes.map((item) =>
            <div className="cards" key={item.id}>
                <Link to={"/recipe/" + item.id}>
                    <Card
                        img={item.image}
                        title={item.title}
                    />
                </Link>
            </div>
        )}
    </div>;
}

export default Searched