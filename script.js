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

function createParagraph(textElement, parent){
  const paragraph = document.createElement('p');
  const text = document.createTextNode(textElement);
  paragraph.appendChild(text);
  parent.appendChild(paragraph);

}

clients.forEach((client) => {
  const itemList = document.createElement('li');

  createParagraph(client.name, itemList);
  createParagraph(client.email, itemList);

  list.appendChild(itemList);
})
