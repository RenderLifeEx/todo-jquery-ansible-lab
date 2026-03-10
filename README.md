# Todo List App

![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Простое фронтенд-приложение Todo List на jQuery, созданное для экспериментов с деплоем и настройкой серверов через Ansible.

## 📌 Особенности проекта

- Минималистичный Todo List на чистом jQuery
- Репозиторий с плейбуками и настройками nginx [тут](https://github.com/RenderLifeEx/ansible-lab#)
- Запускается на Node.js v20

## 🛠 Технологический стек

| Компонент                 | Назначение                          |
|---------------------------|-------------------------------------|
| **Node.js 20**            | Среда выполнения                    |
| **jQuery 3.7.1**          | Базовый функционал приложения       |
| **jQueryUi 1.14.1**       | Бибиотека UI компонентов            |
| **Vite 6.2.0**            | Запуск приложения локально          |

## 🚀 Быстрый старт

### Локальная разработка
```bash
git clone git@github.com:RenderLifeEx/todo-jquery-ansible-lab.git
cd todo-jquery-ansible-lab
pnpm install
nvm use 20
pnpm run dev
```
Иногда после запуска почему то не приходят задачи и при создании ручка POST отдает 404, но если перезапустить сервер бека или написать в src/routes/todos.ts на беке консоль лог то начинает работать

## 📂 Структура проекта

```
todo-jquery-ansible-lab/
├── index.html          # Основной HTML-файл
└── vite.config.js      # Настройки запуска на localhost
```

##  📜 Лицензия
MIT License