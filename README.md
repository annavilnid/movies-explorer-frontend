# Movies Explorer
Сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете. Проект был реализован в рамках дипломной работы на платформе Яндекс.Практикум.

<a href="https://disk.yandex.ru/d/WFoLQhJYh1dyWw" target="_blank">Ссылка на макет figma</a> 

**Стек технологий:**
* HTML5;
* CSS3;
* JavaScript;
* React.js.  

**Фукционал:**
* Стартовая страница, содержит краткую информацию о проекте, технологиях и авторе.
* Основной функционал проекта вкдючает в себя возможность поиска фильмов со стороннего API и сохранение/удаление найденных фильмов к себе в аккаунт.
* При нажатии на кнопку «Регистрация» в шапке сайта на главной странице происходит переход на страницу регистрации по маршруту /signup.
* При нажатии на кнопку «Войти» в шапке сайта на главной странице происходит переход на страницу авторизации по маршруту /signin.
* У авторизованного пользователя в шапке сайта отображается кнопка «Аккаунт». При клике происходит переход на страницу редактирования профиля. На ней пользователь может изменить свои данные.
* При клике на кнопку «Выйти из аккаунта» происходит редирект на главную страницу и удаление JWT из локального хранилища или куки. Чтобы войти на сайт заново, пользователю потребуется повторно авторизоваться.

**Backend:**
* <a href="https://github.com/annavilnid/movies-explorer-api" target="_blank">Backend часть проекта располагается на Github</a> 

**Как установить и запустить проект:**
* Клонировать репозиторий:
    <pre><span class="pl-c1">git clone https://github.com/annavilnid/movies-explorer-frontend.git</span></pre>
* Установить зависимости:
    <pre><span class="pl-c1">npm install</span></pre>
* Собрать проект Вебпаком:
    <pre><span class="pl-c1">npm run build</span></pre>
* Запустить проект на локальном сервере:
    <pre><span class="pl-c1">npm run dev</span></pre>

**Сейчас сервер выключен, когда сервер включен проект доступен:**

* SERVER LINK: https://api.vilnid.nomoredomains.sbs <br/>
* FRONT LINK: https://vilnid.nomoredomains.sbs <br/>
* PUBLIC IP: 51.250.110.77 <br/>
* SERVER: api.vilnid.nomoredomains.sbs <br/>
* FRONT: vilnid.nomoredomains.sbs <br/>
