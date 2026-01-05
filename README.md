# Shiftly 📅

Професійна система для складання розкладу працівників з інтуїтивним інтерфейсом.

## Особливості

- ✨ Drag-and-drop інтерфейс для створення розкладу
- 🤖 Автоматичне планування змін
- 👥 Управління працівниками та відділами
- 📊 Експорт розкладу в PDF та Excel
- 🔔 Сповіщення для працівників
- 📱 Адаптивний дизайн для всіх пристроїв
- 🔐 Безпечна автентифікація
- 🎯 Підходить для малого та великого бізнесу

## Технології

### Frontend
- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- @dnd-kit для drag-and-drop
- React Query для кешування
- Zustand для стану

### Backend
- Node.js + Express + TypeScript
- PostgreSQL
- Prisma ORM
- JWT автентифікація
- Bcrypt для безпеки

## Швидкий старт

### Вимоги
- Node.js 18+
- PostgreSQL 14+
- npm або yarn

### Установка

```bash
# Клонувати репозиторій
git clone https://github.com/VladyslavPankratov/Shiftly.git
cd Shiftly

# Установити залежності для backend
cd backend
npm install
cp .env.example .env
# Налаштуйте .env з вашими даними

# Запустити міграції бази даних
npx prisma migrate dev

# Запустити backend сервер
npm run dev

# У новому терміналі - установити frontend
cd ../frontend
npm install
cp .env.example .env

# Запустити frontend
npm run dev
```

## Структура проекту

```
Shiftly/
├── frontend/          # React застосунок
│   ├── src/
│   │   ├── components/    # UI компоненти
│   │   ├── features/      # Функціональні модулі
│   │   ├── pages/         # Сторінки
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API сервіси
│   │   └── utils/         # Утиліти
│   └── public/
├── backend/           # Node.js API
│   ├── src/
│   │   ├── controllers/   # Контролери
│   │   ├── routes/        # API роути
│   │   ├── services/      # Бізнес логіка
│   │   ├── middleware/    # Middleware
│   │   └── utils/         # Утиліти
│   └── prisma/           # Database schema
└── docs/              # Документація
```

## Ліцензія

MIT

## Автор

Vladyslav Pankratov
