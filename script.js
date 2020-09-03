function ToDo(text) {
    this.text = text;
    this.addToDo = function() {
        let todoContainer = document.createElement("div");
        todoContainer.classList.add("todo_container");

        let num = document.createElement("h2");
        num.classList.add("num");
        let numLength = document.querySelectorAll(".num").length;
        num.textContent = (numLength + 1) + ".";
        todoContainer.appendChild(num);

        let date = new Date();
        let months = ["January", "February", "March", "April",
         "May", "June", "July", "August", "September", "October",
          "November", "December"];
        datetime = document.createElement("p");
        datetime.classList.add("datetime");
        datetime.textContent = months[date.getMonth()] + " " + 
        date.getDate() + ", " + date.getFullYear() + " " + 
        date.toLocaleTimeString();
        todoContainer.appendChild(datetime);

        let p = document.createElement("p");
        p.classList.add("todo_text");
        p.append(this.text);
        todoContainer.appendChild(p);

        let buttons = document.createElement("div");
        buttons.classList.add("buttons");
        todoContainer.appendChild(buttons)

        let finishButton = document.createElement("button");
        finishButton.classList.add("finish_todo");
        finishButton.setAttribute("type", "button");
        finishButton.innerText = "Finish";
        buttons.appendChild(finishButton);

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete_todo");
        deleteButton.setAttribute("type", "button");
        deleteButton.innerText = "Delete";
        buttons.appendChild(deleteButton);

        let input = document.querySelector(".input");
        input.value = "";

        document.querySelector(".todo_holder").appendChild(todoContainer)
    }
    this.deleteToDo = function() {
        let deleteButton = document.querySelectorAll(".delete_todo");
        for (let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].addEventListener('click', function(e) {
                e.currentTarget.parentNode.parentNode.remove();
                let num = document.querySelectorAll(".num");
                for (let i = 0; i < num.length; i++) {
                    num[i].textContent = (i + 1) + ".";
                }
            }, false);
        }
    }
}

function getToDo() {
    let input = document.querySelector(".input");
    let submit = document.querySelector(".submit_todo");

    submit.addEventListener("click", function() {
        if (input.value !== "") {
            let newDo = new ToDo(input.value);
            newDo.addToDo();
            newDo.deleteToDo();
        } else {
            alert("Nothing!");
        }
    });

    // input.addEventListener("keypress", function(e) {
    //     if (e.keyCode === 13 && input.value !== "") {
    //         e.preventDefault();
    //         submit.click();
    //         // let newDo = new ToDo(input.value);
    //         // newDo.addToDo();
    //         // newDo.deleteToDo();
    //     }
    //     // } else {
    //     //     alert("Nothing!");
    //     // }
    // });
};

getToDo();