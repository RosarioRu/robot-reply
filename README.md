Test Driven Development Notes
---------------------------------
General plan: 
1. Turn user's inputted number into the last digit of an array that starts with the number 0 and increments. 
2. Use map on the newly created array so each number gets the appropriate substitution.
3. The resulting modified array should have the right substitutions for #s. 
4. Output the numbers/words in the array to the user with .text or .html. 
5. Create the webpage for a user to input their number and receive the robot's response (output). 


Describe: robotReply()

Test: "Function should return an array of numbers from 0 to the inputted number."
Code: robotReply(7);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7];

Test: "It should change every number that contains the number 3 to 'Won't you be my neighbor?'"
Code: robotReply(7);
Expected Output: [0, 1, 2, "Won't you be my neighbor?",4, 5, 6, 7];

Test: "It should also change every number that contains the number 2 to 'Boop!'(unless it contains a 3 - then it should still change it to 'Won't you be my neighbor?'"
Code: robotReply(7);
Expected Output: [0, 1, "boop!", "Won't you be my neighbor?",4, 5, 6, 7];

Test: "It should also change every number that contains the number 1 to 'Beep!'(unless it also contains a 2 or a 3."
Code: robotReply(13);
Expected Output: [0, "Beep!", "boop!", "Won't you be my neighbor?",4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"];


