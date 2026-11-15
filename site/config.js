/* =========================================================================
   ALINE PODÓLOGA — config.js
   =========================================================================
   FONTE ÚNICA DE VERDADE DO SITE.

   Tudo que varia de um cliente para outro vive neste arquivo: textos,
   cores, fontes, imagens, serviços, FAQ e contatos. Para clonar o site
   para outro profissional, troque APENAS este arquivo + as imagens de
   assets/ (passo a passo no README.md).

   CONVENÇÃO DE PENDÊNCIAS (regra do repositório): conteúdos que dependem
   da Aline ficam como "[PENDENTE: descrição]" — o site renderiza esses
   valores como blocos tracejados. Nunca inventar conteúdo do negócio.

   Status do conteúdo:
   - "rascunho" → exibe faixa de aviso no topo e pede noindex (seguro)
   - "no-ar"    → faixa some e o site pode ser publicado
   ========================================================================= */

window.SITE_CONFIG = {
  /* ------------------------------------------------------------------ */
  /* 1. STATUS — trocar para "no-ar" só depois de resolver os PENDENTE   */
  /* ------------------------------------------------------------------ */
  status: "rascunho",

  /* ------------------------------------------------------------------ */
  /* 2. SEO — título e descrição das metatags                           */
  /* ------------------------------------------------------------------ */
  seo: {
    titulo: "Aline Amaral — Podóloga Premium",
    descricao:
      "Cuidar dos seus pés é cuidar de você. Atendimento podológico premium: saúde dos pés, bem-estar, segurança e cuidado que transforma.",
  },

  /* ------------------------------------------------------------------ */
  /* 3. TEMA — identidade visual. Clonar = trocar estes valores          */
  /* ------------------------------------------------------------------ */
  tema: {
    fundo: "#FBF7F1", // fundo principal (marfim)
    creme: "#F0E6D9", // seções alternadas (creme)
    rose: "#C4897A", // cor da marca (rosé/terracota)
    tinta: "#3A2B25", // texto principal (marrom escuro)
    tintaSuave: "#5E4A41", // texto secundário
    ouro: "#B8945F", // dourado (bordas e ícones grandes)
    ouroTexto: "#7A5B2F", // dourado escuro (texto/ícones com contraste AA)
    fonteDisplay: "'Cormorant Garamond', Georgia, serif",
    fonteCorpo: "'Jost', 'Helvetica Neue', sans-serif",
  },

  /* ------------------------------------------------------------------ */
  /* 4. MARCA                                                            */
  /* ------------------------------------------------------------------ */
  marca: {
    nomeExibicao: "ALINE AMARAL",
    descritor: "PODÓLOGA PREMIUM",
    slogan: "Cuidar dos seus pés é cuidar de você.",
  },

  /* ------------------------------------------------------------------ */
  /* 5. IMAGENS — trocar os arquivos em assets/ ao clonar               */
  /* ------------------------------------------------------------------ */
  imagens: {
    selo: {
      src: "assets/selo-circular.jpg",
      alt: "Selo circular Aline Amaral Podóloga Premium com os pilares saúde dos pés, bem-estar, segurança e cuidado que transforma",
    },
    apresentacao: {
      src: "assets/logo-fundo-rose.jpg",
      alt: "Logotipo dourado Aline Amaral Podóloga Premium sobre fundo rosé",
    },
  },

  /* ------------------------------------------------------------------ */
  /* 6. HERO (seção inicial)                                            */
  /* ------------------------------------------------------------------ */
  hero: {
    olho: "Podologia premium",
    // RASCUNHO: frase de apoio — aprovar com a Aline
    texto:
      "Atendimento podológico individual, feito com cuidado, segurança e a experiência de um serviço premium.",
    ctaPrincipal: "Agendar pelo WhatsApp",
  },

  /* ------------------------------------------------------------------ */
  /* 7. PILARES — conteúdo confirmado (vem do selo da identidade)       */
  /* ------------------------------------------------------------------ */
  pilares: [
    { icone: "pe", titulo: "Saúde dos pés" },
    { icone: "lotus", titulo: "Bem-estar" },
    { icone: "escudo", titulo: "Segurança" },
    { icone: "maos", titulo: "Cuidado que transforma" },
  ],

  /* ------------------------------------------------------------------ */
  /* 8. SOBRE                                                           */
  /*     RASCUNHO INVENTADO (apresentação à Aline) — sem formação,      */
  /*     diplomas ou registros inventados. Substituir pelo texto dela.  */
  /* ------------------------------------------------------------------ */
  sobre: {
    olho: "Quem cuida de você",
    titulo: "Sobre a Aline",
    texto:
      "Há anos cuidando de mãos e pés com o mesmo capricho — primeiro como manicure e pedicure, agora dando um passo à frente com a podologia. Aqui cada atendimento começa com uma conversa e uma avaliação individual, com tempo de verdade para entender o que os seus pés estão pedindo. O cuidado continua em casa: orientação personalizada para cada caso, porque cuidar dos pés é um processo, não um evento.",
  },

  /* ------------------------------------------------------------------ */
  /* 9. SERVIÇOS (catálogo)                                             */
  /*     RASCUNHO INVENTADO (apresentação à Aline) — nomes e preços     */
  /*     ilustrativos para o catálogo. Substituir pelos definidos com   */
  /*     a Aline. Podologia NÃO é pedicure: são serviços distintos.     */
  /* ------------------------------------------------------------------ */
  servicos: {
    olho: "Catálogo",
    titulo: "Serviços",
    grupos: [
      {
        nome: "Podologia",
        itens: [
          {
            nome: "Avaliação podológica",
            descricao:
              "Conversa e análise individual dos pés, unhas e pele antes de qualquer procedimento.",
            preco: "a partir de R$ 120",
            destaque: true,
          },
          {
            nome: "Unha encravada",
            descricao: "Avaliação e cuidado individualizado, com orientação para casa.",
            preco: "a partir de R$ 150",
          },
          {
            nome: "Calosidades e rachaduras",
            descricao: "Tratamento e orientação preventiva personalizada.",
            preco: "a partir de R$ 130",
          },
          {
            nome: "Reflexologia",
            descricao: "Sessão de reflexologia para alívio, relaxamento e bem-estar.",
            preco: "a partir de R$ 120",
          },
          {
            nome: "Orientação podológica",
            descricao: "Diagnóstico visual dos pés e plano de cuidados em casa.",
            preco: "a partir de R$ 80",
          },
        ],
      },
      {
        nome: "Estética e bem-estar",
        itens: [
          { nome: "Manicure", preco: "R$ 40" },
          { nome: "Pedicure", preco: "R$ 45" },
          { nome: "SPA dos pés", preco: "R$ 150" },
          { nome: "Botox Capilar", preco: "R$ 120" },
          { nome: "Progressiva", preco: "a partir de R$ 180" },
          { nome: "Hidratação", preco: "R$ 120" },
          { nome: "Depilação", preco: "a partir de R$ 40" },
          { nome: "Sobrancelhas", preco: "R$ 45" },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 9b. GALERIA — fotos reais (temporárias, recortadas do Instagram     */
  /*     @aline.amaral_nails). Trocar por fotos profissionais na          */
  /*     sessão de agosto/2026. Ao clonar, troque os itens.              */
  /* ------------------------------------------------------------------ */
  galeria: {
    olho: "Trabalho real",
    titulo: "Do nosso dia a dia",
    legenda:
      "Registro do @aline.amaral_nails — fotos temporárias até a sessão profissional.",
    itens: [
      {
        src: "assets/galeria/pes-transformation.png",
        alt: "Close de pés com esmaltação marrom sobre tecido satinado",
      },
      {
        src: "assets/galeria/pes-antes-depois.png",
        alt: "Montagem com quatro fotos de pés após francesinha nas unhas dos pés",
      },
      {
        src: "assets/galeria/esmaltacao-classica.png",
        alt: "Pé com francesinha clássica finalizada, fundo claro",
      },
      {
        src: "assets/galeria/espaco-salon.png",
        alt: "Interior do espaço Aline Amaral com poltronas de pedicure e espaço de atendimento",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 10. DÚVIDAS FREQUENTES                                             */
  /*     RASCUNHO INVENTADO (apresentação à Aline) — voz de "primeira    */
  /*     pessoa da Aline", para aprovação. O documento de referência      */
  /*     processos/faq-clientes.md permanece [PENDENTE] até a validação   */
  /*     dela; as respostas finais devem sair de lá.                      */
  /* ------------------------------------------------------------------ */
  duvidas: {
    olho: "Antes de agendar",
    titulo: "Dúvidas frequentes",
    itens: [
      {
        pergunta: "Quais serviços você oferece?",
        resposta:
          "Podologia completa: avaliação podológica, cuidado de unha encravada, calosidades e rachaduras, reflexologia e orientação personalizada. E você continua contando com tudo que já conhece do Espaço Aline Amaral: manicure, pedicure, SPA dos pés, depilação, sobrancelhas, botox capilar, progressiva e hidratação.",
      },
      {
        pergunta: "Quanto custa cada serviço?",
        resposta:
          "A avaliação podológica custa a partir de R$ 120. Os demais procedimentos variam conforme o caso — o catálogo completo está aqui no site. Pagamento em Pix, dinheiro ou cartão.",
      },
      {
        pergunta: "Qual a diferença entre podologia e pedicure?",
        resposta:
          "A pedicure cuida da estética das unhas e do acabamento dos pés — é beleza e manutenção. A podologia é o cuidado clínico e preventivo: eu avalio, previno e trato alterações de unhas e pele (como unhas encravadas e calosidades), sempre com consulta individual e orientação para a sua rotina.",
      },
      {
        pergunta: "Como faço para agendar?",
        resposta:
          "É simples: toque em qualquer botão de agendamento aqui no site e me chame no WhatsApp (11) 96127-0038. Você escolhe o melhor dia e horário e eu confirmo na sequência.",
      },
      {
        pergunta: "Quais dias e horários você atende?",
        resposta:
          "De segunda a sexta, das 9h às 19h, e aos sábados, das 9h às 16h. Fora desse horário, me deixa uma mensagem e respondo assim que puder.",
      },
      {
        pergunta: "Onde fica o consultório?",
        resposta:
          "Rua Marechal Deodoro, Barueri/SP — 06415-130. Fácil de achar e com estacionamento na rua por perto. Se preferir, toque no endereço na seção de contato para abrir o mapa.",
      },
    ],
    lateral: {
      titulo: "Ainda com dúvidas?",
      texto: "Antes de agendar, fale diretamente com a Aline.",
      cta: "Falar no WhatsApp",
    },
  },

  /* ------------------------------------------------------------------ */
  /* 11. CONTATO                                                        */
  /*     WhatsApp, Instagram, Facebook e endereço vêm da bio real do     */
  /*     Instagram @aline.amaral_nails. Horários: RASCUNHO INVENTADO     */
  /*     (confirmar com a Aline — ver processos/agendamento.md).         */
  /* ------------------------------------------------------------------ */
  contato: {
    olho: "Contato",
    titulo: "Agende sua consulta",
    texto: "Atendimento com hora marcada. Escolha o canal que preferir.",
    cta: "Agendar pelo WhatsApp",
    itens: {
      whatsapp: {
        icone: "whatsapp",
        rotulo: "WhatsApp",
        valor: "(11) 96127-0038",
        link: "https://wa.me/5511961270038",
      },
      instagram: {
        icone: "instagram",
        rotulo: "Instagram",
        valor: "@aline.amaral_nails",
        link: "https://www.instagram.com/aline.amaral_nails/",
      },
      facebook: {
        icone: "facebook",
        rotulo: "Facebook",
        valor: "Aline Amaral",
        link: "https://www.facebook.com/107789361616504",
      },
      endereco: {
        icone: "pin",
        rotulo: "Consultório",
        valor: "Rua Marechal Deodoro, Barueri/SP · 06415-130",
        link: "https://www.google.com/maps/search/?api=1&query=Rua%20Marechal%20Deodoro%2C%20Barueri%20SP%2006415-130",
      },
      horarios: {
        icone: "relogio",
        rotulo: "Horários",
        // RASCUNHO INVENTADO — confirmar com a Aline
        valor: "Seg–Sex · 9h às 19h · Sáb · 9h às 16h",
      },
    },
  },
};
