const addTaskInput = document.getElementById('addTaskInput');
const addTaskButton = document.getElementById('addTaskButton');
const unmadeTaskList = document.getElementById('unmadeTaskList');
const completedTaskList = document.getElementById('completedTaskList');
const removeUnmadeTasksButton = document.getElementById('removeUnmadeTasksButton');
const removeCompletedTasksButton = document.getElementById('removeCompletedTasksButton');



var allTasks = [];

function taskObj(task, complete){
        this.task = task;
        this.complete = status;
}

addTaskButton.addEventListener('click', function(){
    
    var newTask = addTaskInput.value;
    
    saveTaskToArray(newTask);
    
    //createTaskRowElement(newTask);
    
    forLoopTest();
    
})

function saveTaskToArray(taskToSave){
    event.preventDefault();
    
    var newTaskObj = new taskObj(taskToSave, false); 

    allTasks.push(newTaskObj);

}



function forLoopTest(){
    for(var i in allTasks){
        console.log(allTasks[i].task);  
        console.log(allTasks[i].complete);  
        
        var fetchTaskFromArray = allTasks[i].task;
        var fetchStatusFromArray = allTasks[i].complete; 
        
        createTaskRowElement(fetchTaskFromArray, fetchStatusFromArray);
        
    }


}

//testar med parametrar:
function createTaskRowElement(task, status){
    
        // Creating DOM elements...   
        const singleTaskWrapper = document.createElement('div');
        const checkDiv = document.createElement('div');
        const taskDiv = document.createElement('div');
        const removeSingleTaskButton = document.createElement("button"); //måste sätta value på denna knapp???
           
        // ...add classes/styling to these elements...    
        singleTaskWrapper.classList.add('singleTaskWrapper');
        checkDiv.classList.add('checkDiv');
        taskDiv.classList.add('taskDiv');

        // Release of js-elements into DOM
        unmadeTaskList.appendChild(singleTaskWrapper);
        singleTaskWrapper.appendChild(checkDiv);
        singleTaskWrapper.appendChild(taskDiv);
            
        // Filling the elements with content
        checkDiv.innerHTML = '<span class="glyphicon glyphicon-glyphicon glyphicon-heart-empty" aria-hidden="true"></span> ';
        taskDiv.innerHTML = task;
        taskDiv.appendChild(removeSingleTaskButton); 
    
    
}


// funkar jättebra!!:
//function createTaskRowElement(){
//    
//        // Creating DOM elements...   
//        const singleTaskWrapper = document.createElement('div');
//        const checkDiv = document.createElement('div');
//        const taskDiv = document.createElement('div');
//        const removeSingleTaskButton = document.createElement("button"); //måste sätta value på denna knapp???
//           
//        // ...add classes/styling to these elements...    
//        singleTaskWrapper.classList.add('singleTaskWrapper');
//        checkDiv.classList.add('checkDiv');
//        taskDiv.classList.add('taskDiv');
//
//        // Release of js-elements into DOM
//        unmadeTaskList.appendChild(singleTaskWrapper);
//        singleTaskWrapper.appendChild(checkDiv);
//        singleTaskWrapper.appendChild(taskDiv);
//            
//        // Filling the elements with content
//        checkDiv.innerHTML = '<span class="glyphicon glyphicon-glyphicon glyphicon-heart-empty" aria-hidden="true"></span> ';
//        taskDiv.innerHTML = allTasks[allTasks.length-1].task; //lägger till sista task från arrayen
//        taskDiv.appendChild(removeSingleTaskButton); 
//    
//    
//}