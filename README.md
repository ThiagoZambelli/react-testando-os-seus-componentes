![Alt text](public/assets/logoLithtleZ.svg)

&nbsp;


<img align="left" width="50%" style="margin-top:-20px" src="public/assets/eu.png">

</br>
</br>

<div dsplay="inline-block">

<h2 align="justify">React: testando os seus componentes</h2>
<h2 align="justify">Feito por : Thiago Zambelli</h2>
<h3 align="justify">Entrando no mundo dos testes para React JS/TS</h3>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

- [Projeto](#projeto)
- [Problemas e Soluções](#problemas__solucoes)
- [Aulas](#aulas)

&nbsp;

---

# Projeto -> <div id="porjeto"></div>

## Ideia do projeto:
> O projeto consiste em aprender a  criar e manipular testes para os componentes React. Para isso sera utilizado o JEST e a biblioteca nativa de testes do React!

&nbsp;

## TDD
> TEST DRIVEN DEVELOPMENT (Desenvolvimento Orientado a Teste), baseia-se em desenvolver a apalicação se orientando pelo teste.

&nbsp;

## Piramide de Teste
  >![Alt text](public/assets/piramideDeTeste.png)
  
> Unidade > Serviço > Interface
  - Unidade: ALtavelocidade em desenvolver e testar, pos e feito para se usar em cada unidade do componente alem de ser mais barato.
  - Serviço: Teste feito com diversoso componentes ao mesmo tempo (um serviço).
  - Interface: mais caro e mais demorado dos testes. 

&nbsp;

## AAA (Arrange, Act and Assert em inglês)
> Padrao utilizado para criação de teste:
~~~JavaScript
  test('um nome que descreve o que vamos testar', () => {
    // arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)

    // agimos (realizamos clicks, definimos valores)

    // afirmamos o que queremos (onde realizamos as expectativas)
})
~~~

&nbsp;

---

# Aulas -> <div id="aulas"></div>

## Aula 1:

- Rodamos o script que executa os testes implementados;
- Encontramos elementos na tela usando a @testing-library/react;
- Analisamos a saída o script de testes;
- Diferenciamos os tipos testes existentes;
- Desenvolvemos um componente utilizando TDD.
