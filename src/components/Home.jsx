import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
    return (
        <main
            className="d-flex flex-grow-1 flex-column">
            <Header />

            <section
                className="container py-3">
                <div className="row g-3">
                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Napolitana"
                            price={5950}
                            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                            img="https://media.istockphoto.com/id/2149620879/es/foto/pizza-napolitana-con-mozzarella-tomates-y-hojas-de-albahaca-pizza-casera-margherita-enfoque.jpg?s=612x612&w=0&k=20&c=L60CMM2jhzSiW_73rr9cwl1bRmHpK6FtdH7IMIxg3lA=" />
                    </div>

                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Española"
                            price={6950}
                            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                            img="https://thumbs.dreamstime.com/b/pizza-del-pollo-del-bbq-32425293.jpg"
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Pepperoni"
                            price={6950}
                            ingredients={["mozzarella", "pepperoni", "orégano"]}
                            img="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo="
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;