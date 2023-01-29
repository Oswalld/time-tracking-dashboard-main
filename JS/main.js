const data = await fetch('data.json')
  .then(response => response.json())
  .catch(error => console.error(error));

const cards = document.querySelectorAll('.card');
const daily = document.querySelector('.daily-btn');
const weekly = document.querySelector('.weekly-btn');
const monthly = document.querySelector('.monthly-btn');

// charges les donnée daily sur le document avec les données du json

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    var title = card.getElementsByClassName("title")[0];
    var previous = card.getElementsByClassName("previous-data")[0];
    var current = card.getElementsByClassName("current-data")[0];

    title.innerHTML = data[i].title;
    previous.innerHTML = data[i].timeframes.daily.previous;
    current.innerHTML = data[i].timeframes.daily.current;

    daily.style.color = "#fff";
};

// lorsque l'on clique sur "daily" "weekly" et "monthly", change les donnée par rapport aux données du fichier json

daily.addEventListener("click", () => {
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        var previous = card.getElementsByClassName("previous-data")[0];
        var current = card.getElementsByClassName("current-data")[0];

        previous.innerHTML = data[i].timeframes.daily.previous;
        current.innerHTML = data[i].timeframes.daily.current;

        daily.style.color = "#fff";
        weekly.style.color = "#7078C9";
        monthly.style.color = "#7078C9";

    };
    
});
weekly.addEventListener("click", () => {
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        var previous = card.getElementsByClassName("previous-data")[0];
        var current = card.getElementsByClassName("current-data")[0];

        previous.innerHTML = data[i].timeframes.weekly.previous;
        current.innerHTML = data[i].timeframes.weekly.current;

        daily.style.color = "#7078C9";
        weekly.style.color = "#fff";
        monthly.style.color = "#7078C9";
    };

});
monthly.addEventListener("click", () => {
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        var previous = card.getElementsByClassName("previous-data")[0];
        var current = card.getElementsByClassName("current-data")[0];

        previous.innerHTML = data[i].timeframes.monthly.previous;
        current.innerHTML = data[i].timeframes.monthly.current;

        daily.style.color = "#7078C9";
        weekly.style.color = "#7078C9";
        monthly.style.color = "#fff";
    };

});