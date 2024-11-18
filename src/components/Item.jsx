import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Item.module.css'
import { Button } from 'bootstrap';
const Item = ({ producto }) => {
    return (
        <div className={styles.card} style={{ width: '18rem' }}>
            <img src={producto.image} className="card-img-top" alt={producto.title} />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <button> Ver Mas </button>
            </div>
        </div>
    );
};

export default Item;
