$('div.footer>div>div:nth-child(4),canvas').hide();
$('body').css('-webkit-text-size-adjust','100%');
$('<style>body>div:first-child>div:first-child+div+div>span { display: inline-block; line-height: 1;}</style>').appendTo('head');
function playBuffer(key, vol, uid) {
    if (vol == undefined) {
        vol = DEFAULT_VELOCITY;
    }
    if (key in buffers) {
        var source = context.createBufferSource();
        source.buffer = buffers[key];
        var gainNode = context.createGain();
        gainNode.connect(context.destination);
        gainNode.gain.value = vol * ($(".volume").get(0).value);
        source.connect(gainNode);
        source.start(0);
        playings[uid + key] = [source, gainNode.gain];
    } else {
        console.log("no buffer:" + key);
    }
}
