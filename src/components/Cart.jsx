import { useState } from "react"
import { pizzaCart } from "../pizzas"

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart)

    const sumarPizza = (pizza) => {
        const nuevoCarro = [...cart]
        const index = nuevoCarro.findIndex(el => el.id === pizza.id)
        nuevoCarro[index].count += 1
        setCart(nuevoCarro)
    }

    const restarPizza = (pizza) => {
        if (pizza.count === 1) {
            const nuevoCarro = cart.filter(el => el.id !== pizza.id)
            setCart(nuevoCarro)
        } else {
            const nuevoCarro = [...cart]
            const index = nuevoCarro.findIndex(el => el.id === pizza.id)
            nuevoCarro[index].count -= 1
            setCart(nuevoCarro)
        }
    }

    let total = 0;
    cart.forEach((pizza) => {
        total += pizza.price * pizza.count;
    });

    return (
        <section className="container my-4">
            <h4>Detalles del pedido:</h4>
            <div>
                <ul className="text-center list-unstyled">
                    {cart.map(pizza =>
                        <li key={pizza.id} className="d-flex align-items-center justify-content-center mb-3">
                            <img src={pizza.img}
                                alt={pizza.name}
                                style={{ width: '70px' }}
                                className="rounded me-2" />
                                
                            <span className="text-capitalize fw-bold me-auto">{pizza.name}</span>
                            
                            <span className="me-3">${pizza.price.toLocaleString()}</span>

                            <button className="btn btn-outline-danger btn-sm" onClick={() => restarPizza(pizza)}>-</button>

                            <span className="mx-2 fw-bold">{pizza.count}</span>

                            <button className="btn btn-outline-primary btn-sm" onClick={() => sumarPizza(pizza)}>+</button>
                        </li>
                    )}
                </ul>
            </div>

            <h3>Total: ${total.toLocaleString()}</h3>
            <button className="btn btn-dark">Pagar</button>
        </section>
    )
}

export default Cart