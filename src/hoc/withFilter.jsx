import React, { useState } from 'react';
import styles from './withFilter.module.css'
const withFilter = (WrappedComponent) => {
    return (props) => {
        const [categoria, setCategoria] = useState('');

        const filtrarProductos = (productos) => {
            return productos.filter(producto => 
                producto.category.includes(categoria)
            );
        };

        return (
            <div>
                <select className={styles.opciones} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Todas las categorías</option>
                    <option value="electronics">Electrónica</option>
                    <option value="jewelery">Joyería</option>
                    <option value="men's clothing">Ropa de hombres</option>
                    <option value="women's clothing">Ropa de mujeres</option>
                </select>
                <WrappedComponent {...props} productos={filtrarProductos(props.productos)} />
            </div>
        );
    };
};

export default withFilter;
