import Card from '../components/Card.js';
import Clock from '../components/Clock.js';
import React from 'react';
import Navigation from './Navigation.js';

const Home = () => {

    let rolemodels = require('../assets/wit.json');
    
    //console.log(rolemodels);
  
    return ( 
        <section>
            <header className="header">
                <h1>International Womens Day</h1>
                <Clock />
            </header>
                <Navigation />
                <main className="cardContainer">
                {
                    rolemodels.map((rolemodel, index) =>  
                    <Card key={index} data={rolemodel} />
                    )
                }
                </main>
        </section>
     );
}
 
export default Home;