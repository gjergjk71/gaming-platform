window.onload = function () {
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
			'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
			't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const wordsList = ["solid","tiger","try","buzz",
						"seal","pen","deer","foregoing",
						"mug","sweater","next","great"]
	var guessesLeft;
	var guessedLetters = {}; 
	var word;
	// Create alphabet ul-li
	var alphabet_ui = document.createElement('ul');
	for (var i=0;i < alphabet.length;i++) {
		var letter = alphabet[i];
		var li = document.createElement("li");
		//li.innerHTML = `<button id="alphabet_letter" class='btn btn-primary'> ${alphabet[i]} </button>`;
		button = document.createElement("button");
		button.id = letter;
		button.classList.add = "btn";
		button.classList.add = "btn-primary";
		button.innerHTML = letter;
		button.onclick = (MouseEvent) => {
			guessLetter(MouseEvent);
		};
		li.appendChild(button);
		alphabet_ui.appendChild(li);
	};
	document.getElementById("alphabet").appendChild(alphabet_ui);
	//
	function guessLetter(MouseEvent) {
		if (guessesLeft > 1 ) {
			
			var letter = MouseEvent["target"].id;
			if (word.split('').indexOf(letter) >= 0) {
				console.log("true)");
				for (var i=0;i<word.length;i++) {
					if (letter == word[i]) {
						guessedLetters[letter] = true;
					}
				}
				showGuessedLetters();
			}
			guessesLeft--;
			playerWon = checkWon()
			if (playerWon){
				info_h3.innerHTML = `You won!!`;
			} else {
				info_h3.innerHTML = `You've got ${guessesLeft} guesses left!`;

			}
		} else {
			info_h3.innerHTML = `You lost!!`;			
		}
	}
	function multiplyString(str,times) {
		multipliedString = ""
		for (x=0;x<times;x++) {
			multipliedString += str;
		};
		return multipliedString;
	};
	function showGuessedLetters() {
		show = ""
		for (var key in guessedLetters){
			if (!guessedLetters[key]){
				show += "_ ";
			} else {
				show += key;
			};
		document.getElementById("guessed_letters").innerHTML=show;
		console.log(guessedLetters);
		};
	};
	function checkWon() {
		for (var key in guessedLetters) {
			if (guessedLetters[key] == false) {
				return false;
			}
		}
		return true;
	}
	function play() {
		guessedLetters = {};
		guessesLeft = 10; // 
		word = wordsList[Math.floor(Math.random() * wordsList.length)]; //Word to guess
		console.log(word);
		for (var i=0;i<word.length;i++) {
			guessedLetters[word[i]] = false;
		};
		info_h3.innerHTML = `You've got ${guessesLeft} guesses left!`;
		showGuessedLetters()
		};
	
	info = document.getElementById("info");
	info_h3 = document.createElement("h3")
	info_h3.innerHTML = `You've got ${guessesLeft} guesses left!`;
	info.appendChild(info_h3);
	document.getElementById("reset_button").onclick = play
	play();

};
