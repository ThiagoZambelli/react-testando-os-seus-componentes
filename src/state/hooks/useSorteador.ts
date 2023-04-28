import shuffle from "just-shuffle";
import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil";
import { resultadoSorteio } from "state/atom";

export const useSorteador = () => {

    const participantes = useListaDeParticipantes();
    const setResultado = useSetRecoilState(resultadoSorteio);

    return () => {
        const totalDeParticipantes = participantes.length;
        const embaralhado = shuffle(participantes);

        const resultado = new Map<string, string>()

        for (let i = 0; i < totalDeParticipantes; i++) {

            const indiceAmigo = i === (totalDeParticipantes - 1) ? 0 : i + 1;
            resultado.set(embaralhado[i], embaralhado[indiceAmigo])
        }

        setResultado(resultado);
    }
}