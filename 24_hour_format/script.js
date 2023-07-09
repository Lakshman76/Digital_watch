const clock = () => {
        let hours = document.querySelector('#hr');
        let minutes = document.querySelector('#min');
        let seconds = document.querySelector('#sec');

        let hr = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();

        hours.innerHTML=hr;
        minutes.innerHTML=min;
        seconds.innerHTML=sec;
    }
    setInterval(clock, 1000);
