import type {
  ContactItem,
  CourseEntry,
  ExperienceEntry,
  PersonalInfo,
  ProjectCard,
  SkillGroup,
} from "../types/resume";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Щеголев Валентин",
  role: "Frontend-разработчик",
  citizenshipNote: "Гражданство РФ · к переезду и командировкам не готов",
  education: "Среднее общее образование",
  educationMeta: "Москва · 20.02.2001",
};

export const ABOUT_PARAGRAPHS: string[] = [
  "Frontend-разработчик с наибольшим фокусом на React, TypeScript и сопутствующиx библиотеках. Более чем за 4 года прошёл путь от простой верстки интерфейсов до управления командой из 5 человек и формирования архитектурных решений, распространяющихся на всю frontend экосистему компании.",
  "Умею писать модульный, тестируемый и поддерживаемый код, а так же работать с legacy.",
  "В настоящее время хочу развиваться в роли разработчика и решать интересные технические задачи - углублять свой опыт работы с различными фреймворками, инструментами и реализовывать нестандартные ui/ux решения в масштабе крупных продуктов.",
];

export const CONTACTS: ContactItem[] = [
  { id: "location", icon: "📍", label: "Москва, РФ" },
  {
    id: "phone",
    icon: "📞",
    label: "+7 (936) 123-45-80",
    href: "tel:+79361234580",
  },
  {
    id: "email",
    icon: "✉️",
    label: "shchegolev.dev@gmail.com",
    href: "mailto:shchegolev.dev@gmail.com",
  },
  {
    id: "telegram",
    icon: "💬",
    label: "@Dudewithvisa",
    href: "https://t.me/Dudewithvisa",
  },
  {
    id: "github",
    icon: "🐙",
    label: "ShchegolevDev",
    href: "https://github.com/ShchegolevDev/About",
  },
];

export const TECH_SKILL_GROUPS: SkillGroup[] = [
  {
    id: "core",
    label: "Core",
    skills: ["React", "TypeScript", "Next JS", "JavaScript"],
  },
  {
    id: "state-data",
    label: "State & Data",
    skills: [
      "TanStack Query",
      "TanStack Router",
      "Redux Toolkit",
      "React Hook Form",
      "React Final Form",
      "REST API",
      "Orval",
    ],
  },
  {
    id: "architecture",
    label: "Архитектура",
    skills: ["Feature-Sliced Design (FSD)", "Module Federation", "MVVM"],
  },
  {
    id: "styling",
    label: "Стили",
    skills: ["Styled-Components", "CSS Modules", "Tailwind", "CSS3 / SCSS"],
  },
  {
    id: "tooling",
    label: "Тулинг и тесты",
    skills: ["Vite", "Vitest / Jest", "Storybook", "ESLint", "Git"],
  },
  { id: "monitoring", label: "Мониторинг", skills: ["Sentry"] },
];

export const SOFT_SKILLS: string[] = [
  "Управление командой",
  "Менторство",
  "Декомпозиция задач",
  "Коммуникация с бизнесом",
  "Код-ревью",
  "Тайм-менеджмент",
  "Проактивность",
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "gazprombank",
    role: "Руководитель группы разработки",
    company: "Газпромбанк, АО",
    period: "03.2025 — 08.2026",
    duration: "1 г. 6 мес.",
    stack: [
      "React",
      "Next JS",
      "TypeScript",
      "TanStack Query",
      "React Final Form",
      "React Hook Form",
      "Styled-Components",
    ],
    responsibilities:
      "Управление командой из 5 разработчиков, декомпозиция задач, оптимизация " +
      "производительности приложения (LCP/FCP/TTI, вес бандла), выстраивание процесса " +
      "разработки, код-ревью и деплой.",
    achievements: [
      "Спроектировал и реализовал server-driven модуль отчётов: форма целиком описывается JSON-схемой с бэкенда - добавление полей, разделов и правил не требует релиза фронтенда.",
      "Разработал аналитическую платформу лизинга. Заложил архитектуру доменных страниц (поставщики, лизингополучатели): типобезопасный слой API-клиента, серверная пагинация и группировка данных, декомпозиция на переиспользуемые таблицы, фильтры и диаграммы.",
      "Спроектировал и разработал переиспользуемый npm-пакет - тонкий слой абстракции, унифицирующий работу с HTTP во всех продуктовых приложениях компании независимо от библиотеки запросов; добавил единый способ авторизации, обработки ошибок и наблюдения за запросами; сократил бойлерплейта в приложениях-потребителях.",
      "Сформировал и внедрил новый стек на базе TanStack (TanStack Router + TanStack Query) с архитектурным подходом FSD: паттерны описаны в документации и подкреплены инструментами контроля, приложения получили явное разделение на модули и низкую стоимость поддержки.",
      "Совместно с дизайнером сформировал корпоративную дизайн-систему как основу для UI-kit.",
    ],
  },
  {
    id: "kotelov",
    role: "Frontend-разработчик",
    company: "KOTELOV",
    period: "02.2024 — 03.2025",
    duration: "1 г. 2 мес.",
    stack: [
      "React",
      "TypeScript",
      "React Query",
      "Vite",
      "Vitest",
      "Module Federation",
      "React Hook Form",
      "ESLint",
      "styled-components",
    ],
    achievements: [
      "Разработал микрофронтендную архитектуру ERP-системы на базе Vite Plugin Federation: хост-приложение с 50+ страницами и 6 независимых remote-модулей. Настроил разделение shared-зависимостей (React, React-Query, styled-components) между host и remotes, что снизило дублирование бандла и позволило независимо разрабатывать и доставлять на прод все вынесенные модули.",
      "Работал над единым окном поиска и мониторинга лизинговых сделок (сделки, контрагенты, сторонние лизингодатели, менеджеры). В рамках проекта реализовал панель взаимозависимых фильтров: выбранные значения уходят на бэкенд и пересчитывают доступные варианты остальных фильтров, с серверным поиском и пагинацией внутри каждого списка.",
      "Инициировал покрытие тестами ui библиотеки. Интегрировал в библиотеку storybook и покрыл тест кейсами основные компоненты. В итоге покрытие кода тестами возросло с ~50 до 92,7%, а так же уменьшил время на отладку кода и тестирование новых кейсов при расширении компонентов.",
      "Внедрил сквозной мониторинг фронтенда на базе Sentry: разработал внутреннюю библиотеку-обёртку над @sentry/react с единой конфигурацией, фильтрацией шумовых ошибок и подключением в одну строку, за счёт чего приложения получают сбор ошибок и Web Vitals без индивидуальной настройки Sentry.",
      "Спроектировал модульную архитектуру из 5 независимых eslint пресетов (base/format/react/typescript/sonar) с раздельными точками входа - повысил читаемость и единообразие кода в 3 проектах.",
    ],
  },
  {
    id: "significa",
    role: "Frontend-разработчик",
    company: "significa.co",
    period: "07.2022 — 12.2023",
    duration: "1 г. 6 мес.",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "SCSS",
      "Vite",
      "Jest",
      "ESLint",
    ],
    projectNote:
      "Проект: Cimple — платформа госзакупок Великобритании, связывающая заказчиков и исполнителей.",
    responsibilities:
      "Разработка UI платформы (кабинеты заказчика и поставщика, карточки тендеров), " +
      "вёрстка и интеграция с REST API, оценка и декомпозиция задач.",
    achievements: [
      "Реализовал страницу поиска тендеров и frameworks с фильтрами и пагинацией.",
      "Реализовал многошаговую форму подачи заявки на React Hook Form с валидацией по шагам.",
      "Реализовал страницу профиля организации (данные компании, документы, история заявок).",
      "Вынес переиспользуемые компоненты: карточка тендера, статус-бейджи, таблица результатов.",
      "Исправил баги в блоке расчёта social value и покрыл его тестами.",
    ],
  },
];

export const PROJECTS: ProjectCard[] = [];

export const COURSES: CourseEntry[] = [
  {
    id: "kata-academy",
    title: "Frontend-разработчик",
    org: "Kata Academy",
    meta: "2021",
  },
  {
    id: "yandex-code-battle",
    title: "Code Battle",
    org: "Яндекс",
    meta: "участие, 2024",
  },
];
