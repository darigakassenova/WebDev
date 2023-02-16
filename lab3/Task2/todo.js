let toDoList = [];

document.querySelector('.add-tasks').onclick = function(){

  if(document.querySelector('.input-tasks').value.length == 0){
     alert('the field cannot be empty!');
  }

  else{
     document.querySelector('.task-list').innerHTML += `
     <div class="task">
        <button class="done" onclick = completed(this)><i class=check></i></button>
        <span>
           ${document.querySelector('.input-tasks').value}
        </span> 
        <button class="remove" onclick = deleting()>delete</button>
     </div>`;
     toDoList.push(document.querySelector('.input-tasks').value);
     console.log(toDoList);

     document.querySelector('.input-tasks').value = '';
  }

}
function deleting(){
  var delTask = document.querySelectorAll(".remove");
    for(var i = 0; i < delTask.length; i++){
        delTask[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}