import { fireEvent, render, screen } from "@testing-library/react"
import Formulario from "./Formulario";
import { RecoilRoot } from 'recoil'
import { act } from "@testing-library/react";

describe('O comportamento do Formulario.tsx', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        //encontrar o botão
        const botao = screen.getByRole('button');
        //garantir que o input esta no documento
        expect(input).toBeInTheDocument()
        //garantir que o botao esta desabilitado
        expect(botao).toBeDisabled()
    })

    test('adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        //encontrar o botão
        const botao = screen.getByRole('button');

        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Pipoca'
            }
        })
        // clicar no botao de submeter
        fireEvent.click(botao)
        // garantir que o nome vai sumir e o foco esteja no input
        expect(input).toHaveFocus()
        expect(input).toHaveValue('');
    })

    test('Nomes duplicados não podem ser adicionados', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        //encontrar o botão
        const botao = screen.getByRole('button');
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Pipoca'
            }
        })
        // clicar no botao de submeter
        fireEvent.click(botao)
        // inserir um segundo valor no input
        fireEvent.change(input, {
            target: {
                value: 'Pipoca'
            }
        })
        // clicar no botao de submeter
        fireEvent.click(botao)

        const menssagemDeErro = screen.getByRole('alert')

        expect(menssagemDeErro.textContent).toBe('Nomes Duplicados não são permitidos!')
    })

    test('A menssagem de erro deve sumir apos 2 timers', () => {
        jest.useFakeTimers()
        render(<RecoilRoot><Formulario /></RecoilRoot>)
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        //encontrar o botão
        const botao = screen.getByRole('button');
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Pipoca'
            }
        })
        // clicar no botao de submeter
        fireEvent.click(botao)
        // inserir um segundo valor no input
        fireEvent.change(input, {
            target: {
                value: 'Pipoca'
            }
        })
        // clicar no botao de submeter
        fireEvent.click(botao)
        let menssagemDeErro = screen.queryByRole('alert')
        expect(menssagemDeErro).toBeInTheDocument()
        // esperar n segundos
        act(() => {
            jest.runAllTimers();
        });
        menssagemDeErro = screen.queryByRole('alert')
        expect(menssagemDeErro).toBeNull()
    })
})



