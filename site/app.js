/* =========================================================================
   ALINE PODÓLOGA — app.js
   Lê window.SITE_CONFIG (config.js) e renderiza o site.
   Não há conteúdo de negócio hardcoded aqui: tudo vem do config.
   ========================================================================= */

(function () {
  "use strict";

  var cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.error("SITE_CONFIG não encontrado — verifique se config.js carrega antes de app.js.");
    return;
  }

  document.documentElement.classList.add("js");

  /* ----------------------------- utilidades ---------------------------- */

  function resolver(caminho) {
    return String(caminho)
      .split(".")
      .reduce(function (obj, chave) {
        return obj == null ? undefined : obj[chave];
      }, cfg);
  }

  function ehPendente(valor) {
    return typeof valor === "string" && valor.trim().indexOf("[PENDENTE") === 0;
  }

  function escapar(valor) {
    return String(valor)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function marcarPendente(el) {
    el.classList.add("pendente");
    if (["P", "DIV", "LI", "FIGURE"].indexOf(el.tagName) !== -1) {
      el.classList.add("pendente--bloco");
    }
  }

  /* ------------------------------- ícones ------------------------------ */
  /* Line art dourado — trocar ao clonar para outro segmento se necessário */

  var traco = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';

  var ICONES = {
    pe:
      '<svg viewBox="0 0 48 48" aria-hidden="true" ' + traco + '>' +
      '<ellipse cx="24" cy="29.5" rx="10" ry="12.5"/>' +
      '<circle cx="14.6" cy="13.5" r="2.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="20.6" cy="10.5" r="2.8" fill="currentColor" stroke="none"/>' +
      '<circle cx="26.8" cy="10.5" r="2.8" fill="currentColor" stroke="none"/>' +
      '<circle cx="32.8" cy="13.5" r="2.5" fill="currentColor" stroke="none"/>' +
      '<circle cx="37.5" cy="18.5" r="2" fill="currentColor" stroke="none"/>' +
      "</svg>",
    lotus:
      '<svg viewBox="0 0 48 48" aria-hidden="true" ' + traco + ">" +
      '<path d="M24 41C20.5 33 20.5 23 24 11.5 27.5 23 27.5 33 24 41Z"/>' +
      '<path d="M24 41C17 34.5 13.5 26.5 14 17.5 19.5 24 22.5 32 24 41Z"/>' +
      '<path d="M24 41C31 34.5 34.5 26.5 34 17.5 28.5 24 25.5 32 24 41Z"/>' +
      '<path d="M24 41C15 39.5 8.5 34 7 25.5 12.5 27 19.5 32.5 24 41Z"/>' +
      '<path d="M24 41C33 39.5 39.5 34 41 25.5 35.5 27 28.5 32.5 24 41Z"/>' +
      "</svg>",
    escudo:
      '<svg viewBox="0 0 48 48" aria-hidden="true" ' + traco + ">" +
      '<path d="M24 5.5 40 11.5V24c0 10-6.5 17.5-16 20.5C14.5 41.5 8 34 8 24V11.5Z"/>' +
      '<path d="m16.5 24 5 5.5L32 18"/>' +
      "</svg>",
    maos:
      '<svg viewBox="0 0 48 48" aria-hidden="true" ' + traco + ">" +
      '<path d="M24 33C13 25.5 11.5 19.5 15 16.8 18.2 14.3 22.5 16.2 24 19.5 25.5 16.2 29.8 14.3 33 16.8 36.5 19.5 35 25.5 24 33Z"/>' +
      '<path d="M7 26.5c.5 10 7.5 17 17 19.5 9.5-2.5 16.5-9.5 17-19.5"/>' +
      '<path d="M13.5 30.5c1.5 6.5 5.5 10.5 10.5 12 5-1.5 9-5.5 10.5-12"/>' +
      "</svg>",
    whatsapp:
      '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' +
      '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>' +
      "</svg>",
    instagram:
      '<svg viewBox="0 0 24 24" aria-hidden="true" ' + traco + ">" +
      '<rect x="3" y="3" width="18" height="18" rx="5.2"/>' +
      '<circle cx="12" cy="12" r="4"/>' +
      '<circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>' +
      "</svg>",
    facebook:
      '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' +
      '<path d="M15.5 3h-2.6A5.4 5.4 0 0 0 7.5 8.4V11H5v3.6h2.5v6.4h3.9v-6.4h3.1l.5-3.6h-3.6V8.7c0-.9.6-1.4 1.5-1.4h2.6V3Z"/>' +
      "</svg>",
    pin:
      '<svg viewBox="0 0 24 24" aria-hidden="true" ' + traco + ">" +
      '<path d="M12 21.5S5 16 5 10.5a7 7 0 1 1 14 0C19 16 12 21.5 12 21.5Z"/>' +
      '<circle cx="12" cy="10.2" r="2.6"/>' +
      "</svg>",
    relogio:
      '<svg viewBox="0 0 24 24" aria-hidden="true" ' + traco + ">" +
      '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.2V12l3.2 2.2"/>' +
      "</svg>",
  };

  /* -------------------------------- tema ------------------------------- */

  var MAPA_TEMA = {
    fundo: "--c-fundo",
    creme: "--c-creme",
    rose: "--c-rose",
    tinta: "--c-tinta",
    tintaSuave: "--c-tinta-suave",
    ouro: "--c-ouro",
    ouroTexto: "--c-ouro-texto",
    fonteDisplay: "--f-display",
    fonteCorpo: "--f-corpo",
  };

  if (cfg.tema) {
    Object.keys(MAPA_TEMA).forEach(function (chave) {
      var valor = cfg.tema[chave];
      if (valor) {
        document.documentElement.style.setProperty(MAPA_TEMA[chave], valor);
      }
    });
  }

  /* -------------------------------- seo ------------------------------- */

  if (cfg.seo) {
    if (cfg.seo.titulo) {
      document.title = cfg.seo.titulo;
      definirMeta('property="og:title"', cfg.seo.titulo);
    }
    if (cfg.seo.descricao) {
      definirMeta('name="description"', cfg.seo.descricao);
      definirMeta('property="og:description"', cfg.seo.descricao);
    }
  }

  function definirMeta(seletor, conteudo) {
    var meta = document.head.querySelector("meta[" + seletor + "]");
    if (meta) meta.setAttribute("content", conteudo);
  }

  /* Rascunho não deve ser indexado por buscadores */
  if (cfg.status === "rascunho") {
    var noindex = document.createElement("meta");
    noindex.name = "robots";
    noindex.content = "noindex";
    document.head.appendChild(noindex);
  }

  /* --------------------------- campos estáticos ------------------------ */

  document.querySelectorAll("[data-campo]").forEach(function (el) {
    var valor = resolver(el.dataset.campo);
    if (valor == null) return;
    el.textContent = valor;
    if (ehPendente(valor)) marcarPendente(el);
  });

  document.querySelectorAll("[data-src]").forEach(function (img) {
    var valor = resolver(img.dataset.src);
    if (valor && valor.src) {
      img.src = valor.src;
      if (valor.alt) img.alt = valor.alt;
    }
  });

  document.querySelectorAll("[data-icone]").forEach(function (el) {
    var svg = ICONES[el.dataset.icone];
    if (svg) el.innerHTML = svg;
  });

  /* --------------------------- links (CTAs) ---------------------------- */
  /* Link pendente vira um bloco tracejado não clicável — nunca um href
     quebrado. */

  document.querySelectorAll("[data-link]").forEach(function (el) {
    var valor = resolver(el.dataset.link);
    if (typeof valor === "string" && valor && !ehPendente(valor)) {
      el.setAttribute("href", valor);
      return;
    }
    var span = document.createElement("span");
    span.className = el.className + " pendente";
    span.textContent = el.textContent;
    span.title = typeof valor === "string" ? valor : "Link pendente";
    el.replaceWith(span);
  });

  /* ------------------------------- listas ------------------------------ */

  function renderizar(seletor, html) {
    var el = document.querySelector(seletor);
    if (el && html) el.innerHTML = html;
    return el;
  }

  /* Pilares (conteúdo confirmado da identidade) */
  renderizar(
    '[data-lista="pilares"]',
    (cfg.pilares || [])
      .map(function (item, i) {
        return (
          '<li class="pilares-item rev" style="--d:' + i * 0.08 + 's">' +
          '<span class="pilares-icone" aria-hidden="true">' +
          (ICONES[item.icone] || "") +
          "</span>" +
          '<h3 class="pilares-titulo">' +
          escapar(item.titulo) +
          "</h3>" +
          "</li>"
        );
      })
      .join("")
  );

  /* Serviços — grupos (podologia + estética). Grupo vazio = bloco de pendência */
  var gruposServicos = (cfg.servicos && cfg.servicos.grupos) || [];
  renderizar(
    '[data-lista="servicos"]',
    gruposServicos
      .map(function (grupo, gi) {
        var corpo;
        if (!grupo.itens || !grupo.itens.length) {
          corpo =
            '<div class="pendente pendente--bloco pendente--destaque">' +
            escapar(
              grupo.pendente ||
                "[PENDENTE: lista de serviços — definir com a Aline]"
            ) +
            "</div>";
        } else {
          corpo =
            '<div class="servicos-grid">' +
            grupo.itens
              .map(function (item, i) {
                var classes =
                  "servico rev" + (item.destaque ? " servico--destaque" : "");
                return (
                  '<article class="' +
                  classes +
                  '" style="--d:' +
                  (i % 4) * 0.08 +
                  's">' +
                  "<h3>" +
                  escapar(item.nome) +
                  "</h3>" +
                  (item.descricao ? "<p>" + escapar(item.descricao) + "</p>" : "") +
                  (item.preco
                    ? '<p class="servico-preco">' + escapar(item.preco) + "</p>"
                    : "") +
                  "</article>"
                );
              })
              .join("") +
            "</div>";
        }
        return (
          '<div class="servicos-grupo rev" style="--d:' +
          gi * 0.1 +
          's">' +
          '<h3 class="servicos-grupo-nome">' +
          escapar(grupo.nome) +
          "</h3>" +
          corpo +
          "</div>"
        );
      })
      .join("")
  );

  /* Galeria — fotos reais (temporárias até a sessão profissional) */
  var itensGaleria = (cfg.galeria && cfg.galeria.itens) || [];
  renderizar(
    '[data-lista="galeria"]',
    itensGaleria
      .map(function (item, i) {
        return (
          '<li class="galeria-item rev" style="--d:' + i * 0.08 + 's">' +
          '<img src="' +
          escapar(item.src) +
          '" alt="' +
          escapar(item.alt || "") +
          '" loading="lazy" width="282" height="375">' +
          "</li>"
        );
      })
      .join("")
  );

  /* FAQ — perguntas reais de processos/faq-clientes.md */
  renderizar(
    '[data-lista="duvidas"]',
    ((cfg.duvidas && cfg.duvidas.itens) || [])
      .map(function (item, i) {
        var resposta = ehPendente(item.resposta)
          ? '<span class="pendente pendente--bloco">' +
            escapar(item.resposta) +
            "</span>"
          : "<p>" + escapar(item.resposta) + "</p>";
        return (
          '<details class="faq-item rev" style="--d:' + i * 0.06 + 's">' +
          "<summary>" +
          escapar(item.pergunta) +
          "</summary>" +
          '<div class="faq-resposta">' +
          resposta +
          "</div>" +
          "</details>"
        );
      })
      .join("")
  );

  /* Contatos */
  var itensContato = (cfg.contato && cfg.contato.itens) || {};
  renderizar(
    '[data-lista="contatos"]',
    Object.keys(itensContato)
      .map(function (chave, i) {
        var item = itensContato[chave];
        var valor;
        if (ehPendente(item.valor)) {
          valor =
            '<span class="pendente" title="' +
            escapar(item.valor) +
            '">' +
            escapar(item.valor) +
            "</span>";
        } else if (item.link && !ehPendente(item.link)) {
          valor =
            '<p class="contato-valor"><a href="' +
            escapar(item.link) +
            '">' +
            escapar(item.valor) +
            "</a></p>";
        } else {
          valor = '<p class="contato-valor">' + escapar(item.valor) + "</p>";
        }
        return (
          '<li class="contato-item rev" style="--d:' + i * 0.08 + 's">' +
          '<span class="contato-icone" aria-hidden="true">' +
          (ICONES[item.icone] || "") +
          "</span>" +
          '<p class="contato-rotulo">' +
          escapar(item.rotulo) +
          "</p>" +
          valor +
          "</li>"
        );
      })
      .join("")
  );

  /* ---------------------------- aviso rascunho ------------------------- */

  var aviso = document.getElementById("aviso-rascunho");
  if (aviso) {
    if (cfg.status === "rascunho") aviso.hidden = false;
    var fechar = document.getElementById("aviso-fechar");
    if (fechar) {
      fechar.addEventListener("click", function () {
        aviso.hidden = true;
      });
    }
  }

  /* ----------------------------- menu mobile --------------------------- */

  var botao = document.getElementById("menu-botao");
  var menu = document.getElementById("menu-principal");

  function fecharMenu() {
    if (!botao || !menu) return;
    menu.classList.remove("menu--aberto");
    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-label", "Abrir menu de navegação");
  }

  if (botao && menu) {
    botao.addEventListener("click", function () {
      var aberto = botao.getAttribute("aria-expanded") === "true";
      if (aberto) {
        fecharMenu();
      } else {
        menu.classList.add("menu--aberto");
        botao.setAttribute("aria-expanded", "true");
        botao.setAttribute("aria-label", "Fechar menu de navegação");
      }
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape") fecharMenu();
    });
  }

  /* ---------------------------- ano do rodapé -------------------------- */

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = String(new Date().getFullYear());

  /* ------------------------ revelação ao rolar ------------------------- */

  var elementos = document.querySelectorAll(".rev");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    elementos.forEach(function (el) {
      el.classList.add("visivel");
    });
  } else {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    elementos.forEach(function (el) {
      observador.observe(el);
    });

    /* Fallback: garante que nada fique invisível se a observação falhar */
    window.setTimeout(function () {
      elementos.forEach(function (el) {
        el.classList.add("visivel");
      });
    }, 1500);
  }
})();
