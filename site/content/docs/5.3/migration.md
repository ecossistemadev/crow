---
layout: docs
title: Migrando para a v5
description: Acompanhe e revise as alterações nos arquivos de origem, documentação e componentes do Crow para ajudá-lo a migrar da v4 para a v5.
group: migration
aliases: "/migration/"
toc: true
---

## v5.3.0

Se você está migrando de nossas versões alfa anteriores da v5.3.0, revise suas alterações além desta seção.

### Helpers

- [Links coloridos]({{< docsref "/helpers/colored-links" >}}) novamente têm `!important` para que funcionem melhor com nossos utilitários de link recém-adicionados.

### Utilities

- Adicionada nova utilidade de [exibição]({{< docsref "/utilities/display" >}}) `.d-inline-grid`.

## v5.3.0-alpha2

Se você está migrando de nossa versão alfa anterior da v5.3.0, revise as alterações listadas abaixo.

### Variáveis CSS

- Várias variáveis CSS raiz duplicadas e não utilizadas foram removidas.

### Modos de cor

- As cores do modo escuro agora são derivadas de nossas cores do tema (por exemplo, `$primary`) em Sass, em vez de tons ou sombras específicos de cores (por exemplo, `$blue-300`). Isso permite um modo escuro mais automatizado ao personalizar as cores do tema padrão.

- Adicionados mapas Sass para gerar cores do tema para texto em modo escuro, fundo sutil e borda sutil.

- [Exemplos de snippets]({{< docsref "/examples#snippets" >}}) agora estão prontos para o modo escuro com marcação atualizada e estilos personalizados reduzidos.

- Adicionada `color-scheme: dark` ao CSS do modo escuro para alterar os controles de nível do sistema operacional, como barras de rolagem

- Os estados de `border-color` de validação de formulário e `color` de texto agora respondem ao modo escuro, graças às novas variáveis Sass e CSS.

- As variáveis CSS de fundo do controle de formulário adicionadas recentemente foram descartadas e as variáveis Sass foram reatribuídas para usar variáveis CSS em vez disso. Isso simplifica o estilo em todos os modos de cor e evita um problema em que os controles de formulário no modo escuro não seriam atualizados corretamente.

- Nossas `box-shadow`s voltarão a ficar sempre escuras em vez de inverter para branco quando estiverem no modo escuro.

- HTML e JavaScript aprimorados para nosso script de alternância de modo de cor. O seletor para alterar o SVG ativo foi aprimorado e a marcação tornou-se mais acessível com atributos ARIA.

- Cores de sintaxe de código aprimoradas nos documentos e muito mais em modos claro e escuro.

### Tipografia

- Não definimos mais uma cor para `$headings-color-dark` ou `--bs-heading-color` para o modo escuro. Para evitar vários problemas de títulos dentro de componentes aparecendo na cor errada, definimos a variável Sass como `null` e adicionamos uma verificação `null` como usamos no modo claro padrão.

### Componentes

- Os cartões agora têm uma `color` definida neles para melhorar o renderização em todos os modos de cor.

- Adicionada nova variante `.nav-underline` para nossa navegação com uma borda inferior mais simples sob o link de navegação ativo. [Veja a documentação para um exemplo.]({{< docsref "/components/navs-tabs#underline" >}})

- As naves agora têm novos estilos `:focus-visible` que combinam melhor com nossos estilos de foco de botão personalizados.

### Helpers

- Adicionada nova ajuda `.icon-link` para colocar e alinhar rapidamente os ícones do Crow ao lado de um link textual. Os links de ícones também suportam nossos novos utilitários de link.

- Adicionada nova ajuda de anel de foco para remover o `outline` padrão e definir um `box-shadow` personalizado de anel de foco.

### Utilities

- Variáveis Sass e CSS renomeadas `${color}-text` para `${color}-text-emphasis` para corresponder às suas utilidades associadas.

- Adicionada nova ajuda `.link-body-emphasis` ao lado de nossos [links coloridos]({{< docsref "/helpers/colored-links" >}}). Isso cria um link colorido usando nossa cor de ênfase responsiva ao modo de cor.

- Adicionados novos utilitários de link para opacidade de cor de link, deslocamento de sublinhado, cor de sublinhado e opacidade de sublinhado. [Explore os novos utilitários de links.]({{< docsref "/utilities/link" >}})

- As utilidades de `border-width` baseadas em variáveis CSS foram revertidas para definir sua propriedade diretamente (como foi feito antes da v5.2.0). Isso evita problemas de herança em elementos aninhados, incluindo tabelas.

- Adicionada nova utilidade `.border-black` para corresponder às nossas utilidades `.text-black` e `.bg-black`.

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecado</span> A utilidade `.text-muted` e a variável Sass `$text-muted` foram deprecadas. Foi substituído por `.text-body-secondary` e `$body-secondary-color`.

### Docs

- Os exemplos agora são exibidos com o modo de cor claro ou escuro apropriado, conforme ditado pela configuração em nossos documentos. Cada exemplo tem um seletor de modo de cor individual.

- JavaScript incluído aprimorado para demonstração ao vivo do Toast.

- Adicionados conteúdos do repositório `ecossistemadev/examples` ao topo da página Exemplos.

### Ferramentas

- Adicionados testes SCSS via True para ajudar a testar nossa API de utilidades e outras personalizações.

- Instâncias substituídas do nosso projeto crow-npm-starter pelo [repositório ecossistemadev/examples](https://github.com/ecossistemadev/examples) mais novo e completo.

<hr class="mb-4">

Para uma lista completa de alterações, [veja o projeto v5.3.0-alpha2 no GitHub](https://github.com/orgs/ecossistemadev/projects/13).

## v5.3.0-alpha1

<hr class="mb-4">

### Modos de cor!

Saiba mais lendo a nova [documentação de modos de cor]({{< docsref "/customize/color-modes" >}}).

- **Suporte global para modos de cor claro (padrão) e escuro.** Defina o modo de cor globalmente no elemento `:root`, em grupos de elementos e componentes com uma classe de wrapper ou diretamente em componentes, com `data-bs-theme="light|dark"`. Também está incluído um novo mixin `color-mode()` que pode gerar um conjunto de regras com o seletor `data-bs-theme` ou uma consulta de mídia, dependendo da sua preferência.

  <span class="badge text-warning-emphasis bg-warning-subtle">Deprecado</span> Os modos de cor substituem as variantes escuras para componentes, portanto, `.btn-close-white`, `.carousel-dark`, `.dropdown-menu-dark` e `.navbar-dark` estão obsoletos.

- **Novo sistema de cores estendido.** Adicionamos novas cores do tema (mas não em `$theme-colors`) para uma paleta de cores mais matizada, em todo o sistema, com novas cores secundárias, terciárias e de ênfase para `color` e `background-color`. Essas novas cores estão disponíveis como variáveis Sass, variáveis CSS e utilidades.

- Também expandimos nossas variáveis Sass de cores do tema, variáveis CSS e utilidades para incluir ênfase de texto, cores de fundo sutis e cores de borda sutis. Essas estão disponíveis como variáveis Sass, variáveis CSS e utilidades.

- Adiciona uma nova folha de estilo `_variables-dark.scss` para abrigar substituições específicas do modo escuro. Essa folha de estilo deve ser importada imediatamente após o arquivo `_variables.scss` existente em sua pilha de importação.

  ```diff
  diff --git a/scss/crow.scss b/scss/crow.scss
  index 8f8296def..449d70487 100644
  --- a/scss/crow.scss
  +++ b/scss/crow.scss
  @@ -6,6 +6,7 @@
   // Configuration
   @import "functions";
   @import "variables";
  +@import "variables-dark";
   @import "maps";
   @import "mixins";
   @import "utilities";
