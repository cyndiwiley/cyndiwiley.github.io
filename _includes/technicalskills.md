| Skill | Level |
| ---- | ---- |
{% assign skill = site.data.skills.technical | sort: "title" %}
{% for skills in skills %}
| {{skill.title}} | {{skill.level}} |
{% endfor %}
