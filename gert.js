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
