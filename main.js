var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();

    //write code to change the button image with id microphone to "speak.gif" image
     //document.getElementById("monophy").src="monophy.gif"; 
     //change the gif image back to original image "mic.png" after 6 seconds as computer tries to listen to you for 6 seconds 
     //setTimeout(function() { document.getElementById("monophy").src="Shure_mikrofon_555.jpg"; }, 6000);
}

recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);

    if(content=="Take my selfie")
    {
      console.log("TAKING SELFIE...");
        speak();   
    }
    
}


function speak()
{
    console.log("starting speak function");
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function()
    {
    take_snapshot();
    save();
    },5000);
}
camera=document.getElementById("camera");

Webcam.set({
    width:300,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri + '"/>';
    });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}