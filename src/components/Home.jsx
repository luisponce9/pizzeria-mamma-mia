import Header from './Header';
import CardPizza from './CardPizza';
import { useState } from 'react';
import { pizzas } from '../pizzas';

const Home = () => {
    return (
        <main
            className="d-flex flex-grow-1 flex-column">
            <Header />

            <section className="container py-3">
                <div className="row g-3">
                    {pizzas.map((pizza) => (
                        <div className="col-12 col-md-4" key={pizza.id}>
                            <CardPizza
                                name= {pizza.name}
                                desc= {pizza.desc}
                                img= {pizza.img}
                                ingredients= {pizza.ingredients}
                                price= {pizza.price}
                            />
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}

export default Home;