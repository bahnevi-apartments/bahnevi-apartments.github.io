function mute(){
    if(player.paused){
        player.play();
        $('.play').show();
        $('.mute').hide();
    } else {
        player.pause();
        $('.play').hide();
        $('.mute').show();
    }
}
