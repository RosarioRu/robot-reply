//Business Logic 
const userInput = "7"; //this will have to be in user-interface logic, I think...
function robotReply(userInput) {
  const userNumber = parseInt(userInput);
  let arrayEndsWithUserNum = [];
  for (let i=0; i<=userNumber; i+=1) {
    arrayEndsWithUserNum.push(i);
  };
  let arrayReply = arrayEndsWithUserNum.map(function(number) {
    if (number.toString().includes("3")) {
      return "Won't you be my neighbor?";
    } else if (number.toString().includes("2")) {
      return "Boop!";
    } else if (number.toString().includes("1")) {
      return "Beep!";
    } else {
      return number;
    }
  });
  return arrayReply;
};

//UI Logic 

// UI Logic

$(document).ready(function(){
  $("form#").submit(function(event){
    event.preventDefault();
    
  });
});
