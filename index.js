window.onload = (event) => {
    formSubmission();
}
function formSubmission(){  
    let inputValue = document.getElementById("num_in").value;
    let textMessage;
    if(inputValue === ""){
        document.getElementById("num_in").innerHTML = "";
    }
    else if(inputValue === "13"){
        textMessage = `<img class="badLuck" src="/assets/bad-luck.png">` + " Friday the 13th! Not a lucky number, at all!";
        showPopupWindow(textMessage, inputValue);
        document.getElementById("num_in").value = "";
    }
    else{
        showPopupWindow(textMessage, inputValue);
        document.getElementById("num_in").value = "";
    }
}

function showPopupWindow(message, value) {
    if(value === "13"){
        document.getElementById("popupOverlay").style.display = "block";
        document.getElementById("result").innerHTML = message;
    }
    else{
        document.getElementById("content").innerHTML = 
        `<div class="endMessage">
            <img class="thumbsUp" src="/assets/thumbs-up.png">
            <h2>You've successfully submitted number ${value}, thank you!</h2>
            <button type="button" class="goBackBtn" onClick="returnToForm()">Go back!</button>
        </div>`;
    }
}

function closePopupWindow() {
    document.getElementById("popupOverlay").style.display = "none";
}

function returnToForm(){
    document.getElementById("content").innerHTML = `
    <div class="formContainer">
        <h1>What's your lucky number?</h1>
        <input type="number" id="num_in" placeholder="Make your choice...">
        <button type="button" class="submitBtn" onclick="formSubmission()">Submit</button>
    </div>`;
}