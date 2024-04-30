# web-dev-cp2

**Integrantes:**

- Bruno Dominicheli (554981)
- Larissa Lapa (554517)
- Nicole Bleinat (555359)
- Stephany Marques (557351)

## Setup de extensões do VSCode

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Rodando o projeto com o Live Server

1. Abra o explorador de arquivos
2. Clique com o botão direito no arquivo `index.html`, dentro da pasta `src`
3. Selecione a opção `Open with Live Server`

prontinho, o projeto será aberto no seu navegador padrão :tada:

## Como contribuir

### Começando o desenvolvimento de uma nova tarefa

1. Abra a pasta do projeto no VSCode
2. Abra o terminal do VSCode
3. Execute o comando `git fetch` para atualizar a lista de branches
4. Execute o comando `git switch main` para mudar para a branch principal
5. Execute o comando `git pull origin main` para atualizar a branch principal e garantir que você está com a versão mais atualizada do projeto
6. Execute o comando `git switch -c nome-da-sua-branch` para criar uma nova branch e mudar para ela

### Finalizando uma tarefa

#### Commitando e fazendo push de suas mudanças

##### Fluxo com Terminal

1. Adicione as mudanças feitas ao stage. Você pode fazer isso com os seguintes comandos:
    - `git add .` para adicionar todos os arquivos modificados
    - `git add caminho-do-arquivo` para adicionar um arquivo específico
    - `git add caminho-da-pasta/` para adicionar todos os arquivos de uma pasta
2. Faça um commit com as mudanças feitas seguindo a convenção de **[commits semânticos](https://github.com/iuricode/padroes-de-commits)**. Você pode fazer isso com o seguinte comando:
    - `git commit -m "tipo-do-commit: mensagem do commit"`
3. Faça push das mudanças para o repositório remoto. Você pode fazer isso com o seguinte comando:
    - `git push origin nome-da-sua-branch`

##### Fluxo com VSCode

1. Adicione as mudanças feitas ao stage:
    - Abra a aba `Source Control` (Ctrl + Shift + G)
    - Clique no botão `+` ao lado do arquivo modificado que deseja adicionar
2. Faça um commit com as mudanças feitas seguindo a convenção de **[commits semânticos](https://github.com/iuricode/padroes-de-commits)**:
    - Na mesma aba de `Source Control`, clique no campo de texto que diz `Message (press Ctrl+Enter to commit)` e digite a mensagem do commit
    - Pressione `Ctrl + Enter` ou clique no botão para fazer o commit
3. Faça push das mudanças para o repositório remoto:
     - Clique no mesmo botão que você clicou para fazer o commit que deverá estar com o título de `Sync Changes`

#### Abertura de Pull Request

1. Acesse a página do repositório no GitHub e clique na aba `Pull Requests`.
2. Clique em `New pull request`.
3. Selecione a branch que contém as alterações que você deseja mesclar: `base:main` <- `compare:nome-da-sua-branch`.
4. Clique em `Create pull request`.
5. Adicione um título e uma descrição para o seu pull request, detalhando as alterações feitas.
6. Clique novamente em `Create pull request` para finalizar a criação.
7. Aguarde a revisão do seu pull request por outros membros da equipe.
8. Após a aprovação, finalize a mesclagem clicando em `Merge pull request` e confirme a ação.
9. Para manter o repositório organizado, delete a branch usada para as alterações clicando em `Delete branch`.
