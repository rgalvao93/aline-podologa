# Método de trabalho

Esta pasta é o **esqueleto replicável** do projeto: define como organizamos documentos e processos aqui, de forma que a mesma estrutura possa ser copiada para projetos futuros — inclusive os que terão fluxos e agentes autônomos.

## Estrutura do projeto

```
aline-podologa/
├── anotações-iniciais.md     # contexto bruto do projeto (não editar; é o registro original)
├── plano-lancamento.md       # cronograma com marcos até a inauguração
├── docs/                     # imagens e materiais de referência
├── metodo/                   # este esqueleto (replicável em outros projetos)
│   ├── README.md             # este arquivo
│   ├── template-processo.md  # modelo padrão para documentar processos
│   └── fases-do-projeto.md   # framework de fases com critérios de conclusão
└── processos/                # processos do negócio, um por arquivo
```

## Convenções

- **Idioma**: tudo em PT-BR.
- **Nomes de arquivo**: kebab-case em PT-BR; acentos são permitidos (ex.: `anotações-iniciais.md`).
- **Um processo por arquivo**, sempre seguindo [template-processo.md](template-processo.md). Não inventar seções novas nem omitir seções do template.
- **Informação faltante**: nunca inventar conteúdo do negócio. Lacunas ficam marcadas como `[PENDENTE: descrição do que falta]` — assim fica fácil buscar por `PENDENTE` e listar tudo que ainda precisa ser levantado.
- **Status do processo**: cada processo declara seu status no topo — `rascunho` → `validado` (conferido com a dona do negócio) → `automatizado` (existe fluxo/agente executando).

## Por que documentar processos assim

Um processo mapeado com **gatilho → entradas → passos → saídas** é, na prática, a especificação de um fluxo automatizado: o gatilho vira o evento que dispara a automação, as entradas viram os dados que o fluxo consome, os passos viram as ações do agente e as saídas viram o resultado verificável. A seção "Potencial de automação" de cada processo já indica quais passos são candidatos, sem amarrar a uma ferramenta específica.

## Como replicar em um novo projeto

1. Copiar a pasta `metodo/` inteira para o novo repositório.
2. Criar um arquivo de contexto bruto (equivalente a `anotações-iniciais.md`) com dores, solicitações, prazos e objetivo final.
3. Criar a pasta `processos/` e documentar cada processo usando o template.
4. Adaptar `fases-do-projeto.md` se as fases do novo projeto forem diferentes.
5. Criar o plano com marcos (equivalente a `plano-lancamento.md`) amarrando processos às fases.
6. Quando for construir automações, partir da seção "Potencial de automação" dos processos com status `validado`.
