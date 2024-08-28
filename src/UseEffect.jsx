import { useEffect, useState } from "react";
import Cards from "./component/cards";
import Heading from "./component/Heading"; // If you're using this component, make sure to add it to your JSX
import Footer from "./component/header";
import Header from "./component/header";
import Hero from "./component/hero";

function UseEffect() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [category, setCategory] = useState("");

    useEffect(() => {
        console.log("useEffect Hook is called");
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((products) => setProducts(products));
    };

    const filtered = products.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase()) &&
        data.price >= minPrice &&
        data.price <= maxPrice &&
        (category === "" || data.category === category)
    );

    return (
        <>
       
        <Header/>

        <br />
        <br />
        <Hero/>
            <div className="flex flex-col md:flex-row md:justify-between p-4 bg-gray-100 rounded-lg shadow-md mb-6">
                <input
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full md:w-64 mb-4 md:mb-0"
                />
                <div className="flex flex-col md:flex-row md:items-center">
                    <label className="mr-2 mb-2 md:mb-0">Min Price:</label>
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.valueAsNumber)}
                        className="p-2 border border-gray-300 rounded-md w-24 mb-2 md:mb-0"
                    />
                    <label className="mx-2 mb-2 md:mb-0">Max Price:</label>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.valueAsNumber)}
                        className="p-2 border border-gray-300 rounded-md w-24 mb-2 md:mb-0"
                    />
                    <label className="ml-2 mb-2 md:mb-0">Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-40"
                    >
                        <option value="">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelry</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                    </select>
                </div>
            </div>

            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {filtered.map((data) => (
                        <Cards
                            id={data.id}
                            title={data.title}
                            key={data.id}
                            image={data.image}
                            price={data.price +`$`}
                        />
                    ))}
                </div>
            </div>        
         <Footer/>
  
        </>
    );
}

export default UseEffect;
