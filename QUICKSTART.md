# Швидкий старт Shiftly

## 🚀 Запуск за 5 хвилин

### Попередні вимоги
- Node.js 18+
- PostgreSQL 14+

### 1. Клонуйте репозиторій
```bash
git clone https://github.com/VladyslavPankratov/Shiftly.git
cd Shiftly
```

### 2. Налаштуйте базу даних
```bash
# Створіть базу даних PostgreSQL
createdb shiftly

# Або через psql:
psql -U postgres
CREATE DATABASE shiftly;
\q
```

### 3. Налаштуйте Backend
```bash
cd backend
npm install
npm install @prisma/client

# Створіть .env файл
echo 'DATABASE_URL="postgresql://postgres:password@localhost:5432/shiftly"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production-min-32-chars"
PORT=3000
NODE_ENV=development' > .env

# Запустіть міграції
npx prisma generate
npx prisma migrate dev --name init

# Запустіть сервер
npm run dev
```

Backend працює на http://localhost:3000 ✅

### 4. Налаштуйте Frontend (в новому терміналі)
```bash
cd ../frontend
npm install

# Створіть .env файл
echo 'VITE_API_URL=http://localhost:3000/api' > .env

# Запустіть додаток
npm run dev
```

Frontend працює на http://localhost:5173 ✅

### 5. Відкрийте додаток
Перейдіть на http://localhost:5173 та зареєструйтеся!

## 🎯 Перші кроки

1. **Зареєструйтеся** - створіть акаунт для вашої організації
2. **Додайте працівників** - перейдіть в розділ "Працівники"
3. **Створіть перші зміни** - перейдіть в "Розклад" та додайте зміни

## 📊 Перевірка роботи

- Backend Health: http://localhost:3000/health
- Prisma Studio: `npx prisma studio` (в папці backend)

## ❓ Проблеми?

### Backend не запускається
```bash
# Перевірте PostgreSQL
pg_isready

# Перезапустіть міграції
cd backend
npx prisma migrate reset
```

### Frontend не підключається
```bash
# Перевірте, чи працює backend
curl http://localhost:3000/health

# Перевірте .env файл
cat frontend/.env
```

## 📚 Детальна документація
- [SETUP.md](SETUP.md) - Повна інструкція з встановлення
- [FEATURES.md](FEATURES.md) - Список функцій та roadmap
- [README.md](README.md) - Загальна інформація про проект

## 🛠️ Корисні команди

**Backend:**
```bash
npm run dev          # Розробка
npm run build        # Збірка
npx prisma studio    # Database GUI
```

**Frontend:**
```bash
npm run dev          # Розробка
npm run build        # Збірка
npm run preview      # Preview збірки
```

## 🎨 Що далі?

- Налаштуйте доступність працівників
- Створіть відділи для організації
- Спробуйте автоматичне планування змін
- Експортуйте розклад

Готово! Успішного використання Shiftly! 🎉
