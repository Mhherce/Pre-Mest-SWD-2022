import './Logo'; 
import Logo from './Logo';
import './Title';  
import Title from './Title';


function Navbar(){
    return(
        <div className="navbar">
            <Logo />
            <Title />
        </div>
    );
}


export default Navbar;