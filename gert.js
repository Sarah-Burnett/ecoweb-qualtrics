// working script as good as gets atm
Qualtrics.SurveyEngine.addOnload(function(){
    console.log("stop");
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
	// prevent seeking 
	let previousTime = 0;
    let timerCall = "stop"
	const timer = () => {
		setTimeout(() => {
                    if (timerCall === "go") {
                        player.getCurrentTime().then((seconds) => {
                        console.log(seconds);
                        previousTime = seconds;
                        setTimeout(timer, 200);
                    })
                }}, 200)
        };
	player.on('play', () => {
        console.log('play');
        timerCall = "go"
        setTimeout(timer, 200);
	});

 player.on('seeking', () => {
     timerCall = "stop";
     player.setCurrentTime(previousTime);
 });
	
    // click next Button
    player.on('ended', () => {
        setTimeout(this.clickNextButton(), 200);
    });
    //hide next Button
    this.hideNextButton();


});


// vimeo api - cannot manipulate play, cannot turn off controls, so going with if participant tries to edit then video skips
/*
<div id="gert" style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${lm://Field/3}" frameborder=0 style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>
*/
Qualtrics.SurveyEngine.addOnload(function(){
    console.log("seeking turn it off like a light switch");
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
     // prevent seeking/replay
     let previousTime = 0;
     player.on('timeupdate', () => {
        player.getCurrentTime().then((seconds) => {
        previousTime = seconds;
        return previousTime;
    });
    });
    player.on('seeking', () => {
        player.setCurrentTime(previousTime);
        player.off('timeupdate');
    });
    
    
// this does not work - same origin policy
const playBar = iframe.contentWindow.querySelector('.play-bar.rounded-box');
	console.log(playBar);
	// remove play bar
	playBar.style.display = "none ! important";

    // take 10000 - this does not current work as second event listener doesnt stop function


    
    player.on('play', () => {
           const x = setInterval(() => {
           player.getCurrentTime().then((seconds) => {
            console.log(seconds);
            previousTime = seconds;
        })
    }, 200)
});

    player.on('seeking', () => {
        console.log(x);
        clearInterval(x);
        player.setCurrentTime(previousTime);
    });

    //take 100000
    const timer = setInterval(() => {
        player.getCurrentTime().then((seconds) => {
            console.log(seconds);
            previousTime = seconds;
            })
        }, 200)

 player.on('seeking', () => {
     clearInterval(timer);
     player.setCurrentTime(previousTime);
     setInterval(timer);
 });
    // click next Button
    player.on('ended', () => {
        this.clickNextButton();
    });
    //hide next Button
    this.hideNextButton();


});

/// lets get this shit solved

Qualtrics.SurveyEngine.addOnload(function(){
    console.log("back to black");
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
	// prevent seeking 
    let previousTime = 0;
    let timerCall = "stop"
	const timer = () => {
		setTimeout(() => {
                    if (timer === "go") {
                        player.getCurrentTime().then((seconds) => {
                        console.log(seconds);
                        previousTime = seconds;
                        setTimeout(timer, 200);
                    })
                }}, 200)
        };
	console.log(timer);
	player.on('play', () => {
        console.log('play');
        timerCall = "go";
        setTimeout(timer, 200);
	});

 player.on('seeking', () => {
     timerCall = "stop";
     player.setCurrentTime(previousTime);
 });
	
    // click next Button
    player.on('ended', () => {
        this.clickNextButton();
    });
    //hide next Button
    this.hideNextButton();

