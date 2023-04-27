import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './PaginaComum.module.scss';
import logo from 'assets/imagens/logo.png';
import participante from 'assets/imagens/participante.png'

export default function PaginaComum() {
    return (
        <>
            <header className={styles.header}>                
                <img className={styles.header__logo} src={logo} alt="" />
                <img src={participante} alt="" />
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </>
    )
}
