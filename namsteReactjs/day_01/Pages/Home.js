import { Link } from "react-router-dom";
import CardContainer from "../components/CardContainer.js";
import Cards from "../components/Cards";
import SearchButton from "../components/SearchButton.js";
import { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "../app.js";


const Home = () => {
    let recipes = useContext(DataContext)
    const [searchProduct, setSearchProduct] = useState({ 'recipes': [] })



    const handelSearchValue = (value) => {
        setSearchProduct(value.trim().toLowerCase())


    }




    let filteredProducts =  recipes.filter((items) => items.name.toLowerCase().includes(searchProduct))



    return (<>

        <SearchButton handelSearchValue={handelSearchValue} />


        <CardContainer >

            {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (

                    <Link
                        key={item.id}
                        style={{ textDecoration: "none" }}
                        to={`/productdetails/${item.id}`}
                    >

                        <Cards
                            title={item.name}
                            desc={item.cuisine}
                            rating={item.rating}
                            time={item.time}
                            img={item.image}
                        />
                    </Link>
                ))
            ) : (
                <p style={{ textAlign: "center", color: "#888", marginTop: "20px" }}>
                    No results found.
                </p>
            )}
        </CardContainer>



    </>


    )
}

export default Home;