const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        var title = card.getElementsByClassName("title")[0];
        var previous = card.getElementsByClassName("previous-data")[0];
        var current = card.getElementsByClassName("current-data")[0];

        title.innerHTML = data[i].title;
        previous.innerHTML = data[i].timeframes.daily.previous;
        current.innerHTML = data[i].timeframes.daily.current;
    };


    const daily = document.querySelector('.daily-btn');
    const weekly = document.querySelector('.weekly-btn');
    const monthly = document.querySelector('.monthly-btn');
    
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
