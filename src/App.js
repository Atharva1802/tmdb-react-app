import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';
import HeroSlide from './components/hero-slide/HeroSlide';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props} />
                    <HeroSlide/>
                    <Routes/>
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;