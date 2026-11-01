import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = ({ name, price, ingredients, img, desc }) => {
    return (
        <Card className="card h-100">
            <Card.Img
                variant="top"
                src={img} />

            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-capitalize">
                    Pizza {name}
                </Card.Title>

                <hr />

                <Card.Text
                    className="text-center fs-5 fw-light">
                    Ingredientes:
                </Card.Text>

                <ul className="text-center fw-normal fs-6 mb-3 list-unstyled">
                    {ingredients.map((ingrediente, index) => (
                        <li key={index} className="text-capitalize">
                            🍕 {ingrediente}
                        </li>
                    ))}
                </ul>

                <hr />

                <Card.Text
                    className="text-center fs-5">
                    <strong>Precio: ${price.toLocaleString()}</strong>
                </Card.Text>

                <div
                    className="d-flex justify-content-around mt-auto">
                    <Button variant="outline-dark">Ver más 👀</Button>

                    <Button variant="dark">Añadir 🛒</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default CardPizza;