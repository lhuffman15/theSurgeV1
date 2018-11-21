
var vid1;
var vid2;
var vid3;
var vid4;
var vid5;
var vid6;
var vid7;
var vid8;
var vid9;
var vid10;
var vid11;
var failCounter = 0;
var vidNum = 1;
var challenge = 0;
var finalChallenge = false;
var third = 0;

function setup() {
  // specify multiple formats for different browsers
	vid1 = createVideo(['assets/video1.mp4'], vidLoad1);
	vid2 = createVideo(['assets/video2.mp4'], vidLoad2);
  vid3 = createVideo(['assets/video3.mp4'], vidLoad3);
  vid4 = createVideo(['assets/video4.mp4'], vidLoad4);
	vid5 = createVideo(['assets/video5.mp4'], vidLoad5);
	vid6 = createVideo(['assets/video6.mp4'], vidLoad6);
	vid7 = createVideo(['assets/video7.mp4'], vidLoad7);
	vid8 = createVideo(['assets/video8.mp4'], vidLoad8);
	vid9 = createVideo(['assets/video9.mp4'], vidLoad9);
  vid10 = createVideo(['assets/video10.mp4'], vidLoad10);
  vid11 = createVideo(['assets/video11.mp4'], vidLoad11);
}

// This function is called when the video loads

//intro
function vidLoad1() {
	if (vidNum == 1) {
	  vid1.play();
		vidNum = 2;
		challenge = 1;
	}
}

// Challenge 1
function vidLoad2() {
	if (vidNum == 2 && challenge == 1) {
	  vid2.play();
	}
}

function keyPressed() {

	// 1 - success
	if (keyCode === UP_ARROW && challenge === 1) {
		vidNum = 3;
		challenge = 2;
	} // 1 - fail
	else if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW || DOWN_ARROW && challenge === 1) {
		vidNum = 4;
		challenge = 2;
		failCounter++;
	}

	// 2 - success
	if (keyCode === LEFT_ARROW && keyCode === RIGHT_ARROW && challenge == 2) {
			vidNum = 6;
			challenge = 3;
	} // 2 - fail
	if (keyCode === UP_ARROW || RIGHT_ARROW && challenge == 2) {
			vidNum = 7;
			challenge = 3;
			failCounter++;
	}

	if (finalChallenge = true) {
		// 3 - challenge 1
		if (third === 1 && keyCode === UP_ARROW && keyCode === DOWN_ARROW) {
			third = 2;
		} else
			(third === 1 && (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)){
			third = 2;
			failCounter++;
		}
		// 3 - challenge 2
		if (third === 2 && keyCode === LEFT_ARROW && keyCode === DOWN_ARROW) {
			third = 3;
		} else
			(third === 2 && (keyCode === UP_ARROW || keyCode === RIGHT_ARROW)){
			third = 3;
			failCounter++;
		}
		// 3 - challenge 3
		if (third === 3 && keyCode === LEFT_ARROW && keyCode === RIGHT_ARROW) {
			vidNum = 9;
		} else
			(third === 3 && (keyCode === UP_ARROW || keyCode === DOWN_ARROW)){
			failCounter++;
			vidNum = 10;
		}

 	return false; // prevent any default behaviour
}

// 1 - success
function vidLoad3() {
	if (vidNum == 3 && challenge == 1) {
	  vid3.play();
		vidNum = 5;
	}
}

// 1 - fail
function vidLoad4() {
	if (vidNum == 4) {
	  vid4.play();
		vidNum = 5;
	}
}

// Challenge 2
function vidLoad5() {
	if (vidNum == 5 && challenge == 2) {
	  vid5.play();
	}
}

// 2 - success
function vidLoad6() {
	if (vidNum == 6) {
	  vid6.play();
		vidNum = 8;
	}
}

// 2 - fail
function vidLoad7() {
	if (vidNum == 7) {
	  vid7.play();
		vidNum = 8;

	}
}

// Challenge 3
function vidLoad8() {
	if (vidNum == 8 && challenge == 3) {
	  vid8.play();
		finalChallenge = true;
		third = 1;
	}
}

// 3 - success a

function vidLoad9() {
	if (vidNum == 9) {
	  vid9.play();
		vidNum = 10;
	}
}

// 3 - success b
function vidLoad10() {
	if (vidNum == 10 && failCounter > 3) {
	  vid10.play();
	}
}

// 3 - fail

function vidLoad11() {
	if (vidNum == 10 && failCounter >=3) {
	  vid11.play();
	}
}
