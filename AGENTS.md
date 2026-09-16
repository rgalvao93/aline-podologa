# AGENTS.md — Aline Podologa (repositório de planejamento de negócio)

## O que é este repositório
**Não é um projeto de software.** Repositório de planejamento e conteúdo para o lançamento da "Aline Podologa" — podóloga migrando de manicure/pedicure. Meta: clientes inaugurais até outubro de 2026.

Sem código, dependências, build, lint, testes. Não sugira scaffolding (package.json, CI, etc.) a menos que explicitamente solicitado.

## Estrutura
```
aline-podologa/
├── anotações-iniciais.md      # contexto bruto do projeto (fonte da verdade — não editar)
├── plano-lancamento.md        # cronograma de marcos até a inauguração
├── docs/                      # imagens de referência para marketing/catálogo
├── metodo/                    # esqueleto de método replicável (copiar para projetos futuros)
│   ├── README.md              # convenções e guia de replicação
│   ├── template-processo.md   # template padrão de processos
│   └── fases-do-projeto.md    # framework de fases com critérios de conclusão
└── processos/                 # um arquivo por processo de negócio (segue o template)
```

## Convenções-chave (de `metodo/README.md`)
- **Idioma**: apenas PT-BR
- **Nomes de arquivo**: kebab-case PT-BR, acentos permitidos (`anotações-iniciais.md`)
- **Um processo por arquivo**, sempre usando `metodo/template-processo.md`
- **Informação faltante**: nunca inventar conteúdo do negócio. Marque lacunas como `[PENDENTE: descrição]` — pesquisável via `PENDENTE`
- **Status do processo** (declarado no topo): `rascunho` → `validado` (confirmado com a dona) → `automatizado` (fluxo/agente executando)

## Como trabalhar aqui
Tarefas típicas: planejamento, redação de conteúdo, organização de materiais, estruturação de automações de atendimento/agendamento — **não desenvolvimento de software**. Ao propor automação (ex.: agendamento automático), recomende ferramentas/fluxos, não implementação de código.

## Contexto crítico (de `anotações-iniciais.md`)
- **Prazo**: lançamento outubro/2026; objetivo = clientes captados até o lançamento
- **Dor principal**: tempo perdido respondendo dúvidas repetidas de clientes → motiva interesse em automação
- **Frentes solicitadas**: novos atendimentos, automação, agendamento automático, links de CTA, foto/vídeo, catálogo
- **Fases planejadas**: criar base de recebimento de clientes → gerar conteúdos → analisar dados → replicar o que funcionou
- **Gap aberto**: ainda não há fotos/vídeos de referência consolidados

## Estrutura do template de processo (`metodo/template-processo.md`)
Cada arquivo de processo tem:
1. **Status** + **Responsável**
2. **Objetivo** — o que entrega e por que existe
3. **Gatilho** — evento observável que inicia (vira trigger de automação)
4. **Entradas** — informações/materiais/acessos necessários
5. **Passos** — ações concretas e ordenadas
6. **Saídas** — resultados verificáveis ao final
7. **Métricas de sucesso** — números simples de coletar
8. **Potencial de automação** — tabela mapeando passos → candidatos a automação (agnóstico a ferramenta)

## Faça / Não faça
| Faça | Não faça |
|------|----------|
| Siga `template-processo.md` exatamente para novos processos | Inventar conteúdo do negócio — use `[PENDENTE: ...]` |
| Mantenha PT-BR, nomes em kebab-case | Sugerir scaffolding de código a menos que pedido |
| Trate processos como specs de automação (gatilho→entradas→passos→saídas) | Adicionar seções fora do template |
| Marque status honestamente (`rascunho`/`validado`/`automatizado`) | Assumir que fotos/vídeos existem — ainda não existem |