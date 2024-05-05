Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zVNY8zcVE/model.json', modelLoaded);

function modelLoaded()
{
    console.log("Modelo cargado");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "La primera prediccion es " + prediccion1

    speak_data_2 = "La segunda prediccion es " + prediccion2

    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
    synth.speak(utterthis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error) 
    {
        console.log(error);
    } else
    {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label; 
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        
        prediccion1 = results[0].label;

        prediccion2 = results[1].label;
        speak();

        if (results[0].label == "&OK&") 
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;";  
        }

        if (results[1].label == "&OK&") 
        {
            document.getElementById("update_emoji2").innerHTML = "&#128077;";   
        }

        if (results[0].label == "#PEACE#") 
        {
            document.getElementById("update_emoji").innerHTML = "&#x270c;";
        }

        if (results[1].label == "#PEACE#") 
        {
            document.getElementById("update_emoji2").innerHTML = "&#x270c;";
        }
        
        if (results[0].label == "%HELP%") 
        {
            document.getElementById("update_emoji").innerHTML = "&#x270a;"; 
        }

        if (results[1].label == "%HELP%") 
        {
            document.getElementById("update_emoji2").innerHTML = "&#x270a;"; 
        }

        if (results[0].label == "*Love*") 
        {    
            document.getElementById("update_emoji").innerHTML = "&#x1faf0;"; 
        }
    
        if (results[1].label == "*Love*") 
        {
            document.getElementById("update_emoji2").innerHTML = "&#x1faf0;"; 
        }

        if (results[0].label == "+NICE+") 
        {
            document.getElementById("update_emoji").innerHTML = "&#x1f44c;"; 
        }
        
        if (results[1].label == "+NICE+") 
        {
            document.getElementById("update_emoji2").innerHTML = "&#x1f44c;"; 
        }

        if (results[0].label == "$CHILL$") 
        {
            document.getElementById("update_emoji").innerHTML = "&#x1f919;"; 
        }
            
        if (results[1].label == "$CHILL$") 
        {
            document.getElementById("update_emoji2").innerHTML = "&#x1f919;"; 
        }

        if (results[0].label == "°PEW PEW°") 
        {
            document.getElementById("update_emoji").innerHTML = "&#x1f449;"; 
        }
                
        if (results[1].label == "°PEW PEW°") 
        {
            document.getElementById("update_emoji2").innerHTML = "&#x1f449;"; 
        }
    }
}