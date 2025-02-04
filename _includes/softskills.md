| Skill | Level |
| ---- | ---- |
{% assign skill = site.data.skills.soft | sort: "title" -%}
{% for skills in skills -%}
| {{skill.title}} | {{skill.level}} |
{% endfor %}