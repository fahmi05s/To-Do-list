console.log("Hello, World!");

const input = document.getElementById("input");
const button = document.getElementById("bt");
const list = document.getElementById("list");

button.addEventListener("click", function () {

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Catatan Kamu tidak boleh kosong");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.className = "delete-button";

    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
    });
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    list.appendChild(li);
 
    input.value = "";
});

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});
