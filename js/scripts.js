const userInput = "7";
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
    } else {
      return number;
    }
  });
  return arrayReply;
};
