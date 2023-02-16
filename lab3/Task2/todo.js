let toDoList = [];

document.querySelector('.add-tasks').onclick = function(){

  if(document.querySelector('.input-tasks').value.length == 0){
     alert('the field cannot be empty!');
  }

  else{
     document.querySelector('.task-list').innerHTML += `
     <div class="task">
        <button class="done" onclick = completed(this)></button>
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
function completed(click){
   if(click.parentNode.querySelector('.done').style.backgroundColor == "white"){
      click.parentNode.querySelector('.done').style.backgroundColor = "rgb(38, 102, 116)"
      click.parentNode.querySelector('span').style.textDecoration = 'line-through';
   }
   else{
     click.parentNode.querySelector('.done').style.backgroundColor = "white"
      click.parentNode.querySelector('span').style.textDecoration = 'none';
   }
 }