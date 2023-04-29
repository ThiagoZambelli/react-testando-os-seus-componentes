import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "state/hooks/useListaDeParticipantes";
import sacolas from 'assets/imagens/sacolas.png';
import botaoPlay from 'assets/imagens/play_circle.png';
import styles from './Rodape.module.scss';
import { useSorteador } from "state/hooks/useSorteador";

const Rodape = () => {
    const participantes = useListaDeParticipantes();

    const navegarPara = useNavigate();
    const sortear = useSorteador();

    const iniciar = () => {
        sortear();
        navegarPara('/sorteio');
    }
    const botaoHabilitado = participantes.length < 3;

    return (
        <footer className={styles.rodape}>
            <button
                disabled={participantes.length < 3}
                onClick={iniciar}
                className={!botaoHabilitado ? styles.prontoParaIniciar : ''}
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