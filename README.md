Test Driven Development Notes

Describe: robotReply()

Test 1: "Function should return an array of numbers from 0 to the inputted number."
Code: robotReply(7);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7];

Test 2: "It should change every number that contains the number 3 to 'Won't you be my neighbor?'"
Code: robotReply(7);
Expected Output: [0, 1, 2, "Won't you be my neighbor?",4, 5, 6, 7];

Test 3: "It should also change every number that contains the number 2 to 'Boop!'(unless it contains a 3 - then it should still change it to 'Won't you be my neighbor?'"
Code: robotReply(7);
Expected Output: [0, 1, "boop!", "Won't you be my neighbor?",4, 5, 6, 7];

Test 4: "It should also change every number that contains the number 1 to 'Beep!'(unless it also contains a 2 or a 3."
Code: robotReply(13);
Expected Output: [0, "Beep!", "boop!", "Won't you be my neighbor?",4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"];



