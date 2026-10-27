const Header = () => {
    return (
        <header
            className="container-fluid text-center text-white d-flex flex-column justify-content-center align-items-center"
            style={{
                height: "30vh",
                backgroundImage: "url('src/assets/Header.jpg')",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backgroundBlendMode: "overlay",
                backgroundSize: "cover"
            }}>
            <h1>¡Pizzeria Mamma Mia!</h1>
            <p className="mb-1">¡Tenemos las mejores pizzas que podrás encontrar!</p>
            <hr className="w-75"/>
        </header>
    );
};

export default Header;