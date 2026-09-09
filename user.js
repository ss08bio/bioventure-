function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64yl7GFt8HQ":
        Script1();
        break;
      case "5XJzj9LCOFY":
        Script2();
        break;
      case "6FV7CYXoEHS":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementByld(`bgSongku`);
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementByld(`bgSongku`);
audio.src="musik.mp3";
audio.load();
audio.pause();
audio.volume=0.3;
}

function Script3()
{
  var audio = document.getElementByld(`bgSongku`);
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

