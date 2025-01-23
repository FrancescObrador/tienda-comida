import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('Renders main page correctly', () => {
    it('Should render the page correctly', async () => {
        render(<App />);
        const h1 = await screen.queryByText("Comida Rápida Online");
        expect(h1).not.toBeNull();
    });

    it('Should render initial menu items', async () => {
        render(<App />);
        const menuItems = await screen.findAllByRole('listitem');
        expect(menuItems).toHaveLength(2);
        expect(screen.getByText("Hamburguesa de Pollo")).toBeInTheDocument();
        expect(screen.getByText("Hamburguesa de vaca")).toBeInTheDocument();
    });

    it('Should toggle to Pedir Comida page', async () => {
        render(<App />);
        const toggleButton = screen.getByText("Pedir comida");
        fireEvent.click(toggleButton);
        expect(screen.getByText("Disponibilidad")).toBeInTheDocument();
        expect(screen.getByText("Cargando...")).toBeInTheDocument();
    });

    it('Should display food items with prices on Pedir Comida page', async () => {
        render(<App />);
        // vamos a "pedir comida"
        const toggleButton = screen.getByText("Pedir comida");
        fireEvent.click(toggleButton);

        // comprobamos que estamos en pedir comida
        const foodItems = await screen.findAllByRole('listitem');
        expect(foodItems).toHaveLength(2);

        // buscamos y actualizamos en 1 la hamburguesa de pollo
        const primerActualizar = screen.getByText("Actualizar Hamburguesa de Pollo");
        expect(primerActualizar).toBeInTheDocument();
        fireEvent.click(primerActualizar);

        // volvemos a la la lista inicial
        fireEvent.click(toggleButton);

        // comprobamos que hay 39 de 40 hamburguesas
        expect(screen.getByText("Pedir comida")).toBeInTheDocument();
        expect(screen.getByText("#39")).toBeInTheDocument();

    });
});
