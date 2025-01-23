import { MouseEventHandler, useContext, useState } from 'react';
import { MenuItem } from '../entities/entities';
import { foodItemsContext } from '../App';

interface FoodOrderProps {
    food: MenuItem;
    onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}

const FoodOrder = (props: FoodOrderProps) => {

    const [quantity, setQuantity] = useState<number>(1);
    const [totalAmount] = useState(props.food.price);
    const [_, setIsOrdered] = useState(false);

    const menuItems: MenuItem[] = useContext(foodItemsContext)
   
    const handleClick = () => {
        menuItems.map((item: MenuItem) => {
            setIsOrdered(true);
            if(item.id === props.food.id){
                item.quantity = item.quantity - quantity;
            }
        })
    }


    const total = quantity * totalAmount;

    return (
        <>
            <div>Total: ${total}</div>
            <input
                type="number"
                value={quantity}
                onChange={(e) => {setQuantity(Number( e.target.value) )}}
            />
            <button onClick={handleClick}>Actualizar {props.food.name}</button>
        </>
    );
};

export default FoodOrder;