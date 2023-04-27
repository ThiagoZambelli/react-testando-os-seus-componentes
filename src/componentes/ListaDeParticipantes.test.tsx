import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaDeParticipantes from "./ListaDeParticipantes";
import { useListaDeParticipantes } from "state/hooks/useListaDeParticipantes";

jest.mock("state/hooks/useListaDeParticipantes", () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('Uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('Deve ser renderizado sem elementos', () => {
        render(<RecoilRoot><ListaDeParticipantes /></RecoilRoot>)

        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(0);
    })
})

describe('Uma lista com participantes', () => {
    const participantes = ['Ana', 'Pipoca']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('Deve ser renderizado os elementos', () => {        
        render(<RecoilRoot><ListaDeParticipantes /></RecoilRoot>)

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    })
})