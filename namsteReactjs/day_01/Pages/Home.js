import { Link } from "react-router-dom";
import CardContainer from "../components/CardContainer.js";
import Cards from "../components/Cards";
import SearchButton from "../components/SearchButton.js";
import { createContext, useContext, useEffect, useState, useContext } from "react";
import { userContext } from '../utils/userContext.js'
import { DataContext } from "../app.js";

import { RatedComp } from "../components/Cards";



const Home = () => {


    let recipes = useContext(DataContext)
    const [searchProduct, setSearchProduct] = useState({ 'recipes': [] })

    const RatedComponent = RatedComp(Cards)



    const handelSearchValue = (value) => {
        setSearchProduct(value.trim().toLowerCase())


    }

    const { username } = useContext(userContext)

    const [user, setUserName] = useState(username)



    let filteredProducts = recipes.filter((items) => items.name.toLowerCase().includes(searchProduct))



    return (<>

        <SearchButton handelSearchValue={handelSearchValue} />


        <CardContainer >
            <div>
                <input placeholder="Username" value={user} onChange={(e) => setUserName(e.target.value)} />
            </div>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (

                    <Link
                        key={item.id}
                        style={{ textDecoration: "none" }}
                        to={`/productdetails/${item.id}`}
                    >

                        {
                            item.rating >= 4.5 && <RatedComponent

                                title={item.name}
                                desc={item.cuisine}
                                rating={item.rating}
                                time={item.time}
                                img={item.image}
                                rate={item.rating}
                                diff={item.
                                    difficulty}
                                username={user}
                            /> || <Cards
                                title={item.name}
                                desc={item.cuisine}
                                rating={item.rating}
                                time={item.time}
                                img={item.image}
                                username={user}
                            />

                        }




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