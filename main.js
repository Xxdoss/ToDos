const addh = document.getElementById('add_hight')
const addl = document.getElementById('add_low')
const inputh = document.getElementById('inputh')
const inputl = document.getElementById('inputl')

    var count = [50,500,500]
        function genId() {return Math.random()}

            function add (){
                list.push({
                    name: inputh.value,
                    priority,
                    status:'To Do',
                    id : genId(),
                    color:'green'
                    })
            }

const STATUSES = {
    TODO: "To Do",      
    DONE: "Done",
};
const PRIORITIES = {
    HIGH: "High",
    LOW: "Low",
};

var localList = JSON.parse(localStorage.getItem('list'));
var list = [{name: '', priority: 'High', status: 'To Do', id: genId(), color: 'green'}]
list = localList

function addTask (event){
    event.preventDefault()
    if(event.target === addh){
        priority = PRIORITIES.HIGH
        add()
    }
    if(event.target === addl){
        priority = PRIORITIES.LOW
        add()
    }
    
    localStorage.setItem('list', JSON.stringify(list));
        localList = JSON.parse(localStorage.getItem('list'));
            console.log(localList,'local');
                console.log(list,'list');
    clear ()
    render()
    inputh.value=''
    inputl.value=''
}

function render (){

    list.forEach(elem => {

        const NewDiv = document.createElement('div')
        NewDiv.id = 'new_task'

    const NewCheck = document.createElement('div')
        NewCheck.className = 'check'

        const colors = ['red','lightgreen']
            if (elem.status == 'To Do'){
                NewCheck.style.background = colors[0]
                NewDiv.style.background = 'rgb(255, 255, 255)'
            }
            if (elem.status == 'Done'){
                NewCheck.style.background = colors[1]
                NewDiv.style.background = 'rgb(212, 212, 212)'
            }

function changeStatus (){
    
    var searchName = NewLabel.textContent;
    var index = list.findIndex(el => el.name === searchName);
  
             
  if (list[index].color==='green') {

        var searchName = NewLabel.textContent;
        list.findIndex(el => el.name === searchName);
        var searchTerm = NewLabel.textContent
            var searchId = list.find(city => city.name === searchTerm).id
                const ids = list.find((ids) => ids.id===searchId)
                ids.status = 'Done'
                ids.color = 'red'
                    localStorage.setItem('list', JSON.stringify(list));
                    
                clear ()
                render()
   }
   else {
        var searchName = NewLabel.textContent;
        list.findIndex(el => el.name === searchName);
        var searchTerm = NewLabel.textContent
            var searchId = list.find(city => city.name === searchTerm).id
                const ids = list.find((ids) => ids.id===searchId)
                ids.status = 'To Do'
                ids.color = 'green'
 
                    localStorage.setItem('list', JSON.stringify(list));
                  
                clear ()
                render()
   }
}
    const NewLabel = document.createElement('div')
        NewLabel.className = 'todo_description'
            if (elem.name == ''){
                NewLabel.textContent = "Найди себе дело"
            }
            else{
                NewLabel.textContent = elem.name
            }

        const DelNew = document.createElement('button')
            DelNew.className = 'del_hight'

            const ChangeNew = document.createElement('button')
                ChangeNew.id = "change_priority"

    function changePriority (){
        
        var searchName = NewLabel.textContent;
        var index = list.findIndex(el => el.name === searchName);
          
      if (list[index].priority==='High') {
    
            var searchName = NewLabel.textContent;
           list.findIndex(el => el.name === searchName);
            var searchTerm = NewLabel.textContent
                var searchId = list.find(city => city.name === searchTerm).id
                    const ids = list.find((ids) => ids.id===searchId)
                    ids.priority = 'Low'
                        localStorage.setItem('list', JSON.stringify(list));
                          
                    clear ()
                    render()
                    backHigh()
                    moveLow()
                    
       }
       else {
        var searchName = NewLabel.textContent;
        list.findIndex(el => el.name === searchName);
         var searchTerm = NewLabel.textContent
                 var searchId = list.find(city => city.name === searchTerm).id
                    const ids = list.find((ids) => ids.id===searchId)
                    ids.priority = 'High'
                        localStorage.setItem('list', JSON.stringify(list));
                       
                    clear ()
                    render()
                    backLow()
                    moveHight()
       }
    }
        function DelTask(){
            let searchName = NewLabel.textContent;
            let index = list.findIndex(el => el.name === searchName);
            list.splice(index,1)
            NewDiv.remove()
                localStorage.setItem('list', JSON.stringify(list));
               
            console.log (list)
            if (elem.priority === PRIORITIES.HIGH){
            backHigh()
            }
            if (elem.priority === PRIORITIES.LOW){
            backLow()
                }
        }

        ChangeNew.addEventListener('click',changePriority)
        NewCheck.addEventListener("click",changeStatus)
        DelNew.addEventListener("click", DelTask);

        if (NewLabel.textContent == elem.name){
           
        NewDiv.appendChild(NewCheck);
            NewDiv.appendChild(NewLabel);
                NewDiv.appendChild(DelNew);
                    NewDiv.appendChild(ChangeNew);
        }

        else {
            NewLabel.className = 'todo_empty'
                NewDiv.appendChild(NewLabel);
                    NewDiv.appendChild(DelNew);
        }

                if(elem.priority === PRIORITIES.HIGH){
                    todoBlockHigh.appendChild(NewDiv);
                  
                }
                if(elem.priority === PRIORITIES.LOW){
                    todoBlockLow.appendChild(NewDiv);
                }
    })

    localStorage.setItem('list', JSON.stringify(list));

       
}

function clear(){
    document.querySelectorAll('#new_task').forEach(function(){
        var elem = document.getElementById("new_task");
            elem.parentNode.removeChild(elem);
    })  
}

function backHigh (){
    count[0] -= 85
    count[1] -= 80
    count[2] -= 40
        var c = count[0]+'px'
        var d = count[1]+'px'
        var e = count[2] +'px'
            document.querySelector('.low').style.top = c;
                document.querySelector('.main').style.height = d;
                document.querySelector('.main').style.top = e; 
                return count[1],count[2]
}

function backLow (){
    count[1] -= 85
    count[2] -= 42.5
        var d = count[1] +'px'
        var e = count[2] +'px'
            document.querySelector('.main').style.height = d;
            document.querySelector('.main').style.top = e;
            return count[1],count[2]
}

addh.addEventListener('click', moveHight)
function d () {
    clear()
    render()
}
function moveHight(){
    count[0] += 85
    count[1] += 80
    count[2] += 40
        var c = count[0]+'px'
        var d = count[1]+'px'
        var e = count[2]+'px'
                document.querySelector('.main').style.height = d;
                document.querySelector('.main').style.top = e; 
                document.querySelector('.low').style.top = c

}

addl.addEventListener('click', moveLow)

function moveLow(){
    count[1] += 85
    count[2] += 42.5
        var d = count[1]+'px'
        var e = count[2]+'px'
            document.querySelector('.main').style.height = d;
            document.querySelector('.main').style.top = e;
            return count[1],count[2]
}

function prePender () {
    
    list.forEach(elem => {

              if(elem.priority === PRIORITIES.HIGH){
                    moveHight()
               }
                if(elem.priority === PRIORITIES.LOW){
                    moveLow()
                }
    })

    localStorage.setItem('list', JSON.stringify(list));

}

addh.addEventListener('click',addTask)
addl.addEventListener('click',addTask)


prePender()
render()

console.log(localStorage)