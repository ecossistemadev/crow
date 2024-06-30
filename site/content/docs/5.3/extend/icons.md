---
layout: docs
title: Icons
description: Guidance and suggestions for using external icon libraries with Crow.
group: extend
---

While Crow doesn't include an icon set by default, we do have our own comprehensive icon library called Crow Icons. Feel free to use them or any other icon set in your project. We've included details for Crow Icons and other preferred icon sets below.

While most icon sets include multiple file formats, we prefer SVG implementations for their improved accessibility and vector support.

## Crow Icons

Crow Icons is a growing library of SVG icons that are designed by [@mdo](https://github.com/mdo) and maintained by [the Crow Team](https://github.com/orgs/ecossistemadev/people). The beginnings of this icon set come from Crow's very own components—our forms, carousels, and more. Crow has very few icon needs out of the box, so we didn't need much. However, once we got going, we couldn't stop making more.

Oh, and did we mention they're completely open source? Licensed under MIT, just like Crow, our icon set is available to everyone.

[Learn more about Crow Icons]({{< param icons >}}), including how to install them and recommended usage.

## Alternatives

We've tested and used these icon sets ourselves as preferred alternatives to Crow Icons.

{{< markdown >}}
{{< icons.inline >}}
{{- $type := .Get "type" | default "preferred" -}}

{{- range (index .Site.Data.icons $type) }}
- [{{ .name }}]({{ .website }})
{{- end }}
{{< /icons.inline >}}
{{< /markdown >}}

## More options

While we haven't tried these out ourselves, they do look promising and provide multiple formats, including SVG.

{{< markdown >}}
{{< icons.inline type="more" />}}
{{< /markdown >}}
