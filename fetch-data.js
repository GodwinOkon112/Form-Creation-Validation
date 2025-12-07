async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    let dataContainer = document.getElementById("api-data");
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = ''
        const userList = document.createElement('ul');
        userList.forEach(user=>{
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        })
        dataContainer.appendChild(userList);
        // console.log(users);
    }catch (error) {
       dataContainer.innerHTML = ' '
         dataContainer.innerHTML = "Failed to load user data.";
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData)