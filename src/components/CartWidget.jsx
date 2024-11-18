import React from 'react';

const CartWidget = ({ contador }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
                src="src/assets/icons8-agregar-a-carrito-de-compras-50.png" 
                alt="Carrito" 
                style={{ width: '30px', height: '30px', marginRight: '8px' }} 
            />
            <span style={{ fontSize: '16px', color: '#333' }}>{contador}</span>
        </div>
    );
};

export default CartWidget;