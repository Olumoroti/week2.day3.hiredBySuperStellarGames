let game_title = document.getElementById("game_title");
let button = document.getElementById("submit_button");
let description = document.getElementById("descrip");
let image = document.getElementById("img_link");
//let price = document.getElementById("price");
let form = document.querySelector(".form");
let form_container = document.querySelector(".form_container");
let inputs = [game_title, description, image];
let game = document.getElementById('games');
let body = document.querySelector('body');

button.addEventListener('click', submitInfo);



function submitInfo(event) {
    let isBlank;
    let result;

    isBlank = false;
    event.preventDefault();

    for (let i in inputs) {
        if (inputs[i].value == ''){
            alert('Please fill in all inputs.');
            isBlank = true;
            break;
        }
    }

    if (isBlank == false) {
        form_container.style.display = "none";
        body.removeChild(form);
        //game.style.display = "visible";

        let game_container = document.createElement("div");
        game_container.className = 'game_container';
        document.getElementById('games').append(game_container);

        let game_description = document.createElement('div');
        game_description.className = 'description';
        document.querySelector('.game_container').append(game_description);

        let new_title = document.createElement('h2');
        //new_title.className = 'description';
        new_title.innerHTML = game_title.value;
        document.querySelector('.description').append(new_title);

        let new_descrip = document.createElement('p');
        //new_title.className = 'description';
        new_descrip.innerHTML = description.value;
        document.querySelector('.description').append(new_descrip);

        let new_img = document.createElement('img');
        //new_title.className = 'description';
        new_img.src = image.value;
        document.querySelector('.game_container').append(new_img);

    }
}



