| Skill | Level |
| ---- | ---- |
{% assign skills = site.data.skills.soft | sort: "title" -%}
{% for skills in skills -%}
| {{skill.title}} | {{skill.level}} |
{% endfor %}