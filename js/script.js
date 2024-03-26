const url = "https://jsonplaceholder.typicode.com/users"
const tabBody = document.querySelector("#tab-body-user")
const inputField = document.querySelector("#user-input")
const selectedField = document.querySelector("#user-select")

const createTabs = (id, name, username, email) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const nameRow = document.createElement("td");
    const usernameRow = document.createElement("td");
    const emailRow = document.createElement("td");

    th.scope = "row";
    th.textContent = id;
    nameRow.textContent = name;
    usernameRow.textContent = username;
    emailRow.textContent = email;

    tr.append(th, nameRow, usernameRow, emailRow);
    tabBody.append(tr);
}

const getUser = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        return data
        
    } catch (error) {
        console.log(error);
    }
}

getUser().then(res => res.map(user => {
    createTabs(user.id, user.name, user.username, user.email)
})).then(() => {
    inputField.addEventListener("keyup", () => {
        console.log(inputField.value);
        if(selectedField.value === ""){
            alert("Scegli un'opzione valida!")
        } else {
            console.log(selectedField.value);
            
        }
    })
})