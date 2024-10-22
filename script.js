
function calculate(currentAge, maximumAge, perDay) {
    let remainingAge = maximumAge - currentAge;  
    let totalSnacks = remainingAge * 365 * perDay;  
    return totalSnacks;

};

function lifetimesupplycalculator() {
    var fvrtSnak = prompt("Enter your favaourite snaks");
    var currentAge = parseInt(prompt("Enter your current age"));
    var maximumAge = parseInt(prompt("Enter your expected age (How long you think you live"));
    var perDay = parseInt(prompt("Enter How many snaks  you eat per day?"));


   if (isNaN(currentAge) || (isNaN(maximumAge)) || (isNaN(perDay))) {
    document.getElementById('msg').innerHTML = "Please enter valid number.";
    return;

  }
 let totalSnaks = calculate (currentAge , maximumAge  , perDay);



    document.getElementById('msg').innerHTML = `You will need ${totalSnaks} ${fvrtSnak} to last you until the age of ${maximumAge}.`;
}

  


  

