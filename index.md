---
layout: default
---

{% assign siteposts = site.posts | where: "language", "svenska" %}
{% for post in siteposts %}

# {{ post.title }}
<small>{{ post.date | date: "%-d %B %Y" }}</small>

{{ post.excerpt }}

[Läs mer]({{ post.url }})

{% endfor %}
