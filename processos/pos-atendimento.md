# Pós-atendimento

> **Status**: rascunho
> **Responsável**: Aline

## Objetivo

Garantir que o cliente saia (e permaneça) com a sensação de que o dinheiro foi bem gasto — experiência citada nas anotações iniciais — e trazer o cliente de volta no intervalo certo, gerando recorrência e indicações.

## Gatilho

Consulta concluída.

## Entradas

- Registro da consulta realizada (serviço, data, cliente).
- Orientações de cuidado pós-procedimento por serviço [PENDENTE: definir orientações com a Aline].
- Intervalo de retorno recomendado por serviço [PENDENTE: definir intervalos — ex.: retorno em 30/45/60 dias].

## Passos

1. Ao final da consulta, entregar as orientações de cuidado e informar o intervalo de retorno recomendado.
2. Enviar mensagem de acompanhamento alguns dias depois perguntando como o cliente está [PENDENTE: definir prazo — ex.: 3 dias].
3. Pedir avaliação/depoimento quando o retorno for positivo [PENDENTE: definir onde — Google, Instagram, WhatsApp].
4. Registrar o feedback recebido (positivo ou negativo) para a fase de análise de dados.
5. Quando chegar o intervalo de retorno, convidar o cliente a agendar a próxima consulta (reativação), encaminhando ao [agendamento.md](agendamento.md).

## Saídas

- Cliente com orientações de cuidado em mãos.
- Feedback registrado.
- Avaliações públicas acumulando prova social.
- Clientes reativados no intervalo certo.

## Métricas de sucesso

- Taxa de retorno (clientes que voltam dentro do intervalo recomendado).
- Avaliações recebidas por mês.
- Feedbacks negativos registrados e tratados.

## Potencial de automação

| Passo | O que um fluxo/agente poderia assumir | Prioridade |
|-------|---------------------------------------|------------|
| 2     | Mensagem de acompanhamento automática após a consulta | alta |
| 3     | Envio automático do link de avaliação quando o retorno é positivo | média |
| 5     | Convite de reativação automático quando vence o intervalo de retorno | alta |

Feedback negativo (passo 4) deve sempre ser tratado pessoalmente pela Aline — automação registra, mas não responde.
