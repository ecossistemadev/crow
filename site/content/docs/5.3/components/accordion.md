---
layout: docs
title: Accordion - Acordeão
description: Crie acordeões que se expandem verticalmente em combinação com nosso plugin Collapse JavaScript.
group: components
aliases:
  - "/components/"
  - "/docs/5.3/components/"
toc: true
---

## Como funciona

O acordeão usa [collapse]({{< docsref "/components/collapse" >}}) internamente para torná-lo colapsável.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Exemplo

Clique nos acordeões abaixo para expandir/recolher o conteúdo do acordeão.

Para renderizar um acordeão que é expandido por padrão:
- adicione a classe `.show` no elemento `.accordion-collapse`.
- remova a classe `.collapsed` do elemento `.accordion-button` e defina seu atributo `aria-expanded` como `true`.

{{< example >}}
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Item do Acordeão #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Este é o corpo do primeiro item do acordeão.</strong> Ele é mostrado por padrão, até que o plugin de colapso adicione as classes apropriadas que usamos para estilizar cada elemento. Essas classes controlam a aparência geral, bem como a exibição e ocultação por meio de transições CSS. Você pode modificar qualquer um desses elementos com CSS personalizado ou substituindo nossas variáveis padrão. Também vale a pena notar que quase qualquer HTML pode ir dentro do <code>.accordion-body</code>, embora a transição limite o overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Item do Acordeão #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Este é o corpo do segundo item do acordeão.</strong> Ele é ocultado por padrão, até que o plugin de colapso adicione as classes apropriadas que usamos para estilizar cada elemento. Essas classes controlam a aparência geral, bem como a exibição e ocultação por meio de transições CSS. Você pode modificar qualquer um desses elementos com CSS personalizado ou substituindo nossas variáveis padrão. Também vale a pena notar que quase qualquer HTML pode ir dentro do <code>.accordion-body</code>, embora a transição limite o overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Item do Acordeão #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Este é o corpo do terceiro item do acordeão.</strong> Ele é ocultado por padrão, até que o plugin de colapso adicione as classes apropriadas que usamos para estilizar cada elemento. Essas classes controlam a aparência geral, bem como a exibição e ocultação por meio de transições CSS. Você pode modificar qualquer um desses elementos com CSS personalizado ou substituindo nossas variáveis padrão. Também vale a pena notar que quase qualquer HTML pode ir dentro do <code>.accordion-body</code>, embora a transição limite o overflow.
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Flush

Adicione `.accordion-flush` para remover algumas bordas e cantos arredondados para renderizar acordeões de ponta a ponta com seu contêiner pai.

{{< example class="bg-body-secondary" >}}
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Item do Acordeão #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Conteúdo de espaço reservado para este acordeão, que visa demonstrar a classe <code>.accordion-flush</code>. Este é o corpo do primeiro item do acordeão.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Item do Acordeão #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Conteúdo de espaço reservado para este acordeão, que visa demonstrar a classe <code>.accordion-flush</code>. Este é o corpo do segundo item do acordeão. Imagine que isso seja preenchido com algum conteúdo real.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Item do Acordeão #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Conteúdo de espaço reservado para este acordeão, que visa demonstrar a classe <code>.accordion-flush</code>. Este é o corpo do terceiro item do acordeão. Nada mais emocionante acontecendo aqui em termos de conteúdo, mas apenas preenchendo o espaço para fazer com que pareça, pelo menos à primeira vista, um pouco mais representativo de como isso ficaria em um aplicativo do mundo real.</div>
    </div>
  </div>
</div>
{{< /example >}}

### Sempre aberto

Omita o atributo `data-bs-parent` em cada `.accordion-collapse` para fazer com que os itens do acordeão permaneçam abertos quando outro item for aberto.

{{< example >}}
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Item do Acordeão #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>Este é o corpo do primeiro item do acordeão.</strong> Ele é mostrado por padrão, até que o plugin de colapso adicione as classes apropriadas que usamos para estilizar cada elemento. Essas classes controlam a aparência geral, bem como a exibição e ocultação por meio de transições CSS. Você pode modificar qualquer um desses elementos com CSS personalizado ou substituindo nossas variáveis padrão. Também vale a pena notar que quase qualquer HTML pode ir dentro do <code>.accordion-body</code>, embora a transição limite o overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Item do Acordeão #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>Este é o corpo do segundo item do acordeão.</strong> Ele é ocultado por padrão, até que o plugin de colapso adicione as classes apropriadas que usamos para estilizar cada elemento. Essas classes controlam a aparência geral, bem como a exibição e ocultação por meio de transições CSS. Você pode modificar qualquer um desses elementos com CSS personalizado ou substituindo nossas variáveis padrão. Também vale a pena notar que quase qualquer HTML pode ir dentro do <code>.accordion-body</code>, embora a transição limite o overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Item do Acordeão #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>Este é o corpo do terceiro item do acordeão.</strong> Ele é ocultado por padrão, até que o plugin de colapso adicione as classes apropriadas que usamos para estilizar cada elemento. Essas classes controlam a aparência geral, bem como a exibição e ocultação por meio de transições CSS. Você pode modificar qualquer um desses elementos com CSS personalizado ou substituindo nossas variáveis padrão. Também vale a pena notar que quase qualquer HTML pode ir dentro do <code>.accordion-body</code>, embora a transição limite o overflow.
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Acessibilidade

Por favor, leia a [seção de acessibilidade do colapso]({{< docsref "/components/collapse#accessibility" >}}) para mais informações.

## CSS

### Variáveis

{{< added-in "5.2.0" >}}

Como parte da abordagem evolutiva de variáveis CSS do Crow, os acordeões agora usam variáveis CSS locais em `.accordion` para personalização aprimorada em tempo real. Os valores para as variáveis CSS são definidos por meio do Sass, portanto, a personalização do Sass ainda é suportada também.

{{< scss-docs name="accordion-css-vars" file="scss/_accordion.scss" >}}

### Variáveis Sass

{{< scss-docs name="accordion-variables" file="scss/_variables.scss" >}}

