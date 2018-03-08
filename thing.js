//how to add this, copy all of this, then right click the bookmark and paste all of this code in there. then you are done changing it! hit done, and have fun
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
console.log("jQuery activated");
var password = prompt("Welcome to the bundle of awesome! Insert the password please!");
if (password == "\141\160\160\154\145" || password == "\143\150\145\145\163\145\143\141\153\145") {
    var which = prompt("Which one? Type 1 for title page changer, type 2 for page editor, type 3 for bored, type 4 to shake the website, type 5 to get in a fight!");
    if (which == "1") {
        var titlepage = prompt("What would you like the name of the site to be?");
        document.title = titlepage;
    };
    if (which == "2") {
        alert('Hit the ` beside the one to turn it off! See this message any time by hitting = by the backspace button.');
        document.body.contentEditable = 'true';
        document.designMode = 'on';
        void 0;
        window.onkeydown = function(event) {
            if (event.keyCode === 192) {
                document.body.contentEditable = 'false';
                document.designMode = 'off';
                void 0;
                alert('Off!');
            };
            if (event.keyCode === 187) {
                alert('Hit the ` beside the one to turn it off! See this message any time by hitting = by the backspace button.');
            };
        };
    };
    if (which == "3") {
        var el = document.createElement('script');
        el.src = '//sitesgithub.github.io/bored.js';
        document.body.appendChild(el);
        void(0);

    };
    if (which == "4") {
        setInterval(function() {
            (function() {
                ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix) {
                    Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el) {
                        el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
                    });
                });
            }());
        }, 100);
    };
    if (which == "5") {
        var you = "100";
        var man = "100";
        var randomhit = Math.floor((Math.random() * 30) + 1);
        alert("You got in a fight, versus a homeless man!");
        man = 100 - randomhit;
        var memory = man;
        alert("You start fighting him, making him lose " + randomhit + " damage, now he has " + man + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        you = 100 - randomhit;
        var memoryus = you;
        alert("The homeless man hits you for " + randomhit + " damage! You now have " + you + " health.");
        you = memoryus - randomhit;
        memoryus = you;

        randomhit = Math.floor((Math.random() * 40) + 1);
        man = memory - randomhit;
        memory = man;
        alert("You hit him with a larger object for " + randomhit + " damage! He now has " + man + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");randomhit = Math.floor((Math.random() * 30) + 1);
        you = memoryus - randomhit;
        memoryus = you;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had" + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("The homeless man hit you for " + randomhit + " damage! You now have " + you + " health.");
        randomhit = Math.floor((Math.random() * 30) + 1);
        man = memory - randomhit;
        memory = man;
        if (man < 0 || man == 0) {
            alert("The man is dead! He had " + man + " health when he died.");
            throw new Error("Man Died");
        };
        if (you < 0 || you == 0) {
            alert("XD your dead get better, you had" + you + " health when you died");
            throw new Error("You died!");
        };
        alert("You hit him with a fist for " + randomhit + " damage! He now has " + man + " health.");
    };





} else {
    alert("Incorrect password!");
    throw new Error("User got incorrect password!");
}
