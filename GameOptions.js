// let BOOL = true;
let movePlayer = true;
let game = true;
function Init() {
    let items = document.getElementsByClassName("block");

    for (let i = 0; i < items.length; i++) {
        const fun = function () {
            let collecion = document.querySelectorAll(".block:not(.active)");
            if (collecion.length == 1) {
                exit({ win: "DRAW" });
            }
            if (!this.classList.contains("active")) {

                if (movePlayer) { // movePlayer

                    if (this.innerHTML === "") {
                        this.classList.add("active");
                        this.classList.add("active_X");
                        this.innerHTML = "X"
                    }
                    let result = checkMap();
                    if (result.val) {
                        game = false;
                        setTimeout(function () {
                            exit(result);
                        }, 100);
                    }

                    movePlayer = !movePlayer;
                }

                if (game) {
                    setTimeout(function () {
                        botMove();
                    }, 200);
                }
            }
        }
        items[i].addEventListener("click", fun)
    }

}
function botMove() {
    let items = document.querySelectorAll(".block:not(.active)");

    let step = getRandomInt(items.length);

    items[step].innerHTML = "O";
    items[step].classList.add("active");
    items[step].classList.add("active_O");

    var result = checkMap();
    if (result.val) {
        setTimeout(function () {
            exit(result);
        }, 1);
    }

    movePlayer = !movePlayer;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function checkMap() {
    let block = document.querySelectorAll(".block");
    let items = [];
    for (let i = 0; i < block.length; i++) {
        items.push(block[i].innerHTML);
    }

    if (items[0] == "X" && items[1] == "X" && items[2] == "X" ||
        items[3] == "X" && items[4] == "X" && items[5] == "X" ||
        items[6] == "X" && items[7] == "X" && items[8] == "X" ||
        items[0] == "X" && items[3] == "X" && items[6] == "X" ||
        items[1] == "X" && items[4] == "X" && items[7] == "X" ||
        items[2] == "X" && items[5] == "X" && items[8] == "X" ||
        items[0] == "X" && items[4] == "X" && items[8] == "X" ||
        items[6] == "X" && items[4] == "X" && items[2] == "X")
        return { val: true, win: "Player" }
    if (items[0] == "O" && items[1] == "O" && items[2] == "O" ||
        items[3] == "O" && items[4] == "O" && items[5] == "O" ||
        items[6] == "O" && items[7] == "O" && items[8] == "O" ||
        items[0] == "O" && items[3] == "O" && items[6] == "O" ||
        items[1] == "O" && items[4] == "O" && items[7] == "O" ||
        items[2] == "O" && items[5] == "O" && items[8] == "O" ||
        items[0] == "O" && items[4] == "O" && items[8] == "O" ||
        items[6] == "O" && items[4] == "O" && items[2] == "O")
        return { val: true, win: "Bot" }

    return { val: false }
}
function drowLine() {
    let block = document.querySelectorAll(".block");
    let items = [];
    const [line] = document.getElementsByClassName('line');
    console.log({ line });
    for (let i = 0; i < block.length; i++) {
        items.push(block[i].innerHTML);
    }
    if (
        (items[0] == "X" && items[1] == "X" && items[2] == "X") ||
        (items[0] == "O" && items[1] == "O" && items[2] == "O")
    ) {
        line.classList.add('line111');
        return;
    }

    
    if (
        (items[3] == "X" && items[4] == "X" && items[5] == "X") ||
        (items[3] == "O" && items[4] == "O" && items[5] == "O")
    ) {
        line.classList.add('line222');
        return;
    }

    if (
        (items[6] == "X" && items[7] == "X" && items[8] == "X") ||
        (items[6] == "O" && items[7] == "O" && items[8] == "O")
    ) {
        line.classList.add('line333');
        return;
    }
    if (
        (items[0] == "X" && items[4] == "X" && items[8] == "X") ||
        (items[0] == "O" && items[4] == "O" && items[8] == "O")
    ) {
        line.classList.add('line123');
        return;
    }
    if (
        (items[6] == "X" && items[4] == "X" && items[2] == "X") ||
        (items[6] == "O" && items[4] == "O" && items[2] == "O")
    ) {
        line.classList.add('line321');
        return;
    }
    if (
        (items[0] == "X" && items[3] == "X" && items[6] == "X") ||
        (items[0] == "O" && items[3] == "O" && items[6] == "O")
    ) {
        line.classList.add('lineV111');
        return;
    }
    if (
        (items[1] == "X" && items[4] == "X" && items[7] == "X") ||
        (items[1] == "O" && items[4] == "O" && items[7] == "O")
    ) {
        line.classList.add('lineV222');
        return;
    }
    if (
        (items[2] == "X" && items[5] == "X" && items[8] == "X") ||
        (items[2] == "O" && items[5] == "O" && items[8] == "O")
    ) {
        line.classList.add('lineV333');
        return;
    }
}
function exit(obj) {
    drowLine()
    const [endMessage] = document.getElementsByClassName('play-btn');
    const [textMessage] = document.getElementsByClassName('text-result');
    textMessage.innerHTML = obj.win + " - GAME OVER";
    endMessage.style.display = 'block';
    setTimeout(() => {
        // alert(obj.win + " - GAME OVER");
        // location.reload();

    }, 100);
};
function startGame() {
    const [FirstMessage] = document.getElementsByClassName('Cross');
    FirstMessage.style.display = 'none';
    const [NextMessage] = document.getElementsByClassName('container');
    NextMessage.style.display = 'grid';
}
