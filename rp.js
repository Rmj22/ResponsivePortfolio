var body_message = $('#message').value;
var email = 'RobinJones335@gmail.com';
var subject = 'Portfoilio Inqury';
$('#send').click(function() {

    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;

    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();
    console.log(mailto_link);

});

var sound = new Howl({
    src: ['sound.webm', 'sound.mp3', 'sound.wav'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });
