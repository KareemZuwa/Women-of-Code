import Style from '../components/About.module.css';
import Navigation from './Navigation.js';

const About = (props) => {

    const roleModelData = props.location.state.data;
    //console.log(roleModelData);

    return (
        <section>
            <Navigation />
            <article className={Style.firstCont}>
            <img src={roleModelData.img} alt={roleModelData.name} width="350"></img>
            <aside>
                <h2>{roleModelData.name}</h2>
                <h3>{roleModelData.quote}</h3>
                <h3>{roleModelData.years}</h3>
            </aside>
            </article>
            <p>{roleModelData.description}</p>
            


        </section>
    )
}

export default About;