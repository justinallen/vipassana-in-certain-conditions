jQuery(document).ready(function($){

	$("#generate").on("click", function(){

		$(".helpertext").fadeOut();

		$("#subjectToPoem").hide();
		$("#goneBeyondPoem").hide();

		var partOne = [
			"Boddhisatva statues along the temple balcony...A monk painting their gold coats anew",
			"a convention of children kicking a sandal across baroque tiles in a game with no goal posts",
			"my tailbone driving through tissue-thin carpet into concrete",
			"one radio to the east playing kantrum",
			"the blue tattered anachronism of a tarp draped over scaffolding adjacent to the altar",
			"gravity pulling stronger on my sweat-basted clothes",
			"rain, then no rain",
			"preference for the world's song pouring rather than trickling onto tin roof",
			"jasmine & jasmine & jasmine & orange peel & nag champa & jasmine",
			"thoughts that are not meant to believed",
			"an aggravation of flies",
			"gentle commotion of visitors laying shoes on a wire rack by the door",
			"digitized camera shutters",
			"disharmonic dings for texts & direct messages & Twitter comments & eBay alerts & stock market motion",
			"tepid breath at nostril tip refusing to seduce as strongly as this flurry of activity around me",
			"the habit of reaching for my phone",
			"Siddhartha in multiplicity all around the wat: concrete, wood, brass, plastic…some statues small enough to fit in cupped hands, some grand enough to burst the roof of any place I've ever lived",
			"running from what I don't like",
			"language without contradiction buried underneath the language I know",
			"inevitably American voices overriding the tuk-tuk motors and car horns",
			"the reminder of agent orange"
		]
		var randomOne = partOne[Math.floor(Math.random()*partOne.length)];

		var partTwo = [
			"paint fumes around my fever-weary head",
			"searching for a pattern in other people's pitch-shifting exclamations",
			"ankle bones to floor as pestle to mortar",
			"one radio to the west playing Motown",
			"one tarp corner freed from the paint can that held it, rippling plastically in the Mekong's reluctant allocation of wind",
			"all my senses heavier in the November-summer air",
			"the once-rain congregating as steam, awaiting further instruction",
			"thinking of rain as the heat's admission of remorse",
			"jasmine & jasmine & jasmine & orange peel & nag champa & jasmine",
			"how impermanence could only be a problem for the body",
			"becoming familiar with the one or two flies most persistent…wanting to entrap them and demand if they harbor disease for which I have no accumulated defense",
			"speculations on the origins of gold",
			"automatic apertures deciding how much light gets in",
			"disharmonic dings for texts & direct messages & Twitter comments & eBay alerts & stock market motion",
			"being the obstruction between breath's origin and destination",
			"reaching for things with sharp edges to manually shape my mind",
			"one Buddha's mudra for wisdom and discourse and turning the Wheel of Law...another Buddha with one hand laid atop the other as a symbol of absolute balance…reclining Buddha as model of rest but of which kind his temperament does not reveal ",
			"disliking what I don't do well",
			"digging for language and coming back with handfuls of dirt and worms",
			"the ease of movement wherever the CIA's beneficence made it safe for my American dollars and speech",
			"the lingering essence of napalm"
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