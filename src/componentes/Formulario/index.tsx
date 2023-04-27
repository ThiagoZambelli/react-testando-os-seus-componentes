import { useState, useRef } from 'react';
import styles from './Formulario.module.scss';
import { useAdicionaParticipante } from 'state/hooks/useAdicionaParticipante';
import { useMenssagemDeErro } from 'state/hooks/useMenssagemDeErro';

export default function Formulario() {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionar = useAdicionaParticipante();

  const errorMenssage = useMenssagemDeErro();

  const adicionarNomeALista = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    adicionar(nome);
    setNome('')
    inputRef.current?.focus();
  }

  return (
    <>
      <form className={styles.formulario} onSubmit={adicionarNomeALista}>
        <input
          ref={inputRef}
          type='text'
          placeholder='Insira os nomes dos participantes'
          value={nome}
          onChange={event => setNome(event.target.value)}
        />
        <button
          disabled={!nome}
        >Adicionar</button>
      </form>
      {errorMenssage && <p role='alert' className={styles.alert}>{errorMenssage}</p>}
    </>
  )
}
