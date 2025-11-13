import { useParams } from "react-router-dom";
import { restaurantData } from "../data";
import { DataContext } from "../app";
import { useContext } from "react";

const ProductDetails = ({ itemId }) => {
    let { id } = useParams()

    let recipes = useContext(DataContext)
    const singleProduct = recipes.find((item) => item.id == id)

    let { name, rating, desc, time, image, cuisine, ingredients, instructions, prepTimeMinutes, cookTimeMinutes } = singleProduct;

    return (
        <>
            <h1 style={
                {
                    textAlign: "center"
                }
            }>
                Product Details
            </h1>
            <div className="card " style={{ margin: "12px auto", width: "50%", height: "90vh" }}>
                <img style={{ width: "100%", height: "50vh", }} src={image} alt="" />
                <h3>{name}</h3>
                <p>{rating}</p>
                <p>{desc}</p>
                <p>{cuisine}</p>
                <p>ingredients : {ingredients.join(',')}</p>
                <p> ⌛: {prepTimeMinutes} min</p>
            </div>

            <div className="card" style={{ width: '100%', margin: '2px' }}>
                <h3 style={{ padding: '2rem' }} >instructions 🍳 </h3>
                <p style={{ padding: '2rem' }}>
                    {instructions}
                </p>
            </div>


        </>
    )
}

export default ProductDetails;