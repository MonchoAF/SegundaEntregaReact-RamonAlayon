import React, { useEffect, useState } from 'react';
import ItemList from './ListaDeItems';
import styles from './ItemListContainer.module.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProductos(data);
        };

        fetchProductos();
    }, []);

    return (
        <div className={styles.contenedorlista}>
            <h1>Productos</h1>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
