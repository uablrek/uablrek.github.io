---
layout: default
---

{% for post in site.posts %}

# {{ post.title }}
<small>{{ post.date | date: "%-d %B %Y" }}</small>

{{ post.excerpt }}

[Read More]({{ post.url }})

{% endfor %}
