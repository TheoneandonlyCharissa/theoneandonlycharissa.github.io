const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggle.addEventListener('click', () => { 
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active')
    });

    console.log (`
        Access Granted 
        Hi there, curious developer!
        
        Looks like you've opened DevTools.
        Nice to meet someone who's just as curious!
        
        thanks for checking out my portfolio.
        I hope you enjoy exploring it.
        
        -Charissa Kalka
        `);

        const petals = [
            "img/8bitcherry.png",
            "img/8bitflower2.png"
        ];

        function createPetal(){
            const petal = document.createElement("img");
            petal.classList.add("petal");
            petal.src = petals[Math.floor(Math.random()*petals.length)];
            petal.style.left = Math.random()*100 + "vw";
            petal.style.width = (20 + Math.random()*25) + "px";
            petal.style.animationDuration = (4 + Math.random()*4) + "s";
            document.body.appendChild(petal);
            setTimeout(() => {
                petal.remove();
            },8000);

        }

        let idleTimer;
        function resetIdleTimer(){
            clearTimeout(idleTimer);
            idleTimer = setTimeout(() => {
                for(let i=0;i<10;i++){
                    setTimeout(createPetal, i*300);
                }
            },5000);
        }

        document.addEventListener("mousemove", resetIdleTimer);
        document.addEventListener("keydown", resetIdleTimer);
        resetIdleTimer();