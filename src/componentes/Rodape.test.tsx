import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"
import { useListaDeParticipantes } from "state/hooks/useListaDeParticipantes"


jest.mock("state/hooks/useListaDeParticipantes", () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})


describe('onde não existe participantes suficiente', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('A brincadeira não pode ser iniciada', () => {
        // renderiza o rodape
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        //seleciona o botao pela role
        const botao = screen.getByRole('button');
        // estabelece o que ele espera. Neste caso que o botao esteja desabilitado
        expect(botao).toBeDisabled();
    })
})

describe('quando existe participantes suficiente', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['a', 'b', 'c'])
    })
    test('A brincadeira pode ser iniciada', () => {
        // renderiza o rodape
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        //seleciona o botao pela role
        const botao = screen.getByRole('button');
        // estabelece o que ele espera. Neste caso que o botao esteja desabilitado
        expect(botao).not.toBeDisabled();
    })
    test('a brincadeira foi iniciada', () => {
        // renderiza o rodape
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        //seleciona o botao pela role
        const botao = screen.getByRole('button');
        fireEvent.click(botao);

        expect(mockNavegacao).toHaveBeenCalledTimes(1)

    })
})