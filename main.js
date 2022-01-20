prediction_1 ="";
prediction_2 ="";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 1000
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
 
function take_snapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log('mi5.version:', mi5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8ttaVPez2/model.json', modelloaded);
function modelloaded(){
    console.log('model loaded');
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is "+prediction_1;
    speak_data_2="and the second prediction is "+prediction_2;
    var utter_this=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utter_this);
}