import { useParams } from "react-router-dom";


const Cards = ({ title, rating, desc, time, img , username }) => {


    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{rating}</p>
            <p>{desc}</p>
            <p>{time}</p>
            <p>Posted by : {username}</p>
        </div>
    )
}

export default Cards;


// higher order components.....

export const RatedComp = (Cards) => {

    return (props) => {

        return (
            <div className="flex flex-col items-center justify-center p-4 m-4 transition-shadow duration-300 border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-2xl">
                
                <p className="p-2 m-2 text-center text-white rounded w-50">
                    {
                        props.diff ? `Difficulty Level : ${props.diff}` : ''
                    }

                </p>
                <p className="text-center text-black rounded bg-pink">{props.rate + " ⭐"}</p>

                <Cards {...props} />

            </div>
        )
    }

}