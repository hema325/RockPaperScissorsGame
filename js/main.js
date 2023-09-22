window.onload = () => {


    const images = { P: "images/paper.png", R: "images/rock.png", S: "images/scissors.png" };

    const game = document.querySelector(".wrapper .game")
    const controls = document.querySelectorAll(".wrapper .controls img");
    const result = document.querySelector(".wrapper .result");

    controls.forEach(control => {
        control.addEventListener("click", () => {

            if (game.classList.contains("playing"))
                return;

            controls.forEach(control => {
                control.classList.remove("active");
            });
            control.classList.add("active");

            game.classList.add("playing");
            result.textContent = "Wait...";
            game.firstElementChild.setAttribute("src", images["R"]);
            game.lastElementChild.setAttribute("src", images["R"]);

            const userValue = ["P", "R", "S"][control.getAttribute("index")];
            const computerValue = ["P", "R", "S"][Math.floor(Math.random() * 3)];

            let outcomes = {
                PP: "Draw",
                RR: "Draw",
                SS: "Draw",
                PR: "User",
                PS: "Computer",
                SR: "Computer",
                SP: "User",
                RP: "Computer",
                RS: "User"
            };

            let time = setTimeout(() => {
                game.firstElementChild.setAttribute("src", images[userValue]);
                game.lastElementChild.setAttribute("src", images[computerValue]);
                game.classList.remove("playing");

                let outcome = outcomes[userValue + computerValue];
                result.textContent = (outcome != "Draw" ? outcome + " won" : "Match Draw ");
            }, 2000);
        });
    });










}

