import Navbar from 'react-bootstrap/Navbar'
import BotonNavbar from './BotonNavbar'

const MiNavbar = () => {
    const total = 25000;
    const token = false;
    
    return (
        <Navbar 
        className="p-3 bg-dark d-flex justify-content-between">
            <div className="d-flex align-items-center gap-2">
                <Navbar.Brand className="text-white">Pizzeria Mamma Mia!</Navbar.Brand>
                
                <BotonNavbar texto=" 🍕Home"/>
                
                {token ? 
                <>
                <BotonNavbar texto=" 🔓 Profile"/>

                <BotonNavbar texto="🔒 Logout"/>
                </>
                :
                <>
                <BotonNavbar texto="🔐 Login"/>

                <BotonNavbar texto="🔐 Register"/>
                </>
                }

            </div>

            <div
            className="justify-content-end">
                <BotonNavbar texto={`🛒 Total: $${total.toLocaleString()}`} colorBorde = 'aqua' colorTexto = 'aqua' />
            </div>
        </Navbar>
    );
};

export default MiNavbar;