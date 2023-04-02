const divBody = document.querySelectorAll('body > div');
const h1 = document.querySelectorAll('h1');
const divGroup = document.querySelectorAll('body > div > div');
const a = document.querySelectorAll('a:not(.link-danger)');
const table = document.querySelectorAll('table');
const tbody = document.querySelectorAll('tbody');
const img = document.querySelectorAll('img');



divBody.forEach(element => {
    element.classList.add('container');
});

h1.forEach(element => {
    element.classList.add('my-3');
});

divGroup.forEach(element => {
    element.classList.add('my-3', 'p-3', 'border', 'rounded', 'shadow-sm');
});

a.forEach(element => {
    element.classList.add('link-primary');
});

table.forEach(element => {
    element.classList.add('table', 'table-striped', 'table-sm', 'align-middle');
});

tbody.forEach(element => {
    element.classList.add('table-group-divider');
});

img.forEach(element => {
    element.classList.add('img-fluid', 'mx-auto', 'd-block');
});
