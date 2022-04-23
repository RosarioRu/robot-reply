# _Robot Reply_

#### By _**Rosario Ruvalcaba**_

#### _A website that has the user enter a number that is returned as a robot-sentence using Javascript looping and arrays._

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JavaScript_
* _jQuery_

## Description

_This webpage was created as the third project for Epicodus following the JavaScript section on arrays and looping. The page asks the users to enter a number. This input is the turned into an array to which "for" and ".map" loops are applied in order to transform the numbers into a "robot's" reply. Numbers containing a 3, 2, and 1 in the array are substituted with phrases and those that do not are unchanged. The result is returned to the user._


## Setup/Installation Requirements

* _Clone repository from Github and save a copy on own computer_

* _Using GUI or terminal, open cloned project directory (titled 'robot-reply') to view files_

* _Using GUI or terminal, open index.html file to view project locally_

* _If needed, stylesheet, image, audio, js file, and readme can also be opened from project home directory_

* _(See Github page for this project](https://rosarioru.github.io/robot-reply/)_

## Known Bugs

* _No known bugs_

## License

MIT License

Copyright (c) _April_2022_ _Rosario Ruvalcaba Harwood_


## Test Driven Development Notes

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



