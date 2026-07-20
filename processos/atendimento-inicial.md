# Atendimento inicial

> **Status**: rascunho
> **Responsável**: Aline

## Objetivo

Responder o primeiro contato de um interessado com rapidez e sem retrabalho, resolvendo dúvidas comuns e direcionando para o agendamento. Ataca a dor principal do negócio atual: tempo perdido respondendo as mesmas dúvidas repetidamente.

## Gatilho

Cliente (ou interessado) envia mensagem em um canal do negócio.
[PENDENTE: confirmar os canais oficiais — WhatsApp? Instagram Direct? Outros?]

## Entradas

- FAQ preenchido e validado ([faq-clientes.md](faq-clientes.md)).
- Lista de serviços com preços [PENDENTE: definir lista de serviços e valores].
- Agenda de horários disponíveis (ver [agendamento.md](agendamento.md)).
- Tom de voz do atendimento [PENDENTE: definir com a Aline — formal? acolhedor? uso de áudio?].

## Passos

1. Receber a mensagem e identificar o que o cliente quer (dúvida, preço, agendamento, urgência).
2. Se for dúvida coberta pelo FAQ, responder com a resposta padrão correspondente.
3. Se for dúvida clínica específica (caso do pé do cliente), orientar que a avaliação é feita em consulta e oferecer o agendamento.
4. Informar serviços e valores quando solicitado.
5. Convidar para agendar, encaminhando para o fluxo de [agendamento.md](agendamento.md).
6. Se não houver resposta do cliente, enviar uma mensagem de retomada após [PENDENTE: definir intervalo — ex.: 24h].

## Saídas

- Cliente com a dúvida respondida.
- Cliente encaminhado ao agendamento (ou motivo da não conversão anotado).
- Registro do contato e da origem (por onde o cliente chegou) para a fase de análise de dados.

## Métricas de sucesso

- Tempo médio da primeira resposta.
- Taxa de conversão: contatos → agendamentos.
- Percentual de dúvidas resolvidas pelo FAQ (indica se o FAQ está completo).

## Potencial de automação

| Passo | O que um fluxo/agente poderia assumir | Prioridade |
|-------|---------------------------------------|------------|
| 1–2   | Agente de atendimento responde dúvidas do FAQ automaticamente, em qualquer horário | alta |
| 4     | Envio automático do catálogo/lista de preços quando solicitado | alta |
| 5     | Encaminhamento automático para link/fluxo de agendamento | alta |
| 6     | Mensagem de retomada automática para contatos sem resposta | média |

Pré-requisito para automatizar: FAQ com status validado e tom de voz definido. O passo 3 (triagem de casos clínicos) deve manter supervisão humana — o agente pode acolher e agendar, mas nunca opinar sobre o quadro clínico.
