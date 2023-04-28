import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "state/hooks/useListaDeParticipantes";
import sacolas from 'assets/imagens/sacolas.png';
import botaoPlay from 'assets/imagens/play_circle.png';
import styles from './Rodape.module.scss';

const Rodape = () => {
    const participantes = useListaDeParticipantes();

    const navegarPara = useNavigate();

    const iniciar = () => {
        navegarPara('/sorteio');
    }

    return (
        <footer className={styles.rodape}>
            <button
                disabled={participantes.length < 3}
                onClick={iniciar}
            >
                <img src={botaoPlay} alt="botao de play" />
                Iniciar Brincadeira
            </button>
            <img 
                className={styles.rodape__sacolas} 
                src={sacolas} 
                alt="Imagem de sacolas" 
            />
        </footer>
    )
}

export default Rodape;