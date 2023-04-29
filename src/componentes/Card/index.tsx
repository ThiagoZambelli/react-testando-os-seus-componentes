import React from 'react';
import styles from './Card.module.scss';

interface ICard{
    children: React.ReactNode,
    titulo: string
}

const Card = ({children, titulo}:ICard) =>{
    return(
        <div className={styles.card}>
            <h2>{titulo}</h2>
            {children}
        </div>
    )
}

export default Card;