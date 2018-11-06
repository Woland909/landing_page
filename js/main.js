$('.carousel').carousel({
    interval: 4000
  })

function Timer(timerContainerSelectorHourse, timerContainerSelectorMinutes, timerContainerSelectorSeconds) {
    let countdown;
    let timerContainerH = document.getElementById(timerContainerSelectorHourse);
    let timerContainerM = document.getElementById(timerContainerSelectorMinutes);
    let timerContainerS = document.getElementById(timerContainerSelectorSeconds);
    /**
     * Функция запуска таймера
     * @param {number} seconds 
     */
    this.start = function (seconds) {
        clearInterval(countdown);

        const now = Date.now();
        const then = now + seconds * 1000;

        
        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            
            if(secondsLeft === 0) {
              myTimer.start(86400);
            }
            
            displayTimeLeft(secondsLeft); 
        }, 1000);
    }

    /**
     * Функция для вывода таймера в разметку. Принемает секунды и выводит их в разметку в правильном формате.
     * @param {number} seconds -текущее время в секундах
     * @returns {void}
     */
    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const reminderSeconds = seconds % 60;
        const hours = Math.floor(minutes / 60);
        const reminderMinues = minutes % 60;

        const hourss = `${hours < 9 ? "0" : ''}${hours}`;
        const minutess = `${reminderMinues < 10 ? '0': ''}${reminderMinues}`;
        const secondss = `${reminderSeconds > 59 ? '0': ''}${reminderSeconds < 10 ? "0": ""}${reminderSeconds}`;

        const display1 = hourss;
        const display2 = minutess;
        const display3 = secondss;
  
        timerContainerH.textContent = display1;
        timerContainerM.textContent = display2;
        timerContainerS.textContent = display3;
    }

}

const btns = document.querySelectorAll("[data-time]");


const myTimer = new Timer ("hours",
'min', 'sec');

myTimer.start(1);

console.log(new Date(2342022356345))