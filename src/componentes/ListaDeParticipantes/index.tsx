import { useListaDeParticipantes } from "state/hooks/useListaDeParticipantes";
import styles from './ListaDeParticipantes.module.scss';


const ListaDeParticipantes = () => {
    const participantes: string[] = useListaDeParticipantes();

    return (
        <ul className={styles.lista}>
           {participantes.map(item => <li key={item}>{item}</li> )}
        </ul>
        
    )
}

export default ListaDeParticipantes