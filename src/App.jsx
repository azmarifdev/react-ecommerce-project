import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import NavItems from './components/NavItems';

function App() {
    return (
        <>
            <div>
                <NavItems /> 
                <Outlet />
            </div>
        </>
    );
}

export default App; 
