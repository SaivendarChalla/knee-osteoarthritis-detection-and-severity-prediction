import './Header.css'
import {Link} from "react-router-dom"
function Header(){
    return(
        <div>
             <div class='header'>
             <link to='/Home'>Home</link>
             <link t0='/about'>About</link>
             <link to='/contact'>Contact</link>
             <link to='/Login'>Login</link>
             <link to='/Doctor'>Doctor</link>
             <link to='/Patient'>Patient</link>

             </div>
        </div>
    )
}