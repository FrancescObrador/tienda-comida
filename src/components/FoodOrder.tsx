import { MouseEventHandler, useContext, useState } from 'react';
import { MenuItem } from '../entities/entities';
import { foodItemsContext } from '../App';
import { addOrder } from '../services/MenuData';

interface FoodOrderProps {
    food: MenuItem;
    onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}

const FoodOrder = (props: FoodOrderProps) => {

    const [quantity, setQuantity] = useState<number>(1);
    const [totalAmount] = useState(props.food.price);
    const [isOrdered, setIsOrdered] = useState(false);

    const menuItems: MenuItem[] = useContext(foodItemsContext)
   
    const handleClick = async () => {
        
        setIsOrdered(true);
        addOrder(props.food).then(() => {
            setIsOrdered(false);
        });

        menuItems.map((item: MenuItem) => {
            if(item.id === props.food.id){
                item.quantity = item.quantity - quantity;
            }
        })
    }


    const total = quantity * totalAmount;

    return (
        <>
            {isOrdered && <div>Ordenando...</div>}
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