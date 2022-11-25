let cardNumber = document.querySelector(".container_card_number");
let cardDate = document.querySelector(".container_card_date");
let cardName = document.querySelector(".container_card_name");

fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
        let title = data.results[0].name.title;
        let firstName = data.results[0].name.first;
        let lastName = data.results[0].name.last;

        cardName.textContent = title + " " + firstName + " " + lastName;
        function numberRamdom(min, max) {
            return (
                Math.ceil(Math.random() * (max - min) + min) +
                " " +
                Math.ceil(Math.random() * (max - min) + min) +
                " " +
                Math.ceil(Math.random() * (max - min) + min) +
                " " +
                Math.ceil(Math.random() * (max - min) + min) +
                " " +
                Math.ceil(Math.random() * (max - min) + min)
            );
        }
        function dateRandom() {

        }
        cardNumber.textContent = numberRamdom(1000, 9999);

    });
