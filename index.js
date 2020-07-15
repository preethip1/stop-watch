let intervalID
$("#min")[0].innerText = $(".dropdown")[0].value
$(".dropdown").change(changeTime)


function start() {
    console.log("start");



    if (!intervalID) {
        intervalID = setInterval(changedisplayTime, 1000)

    }

}

function reset() {
    console.log("reset");
    clearInterval(intervalID);
    intervalID=undefined;
    changeTime();
}

function pause() {
    console.log("pause");
    clearInterval(intervalID)
    intervalID=undefined;

}

function changeTime() {
    $("#min")[0].innerText = $(".dropdown")[0].value
    $("#sec")[0].innerText = "00"

}

function timesUp() {
    alert("time up");
}

function changedisplayTime() {
    let sec = parseInt($("#sec")[0].innerText);
    let min = parseInt($("#min")[0].innerText);
    sec = sec - 1;
    if (sec == -1) {
        min = min - 1;
        if (min == -1) {
            timesUp();
            clearInterval(intervalID);
            return;

        }
        sec = 59;
    }


    $("#sec")[0].innerText = sec;
    $("#min")[0].innerText = min;


}