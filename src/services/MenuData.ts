import {ref, push, onValue} from 'firebase/database';
import {db} from './FireBase';
import { MenuItem } from '../entities/entities';

export const addMenuItem = async (item: MenuItem) => {
    const itemsRef = ref(db, "menu");
    await push(itemsRef, item);
}

export const addOrder = async (item: MenuItem) => {
    const itemRef = ref(db, "orders");
    await push(itemRef, item);
    console.log("Order added");
}

export const getMenu = async () => {
    const itemsRef = ref(db, "menu");
    onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        const formattedData = data ? 
        Object.entries(data).map(([id, value]) => ({id, ...(value as any)}) )
        : [];

        return formattedData;
    })
}