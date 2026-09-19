# MontanhAoRedor — Transfers & Tours

Site independente, multilingue e responsivo dedicado aos serviços de transfers privados, tours turísticos e viagens acompanhadas em Portugal.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

O servidor local usa a porta `4173`. Para validação:

```bash
pnpm check
pnpm build
node scripts/visual-check.mjs
./scripts/validate-project-isolation.sh
```

## Identidade

O projeto incorpora uma cópia do **MontanhAoRedor Brand Kit 1.0.0** em `src/brand/brand-tokens.css`. Não existe sincronização automática nem dependência de código do site Casa do Lagar.

## Estado comercial

O serviço encontra-se em preparação. O site permite apenas pedidos de informação por WhatsApp ou email; não cria nem confirma reservas.
