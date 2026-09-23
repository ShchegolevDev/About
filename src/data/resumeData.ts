import type { ContactItem, ExperienceEntry, PersonalInfo, ProjectCard } from '../types/resume';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Щеголев Валентин',
  role: 'Frontend-разработчик',
  citizenshipNote: 'Гражданство РФ · к переезду и командировкам не готов',
  education: 'Среднее общее образование',
  educationMeta: 'Москва · 20.02.2001',
};

export const ABOUT_TEXT =
  'Frontend-разработчик с фокусом на React и TypeScript и опытом руководства командой из ' +
  '5 инженеров. За последние годы прошёл путь от вёрстки интерфейсов и интеграции с REST API ' +
  'до архитектурных решений: микрофронтенды, серверно-управляемые формы, переиспользуемые ' +
  'UI-библиотеки и корпоративные дизайн-системы. Отдельно интересуюсь производительностью ' +
  '(LCP, FCP, TTI, вес бандла) и тем, как выстроить процесс разработки так, чтобы команда ' +
  'доставляла фичи быстрее и без сюрпризов. Открыт к продуктовым задачам, где нужно совмещать ' +
  'код и лидерство.';

export const CONTACTS: ContactItem[] = [
  { id: 'location', icon: '📍', label: 'Москва, РФ' },
  { id: 'phone', icon: '📞', label: '+7 (936) 123-45-80', href: 'tel:+79361234580' },
  { id: 'email', icon: '✉️', label: 'shchegolev.dev@gmail.com', href: 'mailto:shchegolev.dev@gmail.com' },
  { id: 'telegram', icon: '💬', label: '@Dudewithvisa', href: 'https://t.me/Dudewithvisa' },
  { id: 'github', icon: '🐙', label: 'ShchegolevDev', href: 'https://github.com/ShchegolevDev/About' },
];

export const TECH_SKILLS: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Redux Toolkit',
  'TanStack Query',
  'React Hook Form',
  'Styled-Components',
  'HTML5',
  'CSS3 / SCSS',
  'Node.js',
  'Vite',
  'Vitest / Jest',
  'Module Federation',
  'ESLint',
  'Storybook',
  'Sentry',
  'Git',
];

export const SOFT_SKILLS: string[] = [
  'Управление командой',
  'Менторство',
  'Декомпозиция задач',
  'Коммуникация с бизнесом',
  'Код-ревью',
  'Тайм-менеджмент',
  'Проактивность',
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'gazprombank',
    role: 'Руководитель группы разработки',
    company: 'Газпромбанк, АО',
    period: '03.2025 — 08.2026',
    duration: '1 г. 6 мес.',
    stack: ['React', 'TypeScript', 'TanStack Query', 'React Final Form', 'React Hook Form', 'Styled-Components'],
    responsibilities:
      'Управление командой из 5 разработчиков, декомпозиция задач, оптимизация ' +
      'производительности приложения (LCP/FCP/TTI, вес бандла), выстраивание процесса ' +
      'разработки, код-ревью и деплой.',
    achievements: [
      'Разработал server-driven форму для отчётов на основе JSON-схемы — новые формы добавляются без релиза фронтенда.',
      'Спроектировал и реализовал аналитическую платформу для лизингового направления.',
      'Выделил переиспользуемый npm-пакет поверх Axios для унификации работы с API в нескольких проектах.',
      'Провёл миграцию проекта на TanStack Query и Feature-Sliced Design (FSD).',
      'Участвовал в создании корпоративной дизайн-системы.',
    ],
  },
  {
    id: 'kotelov',
    role: 'Frontend-разработчик',
    company: 'KOTELOV',
    period: '02.2024 — 03.2025',
    duration: '1 г. 2 мес.',
    stack: ['React', 'TypeScript', 'React Query', 'Vite', 'Vitest', 'Module Federation', 'React Hook Form', 'ESLint', 'styled-components'],
    achievements: [
      'Спроектировал микрофронтенд-архитектуру ERP-системы на Vite Plugin Federation.',
      'Реализовал окно поиска лизинговых сделок со взаимозависимыми фильтрами.',
      'Повысил покрытие UI-библиотеки тестами до 92,7% и внедрил Storybook.',
      'Внедрил мониторинг ошибок на базе Sentry.',
      'Разработал модульные ESLint-пресеты для команды.',
    ],
  },
  {
    id: 'significa',
    role: 'Frontend-разработчик',
    company: 'significa.co',
    period: '07.2022 — 12.2023',
    duration: '1 г. 6 мес.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'SCSS', 'Vite', 'Jest', 'ESLint'],
    projectNote:
      'Проект: Cimple — платформа госзакупок Великобритании, связывающая заказчиков (buyers) ' +
      'и поставщиков (suppliers): тендеры, frameworks, dynamic markets, оценка заявок и social value assessment.',
    responsibilities:
      'Разработка UI платформы (кабинеты заказчика и поставщика, карточки тендеров), ' +
      'вёрстка и интеграция с REST API, оценка и декомпозиция задач.',
    achievements: [
      'Реализовал страницу поиска тендеров и frameworks с фильтрами и пагинацией.',
      'Реализовал многошаговую форму подачи заявки на React Hook Form с валидацией по шагам.',
      'Реализовал страницу профиля организации (данные компании, документы, история заявок).',
      'Вынес переиспользуемые компоненты: карточка тендера, статус-бейджи, таблица результатов.',
      'Исправил баги в блоке расчёта social value и покрыл его тестами.',
    ],
  },
];

export const PROJECTS: ProjectCard[] = [
  { id: 'placeholder-1', title: 'Добавьте проект', description: 'Название, короткое описание, стек и ссылка на GitHub / демо', isPlaceholder: true },
  { id: 'placeholder-2', title: 'Добавьте проект', description: 'Название, короткое описание, стек и ссылка на GitHub / демо', isPlaceholder: true },
];

export const COURSES_PLACEHOLDER_TEXT =
  'Добавьте пройденные курсы, хакатоны или сертификаты — название, платформа/организатор, год';
