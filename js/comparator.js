window.onload = function () {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var categoria;
  var elegida; 
  var word; 
  var guess;
  var intentos = [];
  var lives;
  var contador;
  var espacios; 

  // Get elements
  var showLives = document.getElementById("vidas");
  var showCatagory = document.getElementById("scatagory");

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  // Select Catagory
  var selectCat = function () {
    if (elegida === categoria[0]) {
      catagoryName.innerHTML = "";
    }
  };

  // Create intentos ul
  result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        espacios = 1;
      } else {
        guess.innerHTML = "_";
      }

      intentos.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  // Show lives
  comments = function () {
    showLives.innerHTML = "Tenés " + lives + " Intentos";
    if (lives < 1) {
      showLives.innerHTML = "Perdiste la palabra era " + word;
    }
    for (var i = 0; i < intentos.length; i++) {
      if (contador + espacios === intentos.length) {
        showLives.innerHTML = "Ganaste la palabra era " + word;
      }
    }
  };

  // Animate man
  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  };

  // Hangman
  canvas = function () {
    mycanva = document.getElementById("canva");
    context = mycanva.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function () {
    mycanva = document.getElementById("canva");
    context = mycanva.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];

  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          intentos[i].innerHTML = geuss;
          contador += 1;
        }
      }
      var j = word.indexOf(geuss);
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    };
  };

  // Play
  play = function () {
    categoria = [["javascript", "barcelona", "html", "alura", "python"]];

    elegida = categoria[Math.floor(Math.random() * categoria.length)];
    word = elegida[Math.floor(Math.random() * elegida.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    intentos = [];
    lives = 10;
    contador = 0;
    espacios = 0;
    result();
    comments();
    selectCat();
    canvas();
  };

  play();

  // Reset

  document.getElementById("reset").onclick = function () {
    location.reload();
    play();
  };
};
