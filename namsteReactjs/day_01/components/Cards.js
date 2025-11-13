import { useParams } from "react-router-dom";


const Cards = ({ title, rating, desc, time ,img }) => {


    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{rating}</p>
            <p>{desc}</p>
            <p>{time}</p>
        </div>
    )
}

export default Cards;