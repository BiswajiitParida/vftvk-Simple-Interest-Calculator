function compute()
{
    if( isNaN(parseInt(document.getElementById("principal").value)) || parseInt(document.getElementById("principal").value) <= 0){
        alert("Enter a positive number");
        return false;
    }
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    // calculate total interest
    var year = new Date().getFullYear()+parseInt(years);  
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
    var result = document.getElementById("result");    
    result.innerHTML = `If you deposit ${principal},<br> at an interest rate of ${rateval}%<br>You will receive an amount of ${interest},<br>in the year ${year}<br>`;
}

function updateRate() 
{   
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;     
}

        