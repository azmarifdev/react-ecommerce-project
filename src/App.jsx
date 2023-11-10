import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import NavItems from './components/NavItems';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <div>
                <NavItems />
                <div className="min-vh-100">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
