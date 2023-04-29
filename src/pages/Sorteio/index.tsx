import { useState } from "react";
import { useListaDeParticipantes } from "state/hooks/useListaDeParticipantes"
import { useResultadoDoSorteio } from "state/hooks/useResultadoDoSorteio";
import styles from './Sorteio.module.scss'
import dado from 'assets/imagens/casino.png';
import aviao from 'assets/imagens/aviao.png';

const Sorteio = () => {
    const participantes = useListaDeParticipantes();
    const resultado = useResultadoDoSorteio();

    const [participanteDaVez, setPaticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')


    const sortear = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    }

    return (
        <section className={styles.sorteio}>
            <form onSubmit={sortear}>
                <select
                    required
                    name="participanteDaVez"
                    id="participanteDaVez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setPaticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione seu nome!</option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                <button>
                    <img src={dado} alt="Dadinho" />
                    Sortear
                </button>
            </form>
            {amigoSecreto && <p className={styles.sorteio__alert} role="alert">{amigoSecreto}</p>}
            <img className={styles.sorteio__aviao} src={aviao} alt="Aviãozinho de papel" />
        </section>
    )
}

export default Sorteio