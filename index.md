---
layout: default
---

{% assign siteposts = site.posts | where: "language", "svenska" | reverse %}
{% for post in siteposts %}

# {{ post.title }}
<small>{{ post.date | date: "%-d %B %Y" }}</small>

{{ post.excerpt }}

[Läs mer]({{ post.url }})

{% endfor %}

<hr/>
<h1>In English</h1>

{% assign siteposts = site.posts | where: "language", "english" %}
{% for post in siteposts %}

# {{ post.title }}
<small>{{ post.date | date: "%-d %B %Y" }}</small>

{{ post.excerpt }}

[Read more]({{ post.url }})

{% endfor %}
