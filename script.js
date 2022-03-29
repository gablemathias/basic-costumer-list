const list = document.querySelector('#list');

const clients = [
  {
    name: "Joao",
    email: "joao@test.com"
  },
  {
    name: "Lucas",
    email: "lucas@test.com"
  },
  {
    name: "Saulo",
    email: "lucas@test.com"
  }
];

clients.forEach((client) => {
  const itemList = document.createElement('li');
  const paragraph = document.createElement('p');
  const text = document.createTextNode(client.name);

  paragraph.appendChild(text);
  itemList.appendChild(paragraph);
  list.appendChild(itemList);
})
