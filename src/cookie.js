/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. 
 Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */


const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');


const isMatching = (full, chunk) => {
  return full.toLowerCase().indexOf(chunk.toLowerCase()) > -1;
}

const getCookies = () => {
  const cookieArr = document.cookie.split('; ');
  
  return cookieArr.reduce((prev, elem) => {
    const [name, value] = elem.split('=');

    prev.push({name, value});

    return prev;
  }, []);
}

const getFiltredCookies = (value) => {
  const cookies = getCookies();

  return cookies.filter(cookie => 
    isMatching(cookie.name, value) || isMatching(cookie.value, name))

}

const addCookie = (name, value) => {
  document.cookie = `${name}=${value}`;
}

const deleteCookie = (name) => {
  const date = new Date(0);
  document.cookie = `${name}=;expires=${date.toUTCString()}`;
}

const renderCookies = (cookies) => {
  listTable.innerHTML = '';

  cookies.forEach(cookie => {
    const tr = document.createElement('tr');
    const nameTD = document.createElement('td');
    const valueTD = document.createElement('td');
    const actionsTD = document.createElement('td');
    const button = document.createElement('button');

    nameTD.textContent = cookie.name;
    valueTD.textContent = cookie.value;
    button.textContent = 'Delete';
    button.setAttribute('data-name', cookie.name);
    actionsTD.appendChild(button);
    tr.appendChild(nameTD);
    tr.appendChild(valueTD);
    tr.appendChild(actionsTD);

    listTable.appendChild(tr);

  });

}

listTable.addEventListener('click', e => {

});

filterNameInput.addEventListener('keyup', function() {
    // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie
    const filterValue = filterNameInput.value;
    let cookie = [];

    addCookie(name, value);

    if (!filterValue) {
      cookies = getCookies();
    } else {
      cookies = getFiltredCookies();
    }

    renderCookies(cookies);
});

addButton.addEventListener('click', () => {
    // здесь можно обработать нажатие на кнопку "добавить cookie"
    const name = addNameInput.value;
    const alue = addValueInput.value;
    const filterValue = filterNameInput.value;
    let cookie = [];

    addCookie(name, value);

    if (!filterValue) {
      cookies = getCookies();
    } else {
      cookies = getFiltredCookies();
    }

    renderCookies(cookies);
});

renderCookies(getCookies());
