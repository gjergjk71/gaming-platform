window.onload = function () {
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
			'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
			't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const wordsList = ["solid","tiger","try","buzz",
						"seal","pen","deer","foregoing",
						"mug","sweater","next","great"]
	var guessesLeft;
	var word;
	function play() {
		guessesLeft = 10; // 
		word = wordsList[Math.floor(Math.random() * wordsList.length)]; //Word to guess
		};
	play();
	console.log(word);
};