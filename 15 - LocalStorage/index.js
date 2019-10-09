const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearBtn = document.querySelector('button');
const items = JSON.parse(localStorage.getItem('items')) || [];
let id = items.length > 0 ?  items.length + 1 : 1;


function handleSubmit(e){
  e.preventDefault();
  const text = addItems.querySelector('input').value;
  
  const item = {
    id: id,
    text: text,
    done: false
  };

  id++;
  items.push(item);
  localStorage.setItem('items', `${JSON.stringify(items)}`);
  this.reset();
  populateList(item, itemsList);
};

function populateList(plate = {id: 1, text: "Tapas", done: true}, platesList){
  const html = `
    <li>
      <input type="checkbox" data-index=${plate.id} id=${plate.id} ${plate.done ? "checked" : ""} />
      <label for=${plate.id}>${plate.text}</label>
    </li>
  `;
  platesList.insertAdjacentHTML('beforeend', html);
};

function handleClick(e){
  if(e.target.type === "checkbox"){
    const foundItem = items.find(item => item.id === Number(e.target.id));
    foundItem.done = !foundItem.done;
    localStorage.setItem('items', `${JSON.stringify(items)}`);
  };
};

addItems.addEventListener('submit', handleSubmit);
itemsList.addEventListener('click', handleClick);
items.forEach(item => populateList(item, itemsList));

clearBtn.addEventListener('click', () => {
  itemsList.innerHTML = "<li></li>";
  localStorage.removeItem('items');
})