function end() {
    var answerText = document.getElementById("answerText").value;

    if(answerText == "最初に扉を叩いた依頼者"){
        location.href = "./4_Normal.html";
    } else if(answerText == "最初に扉を叩いた入会希望者"){
        location.href = "./4_True.html";
    } else{
        alert("答えが間違っています");
    }
}