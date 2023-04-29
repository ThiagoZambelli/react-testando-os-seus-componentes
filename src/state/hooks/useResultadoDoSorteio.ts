import { useRecoilValue } from "recoil"
import { resultadoSorteio } from "state/atom"

export const useResultadoDoSorteio = () => {
    return useRecoilValue(resultadoSorteio);
}