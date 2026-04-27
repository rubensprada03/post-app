# PostsApp

Aplicação web desenvolvida como parte do processo seletivo para a vaga de Desenvolvedor Frontend Júnior. Consome a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para listar e exibir posts de forma navegável.

---

## Tecnologias utilizadas

- [React 18](https://react.dev/) — biblioteca principal
- [Vite](https://vitejs.dev/) — bundler e ambiente de desenvolvimento
- [React Router DOM v6](https://reactrouter.com/) — navegação entre páginas
- [Styled Components v6](https://styled-components.com/) — estilização com CSS-in-JS

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/posts-app.git
cd posts-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

```bash
# Para gerar o build de produção
npm run build

# Para visualizar o build localmente
npm run preview
```

---

## Funcionalidades

### Página Inicial — Lista de Posts
- Busca todos os posts da API e exibe título e prévia do conteúdo (primeiros 25 caracteres do body)
- Filtro de busca em tempo real por título
- Paginação com **Load More** — exibe 9 posts por vez para não sobrecarregar a interface
- Estados de loading e erro tratados

### Página de Detalhe — `/posts/:id`
- Exibe todas as informações do post: título, corpo completo e ID do usuário
- Breadcrumb de navegação e botão para voltar à listagem
- Busca o post individualmente na API pelo ID da URL

---

## Estrutura do projeto

```
src/
├── components/        # Componentes reutilizáveis de UI
│   ├── Header
│   ├── PostCard
│   ├── SearchBar
│   ├── Loader
│   └── ErrorMessage
├── pages/             # Páginas da aplicação
│   ├── Home
│   └── PostDetail
├── hooks/             # Hooks customizados
│   ├── usePosts.js    # Busca de posts na API
│   └── useLoadMore.js # Lógica de paginação
├── services/
│   └── api.js         # Comunicação centralizada com a API
├── styles/
│   ├── theme.js        # Tokens de design (cores, espaçamento, tipografia)
│   └── GlobalStyles.js # Estilos globais
└── routes/
    └── AppRoutes.jsx   # Definição das rotas
```

Cada componente segue o padrão `Componente.jsx` + `Componente.styles.js`, mantendo a lógica de apresentação separada da estilização.

---

## Decisões de implementação

**Separação de responsabilidades em camadas**
A aplicação foi organizada em camadas bem definidas: `services` para comunicação com a API, `hooks` para lógica reutilizável e `components` apenas para apresentação. Isso mantém cada arquivo com uma única responsabilidade e facilita manutenção.

**Custom hooks**
`usePosts` e `usePost` encapsulam toda a lógica de fetch, incluindo os estados de loading e erro, expondo uma interface limpa para as páginas. O `useLoadMore` isola a lógica de paginação, que pode ser reutilizado em qualquer lista futura.

**Cancelamento de requisições**
Os hooks utilizam uma flag `cancelled` no cleanup do `useEffect` para evitar atualização de estado em componentes desmontados — prevenindo memory leaks e warnings do React.

**Load More client-side**
A JSONPlaceholder não suporta paginação server-side, então todos os posts são carregados em uma única requisição e o controle de exibição é feito no cliente. Ao filtrar pela busca, a paginação é resetada automaticamente para o início.

**Estilização com arquivos separados**
Cada componente tem seu próprio arquivo `.styles.js`, evitando arquivos longos e mistura de responsabilidades. O `ThemeProvider` centraliza os tokens de design (cores, espaçamentos, sombras), garantindo consistência visual em toda a aplicação.
