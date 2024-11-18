import React from 'react';
import Item from './Item';
import withFilter from '../hoc/withFilter';
import styles from './ListaDeComponentes.module.css'

const ItemList = ({ productos }) => {
    return (
        <div className={styles.lista}>
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    );
};

export default withFilter(ItemList);
