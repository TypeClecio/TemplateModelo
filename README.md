# TemplateBase

TemplateBase e um modelo base para iniciar novos projetos front-end com React. Ele fornece a configuracao minima para desenvolvimento rapido com hot reload e boas praticas de lint.

## Tecnologias
- React
- TypeScript
- Vite
- React Router
- SCSS
- ESLint

## Como usar

### Instalacao
```bash
npm install
```

### Ambiente de desenvolvimento
```bash
npm run dev
```

### Build de producao
```bash
npm run build
```

### Pre-visualizacao do build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Estrutura basica
- `src/` codigo-fonte da aplicacao
- `src/features/` telas/fluxos por feature (cada pasta e uma tela ou dominio)
- `src/data/` conteudos estaticos (textos, listas, mock basico)
- `src/interfaces/` tipos e interfaces compartilhadas
- `src/shared/` componentes e utilitarios reutilizaveis
- `src/routes/` rotas
- `src/styles/` estilos globais
- `public/` arquivos estaticos (robots, sitemap, manifest, favicon)

## Como pensar nas pastas (explicacao simples)
- `features/` guarda a tela completa com seus estilos e componentes locais.
- `data/` guarda textos e dados separados do JSX.
- `interfaces/` centraliza as tipagens para manter consistencia.
- `shared/` guarda tudo que e usado em mais de uma tela.
Se algo e exclusivo de uma tela, fica dentro da propria pasta da feature.

## Aliases de importacao
Para manter os imports limpos, use:
- `@features` para telas/fluxos
- `@data` para conteudos
- `@interfaces` para tipos
- `@shared` para componentes comuns
Exemplo simples:
```ts
import { homeContent } from '@data'
```

## Observacoes
Sinta-se a vontade para ajustar este template conforme as necessidades do seu projeto.

## SEO (Importante)
**E essencial atualizar as configuracoes de SEO** (title, description, sitemap, robots e manifest) para refletir o seu projeto e dominio.
