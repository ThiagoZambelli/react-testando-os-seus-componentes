import {useRecoilValue} from 'recoil';
import { erroState } from 'state/atom';


export const useMenssagemDeErro = () => {
    const menssagem = useRecoilValue(erroState);
    return menssagem;
}