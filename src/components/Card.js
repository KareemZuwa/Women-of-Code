import React from 'react';
import Style from '../components/Card.module.css';
import { Link } from "react-router-dom";

const Card = (props) => {

    const id = props.data.id;
    const data = props.data;

    return (
        <section className={Style.cards}>
                <section>
                    <img src={props.data.img} width="150" height="150" alt={props.data.name}></img>
                    <h3>{props.data.name}</h3>
                    <Link to={{
                        pathname: 'About:' + id,
                        state: { data }
                        }}>Read More</Link>
                </section>
        </section>
    );
}

export default Card;