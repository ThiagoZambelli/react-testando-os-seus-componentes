import { render, screen } from "@testing-library/react"

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />)

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    //encontrar o botão
    const botao = screen.getByRole('button');

    //garantir que o input esta no documento
    expect(input).toBeInTheDocument()

    //garantir que o botao esta desabilitado
    expect(botao).toBeDisabled()
    
})