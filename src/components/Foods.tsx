import { MenuItem } from "../entities/entities";
import FoodOrder from "./FoodOrder";

interface FoodsProps { 
    foodItems: MenuItem[];
}

function Foods(props: FoodsProps){

    const returnToMenuHandler = () => {

    }
    
    return (
        <>
            <h4 className="foodTitle">Choose from our Menu</h4>
            <ul className="ulFoods">
                {
                    props.foodItems.map((item) => {
                        return (
                        <li key={item.id} className="liFoods">
                            <img src={`tienda-comida/images/${item.image}`} alt={item.name} />
                            <div className="foodItem">
                                <p className="foodDesc">{item.desc}</p>
                                <p className="foodPrice">${item.price}</p>
                            </div>
                            <FoodOrder food={item} 
                            onReturnToMenu={returnToMenuHandler}                            
                            ></FoodOrder>
                        </li>
                        )
                    })
                }
            </ul>
            <button> añadir </button>
        </>
    )
}

export default Foods;