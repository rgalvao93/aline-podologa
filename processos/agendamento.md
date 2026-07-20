# Agendamento

> **Status**: rascunho
> **Responsável**: Aline

## Objetivo

Marcar, confirmar e lembrar consultas sem troca longa de mensagens, garantindo agenda organizada e reduzindo faltas.

## Gatilho

Cliente pede para agendar (vindo do [atendimento-inicial.md](atendimento-inicial.md), de um link de CTA ou de indicação direta).

## Entradas

- Horários de funcionamento [PENDENTE: definir dias e horários de atendimento].
- Duração de cada tipo de serviço [PENDENTE: definir duração por serviço].
- Ferramenta de agenda [PENDENTE: definir onde a agenda vive — agenda de papel, Google Agenda, app de agendamento].
- Política de cancelamento/reagendamento [PENDENTE: definir regras — antecedência mínima, remarcações].

## Passos

1. Perguntar (ou identificar) qual serviço o cliente deseja.
2. Oferecer horários disponíveis compatíveis com a duração do serviço.
3. Confirmar dia/horário escolhido e registrar na agenda.
4. Enviar confirmação ao cliente com endereço e orientações de preparo [PENDENTE: definir orientações de preparo por serviço, se houver].
5. Enviar lembrete próximo à consulta [PENDENTE: definir antecedência — ex.: 24h antes].
6. Em caso de cancelamento, aplicar a política e oferecer novo horário; liberar o horário na agenda.

## Saídas

- Consulta registrada na agenda com serviço, cliente e horário.
- Cliente com confirmação e lembrete recebidos.
- Horários vagos visíveis para novos agendamentos.

## Métricas de sucesso

- Taxa de comparecimento (agendados que vieram).
- Número de mensagens trocadas até fechar um agendamento (quanto menor, melhor).
- Ocupação da agenda (horários preenchidos ÷ horários disponíveis).

## Potencial de automação

| Passo | O que um fluxo/agente poderia assumir | Prioridade |
|-------|---------------------------------------|------------|
| 1–3   | Link de agendamento self-service: cliente escolhe serviço e horário sozinho | alta |
| 4     | Mensagem de confirmação automática com endereço e orientações | alta |
| 5     | Lembrete automático antes da consulta | alta |
| 6     | Reagendamento self-service dentro das regras da política | média |

Pré-requisito para automatizar: horários, durações e política de cancelamento definidos, e a agenda vivendo em uma ferramenta digital (não papel).
