import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sortei o proprio nome', () => {
        const participantes = [
            'pipoca',
            'perito',
            'botas',
            'kiti',
            'jubileu'
        ]

        const sorteio = realizarSorteio(participantes);
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante);
        })
    })
})