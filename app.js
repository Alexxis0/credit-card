let cardName = document.querySelector(".container_card_name");

fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
        let title = data.results[0].name.title;
        let firstName = data.results[0].name.first;
        let lastName = data.results[0].name.last;
        // console.log(title);
        // console.log(firstName);
        // console.log(lastName);

        cardName.textContent = title + " " + firstName + " " + lastName;
    });
