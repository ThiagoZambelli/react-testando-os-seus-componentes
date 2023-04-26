import React from 'react';
import styles from './Formulario.module.scss';

export default function Formulario() {
  return (
    <form className={styles.formulario}>
        <input type='text' placeholder='Insira os nomes dos participantes'/>
        <button disabled={false} >Adicionar</button>
    </form>
  )
}
