const input = document.getElementById('tags');
const list = document.getElementById('tags-list');
let remove = document.querySelectorAll('#tags-list .remove-tag');

let str = '';

function createItem(data){
  const li = document.createElement("li");
  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  
  const div = document.createElement("div");
  div.classList.add('form-check');
  
  const radio = `<input class="form-check-input" type="checkbox" name="tags" id="exampleRadios1" value=${data.trim()} checked>`
  
  const label = document.createElement("label");
  label.classList.add('form-check-label');
  label.innerText = data.trim();

  const span = `<span class='badge badge-danger badge-pill btn remove-tag'><i class='fa fa-times'></i></span>`;
  
  div.innerHTML += radio;
  div.append(label);
  li.append(div);
  li.innerHTML += span;
  list.append(li);
}

function remoteTag(){
  remove = document.querySelectorAll('#tags-list .remove-tag');
  remove.forEach(btn => {
    btn.addEventListener('click', (e) => {
      btn.parentElement.remove();
    })
  })
}


document.addEventListener('keydown', (e) => {
  
  if (e.code === 'Space' && input.value.replace(/\s/g, "")){

    console.log(input.value);
    createItem(input.value);
    input.value = '';
    remoteTag();
  }
  
})