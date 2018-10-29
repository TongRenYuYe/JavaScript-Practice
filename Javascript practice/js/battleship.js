/**
 * 这是一个战舰游戏的JS代码
 * 对象model定义战舰
 * 对象view控制视图
 * 对象controller控制游戏的核心逻辑
 * 三个对象各司其职
 * 代码的最后是单击和enter按钮的事件响应程序
 */
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [{ locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] }],

    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            // locations = ship.location;
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },
    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));// ! locatin-locations
            this.ships[i].locations = locations;
        }
    },
    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * this.boardSize);// row和col表达式有错
        }
        var newShipLocations = [];//少写一个s
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },
    collision: function (locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = model.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};
var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        //由于浏览器是先运行一遍，将所有的函数都“知晓”了，所以这里可以在方法parseGuess内部调用方法praseGuess
        //在JS函数内部可以调用函数，JS语句只去执行有效的语句
        //另:异步知识点：根据事件进行响应，而不是按部就班，跟着流程一步一步走，JS可以根据程序运行情况进行“跳步”
        //JS 比较灵活（“自由”）
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleship,in " + this.guesses + " guesses");
            }
        }
    }
}

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("Oops,please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that is not on the board.");
        } else if (row < 0 || row >= model.boardSize ||
            column < 0 || column >= model.boardSize) {
            alert("Oops, that is off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}
//函数parseGuess将输入的字符串中的字母转换成数字，并对输入内容进行格式检查
function init() {
    document.getElementById("fireButton").onclick = handleFireButton;
    document.getElementById("guessInput").onkeypress = handleKeyPress;
    model.generateShipLocations();
}
//创建时间事件响应程序
function handleFireButton() {
    var guess = document.getElementById("guessInput").value;
    controller.processGuess(guess);
    document.getElementById("guessInput").value = "";
}
//点击按钮的事件响应程序
function handleKeyPress(e) {
    if (e.keyCode == 13) {
        document.getElementById("fireButton").click();
        return false;
    }
}
//按回车键的事件响应程序
window.onload = init();