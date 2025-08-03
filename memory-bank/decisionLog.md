# Decision Log

This file records architectural and implementation decisions using a list format.
2025-07-29 17:18:39 - Log of updates made.

*
---
### Decision (Feature)
[2025-07-31 11:35:38] - 决定开发“项目经历时间线”功能。

**Rationale:**
为了更系统、更直观地展示项目经验，将零散的技能应用案例结构化，从而提升个人品牌和作品集的专业性。该功能可以增强内容关联性，并为招聘方等目标用户提供清晰的能力评估路径。

**Details:**
该功能将包括一个专门的页面，以时间线形式展示项目。每个项目节点可点击，以显示详细信息，如项目描述、职责、成果和技术栈。

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

---
### Decision (Architecture)
[2025-07-31 11:41:07] - 为“项目经历时间线”功能设计了基于 Astro 内容集合的技术架构。

**Rationale:**
该架构利用 Astro 的核心优势，通过 Markdown 文件管理内容，实现了开发效率、性能和未来可扩展性之间的平衡。它与现有项目结构无缝集成，并为未来的后端服务迁移提供了清晰的路径。

**Details:**
详细设计已记录在根目录的 `TimelineArch.md` 文件中，包括数据模型、前端组件划分、API 路由设计、数据流和 Mermaid 架构图。