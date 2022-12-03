jQuery(document).ready(function($){

	$("#generate").on("click", function(){

		$("#subjectToPoem").hide();
		$("#goneBeyondPoem").hide();

		var partOne = [
			"Boddhisatva statues along the temple balcony    A monk painting their gold coats anew",
			"A convention of children kicking a sandal across baroque tiles in a game with no goal posts.",
			"My tailbone driving through tissue-thin carpet into concrete",
			"One radio to the east playing kantrum",
			"The plastic accompaniment of a tarp draped over scaffolding",
			"Sweat-basted clothes and gravity pulling stronger",
			"Rain, then no rain",
			"Preference for the world's song on tin roof",
			"Jasmine & jasmine & jasmine & orange peel & nag champa & jasmine",
			"Thoughts not meant to be believed ",
			"An aggravation of flies",
			"Gentle commotion of visitors laying shoes on a wire rack by the door",
			"Digitized camera shutters",
			"Disharmonic dings for texts & direct messages & Twitter comments & eBay alerts & stock market motion",
			"Tepid breath at nostril tip refusing to seduce as strongly as all this flurry around me",
			"The habit of reaching for my phone",
			"Siddhartha in multiplicity all around the wat: concrete, wood, brass, plastic     Some statues small enough to fit in cupped hands    Some grand enough to burst the roof of any place I've ever lived",
			"Avoiding what I don't like",
			"Language without contradiction existing underneath the language I know",
			"Inevitably American voices overriding the tuk-tuk motors and car horns",
			"The reminder of agent orange"
		]
		var randomOne = partOne[Math.floor(Math.random()*partOne.length)];

		var partTwo = [
			"Paint fumes invading my fever-weary head",
			"Searching for a pattern in pitch-shifting cheers",
			"Ankle bones to floor as pestle to mortar",
			"One radio to the west playing Motown",
			"One corner freed from the paint can that held it, rippling in the Mekong's reluctant allocation of wind",
			"All my senses heavier in the November-summer air",
			"The once-rain congregating as steam, awaiting further instruction",
			"Wanting the heat's one admission of remorse",
			"Jasmine & jasmine & jasmine & orange peel & nag champa & jasmine",
			"The body that dies, the body with the problem",
			"Becoming familiar with the one or two flies most persistent    Wanting to entrap them and demand if they harbor disease for which I have no accumulated defense",
			"Speculations on the origins of gold",
			"Automatic apertures deciding how much light gets in",
			"Disharmonic dings for texts & direct messages & Twitter comments & eBay alerts & stock market motion",
			"Obstructing the flow of breath to whatever place that breath is always driving toward",
			"The habit of reaching for sharper or more organic things",
			"Siddharta making mudra for wisdom and discourse and turning the Wheel of Law     Another with one hand in the other as a symbol of absolute balance",
			"Not liking what I don't understand or do well",
			"Digging for language and coming back with handfuls of dirt and worms",
			"The ease of movement wherever the CIA's beneficence made it safe for my American dollars and speech",
			"The imagined essence of napalm"
		]
		var randomTwo = partTwo[Math.floor(Math.random()*partTwo.length)];

		$("#subjectToPoem").text(randomOne);
		$("#goneBeyondPoem").text(randomTwo);
		$("#subjectToPoem").fadeIn(2000);
		setTimeout(() => {
			$("#goneBeyondPoem").fadeIn(2000);
		}, 2000);

	});


});