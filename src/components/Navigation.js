import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <section>
            <Link to='/'>Home</Link> | <Link to='/About'>About</Link>
        </section>
     );
}
 
export default Navigation;