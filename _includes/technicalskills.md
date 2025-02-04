| Skill | Level |
| ---- | ---- |
{% assign skills = site.data.skills.technical | sort: "title" -%}
{% for skills in skills -%}
| {{skill.title}} | {{skill.level}} |
{% endfor %}
