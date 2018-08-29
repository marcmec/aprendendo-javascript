# aprendendo-javascript
Repositório criado para exercícios em JavaScript.

# **Observações**

* Só será aceita codificação em JavaScript;
* Deixe o seu código padronizado.

# **Padrões**

* Para uma nova lista de exercício, observe a sequência das já que foram criadas e crie "lista0x", onde x é o número;
* Todos os exercícios devem ser escritos por "Qx-primeiro nome", por exemplo, "Q1-mayara" em que "Q" significa Questão e "1" o primeiro exercício da lista. 

# Contribuições

### Por onde começar?

**1.** Faça o _fork_ do projeto.

**2.** [Entenda o fluxo](#fluxo).

**3.** [Leia e pratique as boas práticas](#boas-pr%C3%A1ticas).

### Fluxo

Qualquer tipo de ajuda (seja ela grande ou pequena) é bem-vinda.

**1.** Faça referência ao repositório oficial após o _fork_ 

```
git remote add upstream git@github.com:mayararysia/aprendendo-javascript.git
```

**2.** Antes de iniciar o processo de contribuição, crie uma **nova branch** para fazer suas alterações.

Alguns exemplos:

- Para adicionar exercício na lista: `git checkout -b novoexercicioListaX`
- Para erros: `git checkout -b correcaoListaX`

> Use qualquer palavra coerente com a contribuição que está sendo feita.
> `X` representa o número da lista.

**3.** Após realizar as alterações, faça um commit com uma mensagem do que foi feito. Exemplo:

```
git add --all
git commit -am ‘Adiciona novo exercício/correção/melhoria na listaX’
git push origin novoexercicioListaX
```

**4.** Envie um _Pull Request_ com as alterações feitas, fazendo referência para o `master`.

Após o merge:

- Delete a branch utilizada:

```
git checkout master
git push origin : novoexercicioListaX
git branch -D novoexercicioListaX
```

- Atualize seu repositório com o repositório oficial:

```
git fetch upstream
git rebase upstream/master
git push -f origin master
```

**6.** Em uma nova contribuição inicie repita o processo pelo passo 2.

### Boas práticas

- Antes de enviar sua contribuição se certifique de que está enviando apenas um **único** commit que represente o que foi feito;
- Sempre Estude o Git em caso de dúvidas.

Obrigada! :heart:

