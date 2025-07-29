# Decision Log

This file records architectural and implementation decisions using a list format.
2025-07-29 17:18:39 - Log of updates made.

*

## Decision

*

## Rationale 

*

## Implementation Details

*


---
### Decision (Code)
[2025-07-29 17:20:24] - Replaced 'Astro' skill with 'Java' in the skills showcase.

**Rationale:**
The user requested to change a skill icon and name to reflect a different technology.

**Details:**
Modified the `SKILLSSHOWCASE_CONFIG` object in `src/config.ts`.

---
### Decision (Code)
[2025-07-29 17:24:24] - Replaced multiple frontend skills with Java backend technologies in the skills showcase.

**Rationale:**
The user requested to update the skills showcase to better reflect their current technology stack, focusing on Java backend skills.

**Details:**
Modified the `SKILLSSHOWCASE_CONFIG` object in `src/config.ts` to replace 'TypeScript', 'Node.js', 'React', 'Next.js', 'Tailwind CSS', and 'Iconify' with 'Spring Boot', 'Redis', 'MySQL', 'Maven', 'Docker', and 'Git', respectively, along with their corresponding icons.

---
### Decision (Code)
[2025-07-29 17:30:51] - Updated the skills showcase to remove outdated skills and add new backend technologies.

**Rationale:**
The user requested to modify the skills list in `src/config.ts` to better reflect their current backend-focused skillset. This involved removing several frontend and general-purpose skills and adding specific backend technologies.

**Details:**
Modified the `SKILLSSHOWCASE_CONFIG` object in `src/config.ts` to remove 'JavaScript', 'CSS', 'HTML', 'Ubuntu', and 'Vercel', and add 'Nginx', 'MyBatis', 'RabbitMQ', 'Elasticsearch', and 'Linux' with their corresponding icons, balancing them between the 'left' and 'right' display groups.

---
### Decision (Code)
[2025-07-29 17:38:29] - Reorganized and expanded the skills showcase in `src/config.ts`.

**Rationale:**
The user requested to restructure the skills display into three separate arrays and to add four new skills: Kafka, Prometheus, Grafana, and SpringCloud. The skills were then distributed evenly across the three arrays to maintain a balanced layout.

**Details:**
Modified the `SKILLSSHOWCASE_CONFIG` object in `src/config.ts`. The `SKILLS_DATA` array was updated to contain three objects, each with its own `skills` array. The new skills were added, and all skills were redistributed among the three arrays.