import React, { useState, useEffect } from "react";

import tmdbApi, { category, movieType } from '../../api/tmdbApi'
import apiConfig from "../../api/apiConfig";
import './hero-slide.scss'

const HeroSlide = () => {
    
    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        const getMovies = async() => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params})
                setMovieItems(response.results.slice(0, 4))
            } catch {
                console.log("error");
            }
        }
        getMovies();
    }, [tmdbApi, movieType])
    
    return (
        <div className="hero-slide">
            HeroSlide
        </div>
    )
}