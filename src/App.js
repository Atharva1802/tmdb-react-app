import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import './components/heroslide/HeroSlide'

import { BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HeroSlide from './components/heroslide/HeroSlide';
import Routes from './config/Routes';
import Home from './pages/Home';

function App() {
    return (
       <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props} />
                    
                    <Routes/>
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;
