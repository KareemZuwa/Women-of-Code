import { useState, useEffect } from "react";
import Style from '../components/Card.module.css';

const Card = (props) => {
    const [localState, setLocalState] = useState(false);

    useEffect(() => {
        props.onClick(localState);
    }, [localState])

    return (
        <section className={Style.cards}>
                <section>
                    <img src={props.data.img} width="150"></img>
                    <h3>{props.data.name}</h3>
                    <button onClick={() => setLocalState()}>CLICK ME</button>
                </section>
        </section>
    );
}

export default Card;