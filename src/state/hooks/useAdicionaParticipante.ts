import { useSetRecoilState, useRecoilValue } from 'recoil'
import { erroState, listaParticipantesState } from 'state/atom'

export const useAdicionaParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState);
    const list = useRecoilValue(listaParticipantesState)
    const setErro = useSetRecoilState(erroState);

    return (nomeDoParticipante: string) => {
        if (list.includes(nomeDoParticipante)) {
            setErro('Nomes Duplicados não são permitidos!');
            setTimeout(() => {
                setErro('')
            }, 5000)

            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}