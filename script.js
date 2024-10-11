var Fstatus = document.querySelector("h2");
var btn = document.querySelector("button");

var check = 0;
        
btn.addEventListener("click", function () {
        console.log("clicked");
        if (check == 0) {
                Fstatus.innerHTML = ("Request Sent");
                Fstatus.style.color = "green";
                btn.innerHTML = "Remove";
                btn.style.backgroundColor = "grey";
                btn.style.color = "black";
                check = 1;
        }
        else {
                Fstatus.innerHTML = "Stranger";
                Fstatus.innerHTML = ("Stranger");
                Fstatus.style.color = "red";
                btn.innerHTML = "Add Friend";
                btn.style.backgroundColor = "#1d1db1";
                btn.style.color = "black";
                btn.style.color = "white";
                check = 0;
        }
        });
