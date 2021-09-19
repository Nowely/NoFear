# NoFear

Учебный проект первой степени. Сайт проекта: http://oknalet.ru/

## Prerequisites


* [Install Python 3](https://www.python.org/downloads/)

* [Install Node.js](https://nodejs.org/en/download/)

## Start application


### Запуск сервера:

1. Установить `pipenv`, если отсутствует:

```sh
pip install pipenv
```

2. Перейти в папку с сервером:

```sh
cd server
```

4. Установить зависимости сервера, создать виртуальную среду, если отсуствует, активация виртуальной среды:

```sh
pipenv install
```

5. Применить миграции:

```sh
python manage.py migrate
```

6. Создать админа, если требуется:

```sh
python manage.py createsuperuser
```

7. Запустить сервер:

```sh
python manage.py runserver
```

> В момент запуска сервер попытается собрать клиент автоматически, если папка с билдом отсутствует, 
> поэтому первый запуск может занять время.

### Полезные команды

Активировать / создать виртуальное окружение:

```sh
pipenv shell
```

Если были созданы новые модели, использовать следующую команду для создания новой миграции

```sh
python manage.py makemigrations
```

### Запуск клиента

Используется для разработки, изменения фронтовой части проекта

1. Перейти в папку с клиентом:

```sh
cd client
```

2. Установить зависимости:

```sh
npm install
```

3. Запуск:

```sh
npm start
```

> В момент запуска клиента удаляется билд, поэтому надо собрать его заново, использовав команду `npm run build`
> в папке с клиентом, либо перезапустить сервер.
