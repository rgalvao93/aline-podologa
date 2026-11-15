# Site Aline Podologa — landing page

Site institucional da Aline Amaral — Podóloga Premium. Feito para apresentar o negócio e captar clientes antes da inauguração (outubro/2026).

## Status: rascunho

Conteúdo de demonstração revisado pelo dono do projeto, aguardando aprovação da Aline.
Nada vai ao ar antes da troca para `status: "no-ar"` no `config.js`.

## Editar o site (sem tocar no código)

Quase tudo o que o site exibe vive em **`config.js`**: textos, cores
(identidade), imagens, serviços, FAQ e contatos. Para publicar uma mudança de
conteúdo, basta editar ali — o `app.js` apenas renderiza o que está no config.

Pontos principais:

- `status`: `"rascunho"` → faixa no topo + `noindex` · `"no-ar"` → site público
- `tema`: paleta e fontes (identidade visual)
- `imagens`: logo/selo → `assets/`
- `servicos`: catálogo em grupos (`Podologia`, `Estética e bem-estar`)
- `galeria`: fotos em `assets/galeria/`
- `duvidas`: FAQ (as respostas finais saem do processo `../processos/faq-clientes.md`, após validação da Aline)
- `contato`: WhatsApp, Instagram, Facebook, endereço e horários

## Clonar para outro cliente

1. `cp -r site cliente-novo/`
2. No `config.js`: trocar `seo`, `marca`, `tema` (cores/fontes), `imagens`,
   `hero`/`sobre`, `pilares`, `servicos`, `galeria`, `duvidas`, `contato`.
3. Trocar os arquivos de `assets/` (logo, selo e fotos).
4. Ícones próprios: `ICONES` no `app.js` (linha art, `currentColor`).
5. Se trocar de segmento (não podólogo), rever `hero.olho`, `pilares` e os
   textos soltos.

Não é necessário build; o site é HTML/CSS/JS puro.

## Publicar na Vercel

- **Import**: apontar para o repositório e definir o **Root Directory** para `site/`.
- **Framework**: `Other` (static) — zero configuração de build, sem variáveis de ambiente.
- Deploy automático a cada push na `main`.

## Estrutura

```
site/
├── index.html      # estrutura (não editar conteúdo)
├── styles.css      # tokens de design (CSS custom properties)
├── config.js       # FONTE ÚNICA DE VERDADE — editar aqui
├── app.js          # renderizador (ícones, grupos, FAQ, contato)
└── assets/         # logo, selo e fotos da galeria
```
