# Інструкція з встановлення Shiftly

## Вимоги

Перед початком переконайтеся, що у вас встановлено:

- **Node.js** версії 18 або вище ([завантажити](https://nodejs.org/))
- **PostgreSQL** версії 14 або вище ([завантажити](https://www.postgresql.org/download/))
- **npm** (встановлюється разом з Node.js)

## Крок 1: Налаштування бази даних

1. Запустіть PostgreSQL сервер

2. Створіть нову базу даних:
```sql
CREATE DATABASE shiftly;
```

3. Створіть користувача (опціонально):
```sql
CREATE USER shiftly_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE shiftly TO shiftly_user;
```

## Крок 2: Налаштування Backend

1. Перейдіть до папки backend:
```bash
cd backend
```

2. Встановіть залежності:
```bash
npm install
```

3. Також встановіть Prisma Client:
```bash
npm install @prisma/client
```

4. Створіть файл `.env` на основі `.env.example`:
```bash
cp .env.example .env
```

5. Відредагуйте `.env` файл з вашими даними:
```env
DATABASE_URL="postgresql://shiftly_user:your_password@localhost:5432/shiftly?schema=public"
JWT_SECRET="ваш-секретний-ключ-мінімум-32-символи"
PORT=3000
NODE_ENV=development
```

**Важливо:** Змініть `JWT_SECRET` на випадковий рядок довжиною мінімум 32 символи для production!

6. Згенеруйте Prisma Client:
```bash
npx prisma generate
```

7. Створіть таблиці в базі даних:
```bash
npx prisma migrate dev --name init
```

8. Запустіть backend сервер:
```bash
npm run dev
```

Backend сервер буде доступний на `http://localhost:3000`

## Крок 3: Налаштування Frontend

1. Відкрийте новий термінал і перейдіть до папки frontend:
```bash
cd frontend
```

2. Встановіть залежності:
```bash
npm install
```

3. Створіть файл `.env` на основі `.env.example`:
```bash
cp .env.example .env
```

4. Переконайтеся, що `.env` містить правильний URL backend:
```env
VITE_API_URL=http://localhost:3000/api
```

5. Запустіть frontend сервер:
```bash
npm run dev
```

Frontend буде доступний на `http://localhost:5173`

## Крок 4: Перший запуск

1. Відкрийте браузер і перейдіть на `http://localhost:5173`

2. Натисніть "Зареєструватися"

3. Заповніть форму реєстрації:
   - Ваше ім'я
   - Email
   - Назва організації
   - Пароль

4. Після реєстрації ви автоматично увійдете в систему

## Перевірка роботи API

Ви можете перевірити, чи працює backend, відкривши:
```
http://localhost:3000/health
```

Повинна з'явитися відповідь:
```json
{
  "status": "OK",
  "message": "Shiftly API is running"
}
```

## Використання Prisma Studio (опціонально)

Для перегляду та редагування даних в базі даних:

```bash
cd backend
npx prisma studio
```

Prisma Studio відкриється в браузері на `http://localhost:5555`

## Вирішення проблем

### Backend не запускається

1. Перевірте, чи PostgreSQL працює
2. Перевірте правильність DATABASE_URL в .env
3. Перевірте, чи база даних створена
4. Спробуйте перезапустити міграції: `npx prisma migrate reset`

### Frontend не підключається до backend

1. Перевірте, чи backend запущений на порту 3000
2. Перевірте VITE_API_URL в frontend/.env
3. Перевірте браузерну консоль на помилки CORS

### Помилка при міграції бази даних

1. Перевірте з'єднання з PostgreSQL
2. Переконайтеся, що користувач має права на створення таблиць
3. Спробуйте вручну створити базу даних через psql

## Наступні кроки

Тепер ви можете:

1. Додати працівників через розділ "Працівники"
2. Створити відділи
3. Планувати зміни в розділі "Розклад"
4. Налаштувати автоматичне планування змін
5. Експортувати розклад в PDF або Excel

## Розробка

### Структура проекту

```
Shiftly/
├── backend/              # Node.js API
│   ├── src/
│   │   ├── controllers/  # Логіка обробки запитів
│   │   ├── routes/       # API маршрути
│   │   ├── middleware/   # Middleware (auth, etc)
│   │   └── utils/        # Утиліти
│   ├── prisma/
│   │   └── schema.prisma # Схема бази даних
│   └── .env             # Налаштування
│
└── frontend/            # React додаток
    ├── src/
    │   ├── components/  # React компоненти
    │   ├── pages/       # Сторінки
    │   ├── services/    # API сервіси
    │   ├── store/       # Zustand store
    │   └── types/       # TypeScript типи
    └── .env            # Налаштування
```

### Доступні команди

**Backend:**
- `npm run dev` - Запуск в режимі розробки
- `npm run build` - Збірка для production
- `npm start` - Запуск production версії
- `npx prisma studio` - Відкрити Prisma Studio
- `npx prisma migrate dev` - Створити нову міграцію

**Frontend:**
- `npm run dev` - Запуск в режимі розробки
- `npm run build` - Збірка для production
- `npm run preview` - Попередній перегляд production збірки

## Підтримка

Якщо у вас виникли питання або проблеми:
- Створіть issue на GitHub
- Перевірте логи в терміналі backend та frontend
- Перевірте браузерну консоль на помилки
