
import {useSelector}  from 'react-redux'
import Cards from './Cards'
const Carts = () => {
    const cart = useSelector((store) => store.app.items)
    console.log(cart)
    return (
        
        
        
        <>
            <div>
                  <div className="flex flex-col mx-auto gap-2 justify-center align-center" >
                    <h1> Added items </h1>
               {
                   cart.map((items , index) =>{
                       const   { title, rating, desc, image  } =items;
                    return (
                      
                      <Cards  key={index} title={title} rating={rating} desc={desc} img={image} />
                        
                       
                    )
                })
               }
                </div>
            </div>
        </>
    )
}

export default Carts