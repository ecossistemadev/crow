---
layout: docs
title: Team - Equipe
description: Uma visão geral da equipe fundadora e dos principais colaboradores do Crow.
group: about
---

Crow é mantido pela equipe fundadora e um pequeno grupo de valiosos colaboradores principais, com o apoio e envolvimento massivos de nossa comunidade.

{{< team.inline >}}
<div class="list-group mb-3">
  {{- range (index $.Site.Data "core-team") }}
    <a class="list-group-item list-group-item-action d-flex align-items-center" href="https://github.com/{{ .user }}">
      <img src="https://github.com/{{ .user }}.png" alt="@{{ .user }}" width="32" height="32" class="rounded me-2" loading="lazy">
      <span>
        <strong>{{ .name }}</strong> @{{ .user }}
      </span>
    </a>
  {{ end -}}
</div>
{{< /team.inline >}}

Envolva-se com o desenvolvimento do Crow abrindo uma [issue]({{< param repo >}}/issues/new/choose) ou enviando um pull request. Leia nossas [regras de contribuição]({{< param repo >}}/blob/v{{< param current_version >}}/.github/CONTRIBUTING.md) para obter informações sobre como desenvolvemos.

