# Тестовое задание на вакансию "Junior frontend-разработчик" в компанию JetStyle

Ссылка на рабочее приложение https://testtask.olegrc2.ru

**Задание:**<br>

Сделать демо-страницу для редактирования списка книг. Книги хранятся в localStorage.
Страница должна позволять создавать, редактировать, удалять книги и отображать список книг.

У каждой книги есть:

-   автор, текстовое поле;
-   название, текстовое поле;

Страница должна выводить список книг и форму добавления новых книг. Детали на усмотрение исполнителя, не рекомендуется тратить на задание больше пары часов.

Обязательно:

-   Использование react
-   Использование хуков https://reactjs.org/docs/hooks-intro.html

Плюсами будут:

-   Наличие тестов
-   Приятный внешний вид.
-   Возможность добавлять книге обложки в виде картинки 145х205 px, которые хранится в localStorage в base64.

**Что сделано и как работает:**<br>

Задание выпонено в соответствии с требованиями.<br>
В верхей части страницы присутствует форма для добавления книг с двумя инпутами (автор и название). После добавления книга попадает в LocalStorage и отображается на странице, если в LocalStorage уже присутствуют книги - они сразу отобразятся в списке.<br>
У книги есть 3 кнопки - удалить, редактировать и добавить изображение, при редактировании открывается окно, где можно изменить текущие автора и название на новые.
