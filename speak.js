window.onload = function() {
    
    function random(thing) {
        return thing [Math.floor(Math.random()*thing.length)];
    }
    var face = document.getElementById("face");
    var hair = document.getElementById("hair");
    var nose = document.getElementById("nose");
    var eyes = document.getElementsByClassName("eye");
    var eeyes = document.getElementsByClassName("eeyes");
    var mouth = document.getElementById("mouth");
    var emouth = document.getElementsByClassName("emouth");
    var eyebrows = document.getElementsByClassName("eyebrows");
    var eeyebrows = document.getElementsByClassName("eeyebrows");
    var speech = document.getElementsByClassName("speech");
    var talking = document.getElementById("talking");
    var raise = false;
    var open = true;
    var currMouth = mouth;
    var currSpeech = speech[0];
    
    
    //Closing Eyes
    var commandEyes = setInterval(commandEyes, 2000);
    function commandEyes() {
        var closeEyes = setInterval(closeEyes, 100);
        function closeEyes() {
            if(open) {
                for(var i = 0; i<eyes.length; i++){
                    eyes[i].style.display = "none";
                    eeyes[i].style.display = "block";
                }
                open = false;
            } else {
                for(var i = 0; i<eyes.length; i++){
                    eyes[i].style.display = "block";
                    eeyes[i].style.display = "none";
                }
                open = true;
            }
            if(open) {
                clearInterval(closeEyes);
            }
        }
    }
    
    
    
    //Rising eyebrows
    var commandEyebrows = setInterval(coEb, 5000);
    function coEb() {
        var riseEyebrow = setInterval(riseEyebrow, 200);
        var rises = 0;
        function riseEyebrow() {
            if(raise) {
                for(var i = 0; i<eyebrows.length; i++){
                    eyebrows[i].style.display = "block";
                    eeyebrows[i].style.display = "none";
                }
                raise = false;
            } else {
                for(var i = 0; i<eyebrows.length; i++){
                    eyebrows[i].style.display = "none";
                    eeyebrows[i].style.display = "block";
                }
                raise = true;
            }
            rises++;
            if(rises == 4) {
                clearInterval(riseEyebrow);
            }
        }
    }
    
    
    //Change mouth and emotion, talk
    var changeMouth = setInterval(changeMouth, 6000);
    function changeMouth() {
        currMouth.style.display = "none";
        currMouth = random(emouth);
        currMouth.style.display = "block";
        talking.style.display = "block";
        currSpeech.style.display = "none";
        currSpeech = random(speech);
        currSpeech.style.display = "block";
    }
    
    
    //Change Colors
    var skinColor = document.getElementById("skincolor");
    var hairColor = document.getElementById("haircolor");
    var eyeColor = document.getElementById("eyecolor");
    var eyebrowColor = document.getElementById("eyebrowcolor");
    
    skinColor.onchange = function() {
        face.style.fill = this.value;
        nose.style.fill = this.value;
    }
    
    hairColor.onchange = function() {
        hair.style.fill = this.value;
    }
    
    eyeColor.onchange = function() {
        eyes[4].style.fill = this.value;
        eyes[5].style.fill = this.value;
    }
    
    eyebrowColor.onchange = function() {
        eyebrows[0].style.fill = this.value;
        eyebrows[1].style.fill = this.value;
        eeyebrows[0].style.fill = this.value;
        eeyebrows[1].style.fill = this.value;
    }
}
