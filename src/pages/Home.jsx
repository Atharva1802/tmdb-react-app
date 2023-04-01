import React from "react"
import HeroSlide from '../components/Hero-Slide/HeroSlide'
import { Link } from "react-router-dom"
import { OutlineButton } from "../components/Buttons/Button"
// import { category } from "../api/tmdbApi"
// import { movieType } from "../api/tmdbApi"

const Home = () => {
  return (
    <>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>

                </div>
          </div>
    </>
  )
}
export default Home