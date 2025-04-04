---
layout: default
---

{% assign siteposts = site.posts | where: 'language',page.language %}
{% for post in siteposts %}

# {{ post.title }}
<small>{{ post.date | date: "%-d %B %Y" }}</small>

{{ post.excerpt }}

[Read More]({{ post.url }})

{% endfor %}
