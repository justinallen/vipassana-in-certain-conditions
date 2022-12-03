jQuery(document).ready(function($){

	var sound = document.getElementById("audioClip");

	function playAudio() {
	  sound.play();
	}

	function pauseAudio() {
	  sound.pause();
	}

	$("#bullshit").on("click", function(){

		var partOne = [
			"efficiency",
			"optimization",
			"innovation",
			"markets",
			"competition",
			"replacing humans with processes",
			"high-stakes metrics"
		]
		var randomOne = partOne[Math.floor(Math.random()*partOne.length)];

		var partTwo = [
			"optimizes",
			"restructures",
			"reforms",
			"streamlines",
			"reduces"
		]
		var randomTwo = partTwo[Math.floor(Math.random()*partTwo.length)];

		var partThree = [
			"legacy staff",
			"inefficient processes",
			"the weakest link in the chain",
			"cumbersome labor agreements"
		]
		var randomThree = partThree[Math.floor(Math.random()*partThree.length)];

		var partFour = [
			"to maximize return",
			"to reduce friction",
			"to increase transparency",
			"to improve access"
		]
		var randomFour = partFour[Math.floor(Math.random()*partFour.length)];

		$("#output").text(randomOne + ' ' + randomTwo + ' ' + randomThree + ' ' + randomFour);
		playAudio();

	});


});