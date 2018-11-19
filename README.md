### Problem #89:  Roman Numeral

###### Instructions for running the code:

> cd /Roman#89

> npm install mocha chai request (if not installed)

> node romanMinimalForm.js 

> mocha romanMinimalFormSpec.js (for unit testing)



###### Sample of the output:
```   
sravyatamma@$ node romanMinimalForm.js
Total No.of characters (Original): 8850
Total No.of characters (Improved): 8107
Difference (Original - Improved) : 743
Time taken to calculate roman minimal solution: : 668.895ms

UNIT TEST:
sravyatamma@$ mocha romanMinimalFormSpec.js 

  Roman Minimal Pattern
    ✓ should convert CDXVIIII to CDXIX : pattern  VIIII to IX
    ✓ should convert MMDCCCLXXXIIII to MMDCCCLXXXIV: pattern  IIII to IV
    ✓ should convert MMMMCMLXXXXVIII to MMMMCMXCVIII: pattern  LXXXX to XC
    ✓ should convert MMDXXXXI to MMDXLI: pattern  XXXX to XL
    ✓ should convert DCCCCXLIII to CMXLIII: pattern  DCCCC to CM
    ✓ should convert MMCCCCXI to MMCDXI: pattern  CCCC to CD


  6 passing (19ms)


```

###### Why you choose the problem:
Accepted the challenge, which are in best interests of ADOBE.


###### Description of process followed in solving the problem:
 1. Spent time in understanding the problem rules.
 2. Listed out all the basic rules in addition to the subtractive combinations on a paper and evaluated few conditions.
 3. Started with coding to convert Roman to Integers & vice versa.
 4. Realized very quick that applying subtractive rules backwards will solve the problem.
 5. Submitted & verified the solution on Project Euler website.

Note: Initially the .txt file which is downloaded locally was used as an input. Later I had optimized by fetching 
it from the URL to meet the production level code requirements.

###### Time spent: ~5 hours including test cases

---


### Problem #81:  Path Sum

###### Instructions for running the code:

> cd /PathSum#81 

> npm install mocha chai request (if not installed)

> node minPathSum.js 

> mocha minPathSumSpec.js (for unit testing)



###### Sample of the output:
```   
sravyatamma@$ node minPathSum.js 
Minimal Path Sum of given matrix is: 427337
Time taken to calculate minimum path: : 1153.203ms


UNIT TEST:
sravyatamma@$ mocha minPathSumSpec.js 

  Path Sum
    ✓ should calculate minimum path of empty array and output 0
Time taken to calculate minimum path: : 175.839ms
    ✓ should calculate minimum path of [[1,2,3],[4,5,6],[7,8,9]] and output 21
Minimal Path Sum of given matrix is: 1333
    ✓ should calculate minimum path [[114,244,322],[656,545,623],[753,538,569], [555,344,989]] and outout 1333


  3 passing (21ms)

```

###### Why you choose the problem:
Accepted the challenge, which are in best interests of ADOBE.


###### Description of process followed in solving the problem:
 1. Watched couple of videos on how to find optimal paths using Dynamic Programming
 2. Performed hand calculations to brainstorm 4x4 matrix
 3. Understood the technique on first calculating the 2D Sum array by taking miminum of left & top elements.
 4. Developed the required algorithm using the formula.
 5. Submitted & verified the solution on Project Euler website.

Note: Initially the .txt file which is downloaded locally was used as an input. Later I had optimized by fetching 
it from the URL to meet the production level code requirements.

###### Time spent: ~5 hours including test cases

###### References
https://codereview.stackexchange.com/questions/60930/project-euler-81-minimum-path-sum-through-a-matrix

https://www.youtube.com/watch?v=wqCDkuKxmPQ&t=523s

---


### Problem #54:  Poker Hands

###### Instructions for running the code:

> cd /Poker#54 

> npm install mocha chai request (if not installed)

> node index.js

> mocha pokerWinningConditionsSpec.js (for unit testing)


###### Sample of the output:
```   
sravyatamma@$ node index.js 
Player 1 win count : 376
Time taken to run poker hands:: 587.760ms

UNIT TEST:
sravyatamma@$ mocha pokerWinningConditionsSpec.js 

  Winning Conditions
    ✓ should sort the cards
    ✓ should return High Card
    ✓ should check for One Pair
    ✓ should check for Two Pair and return boolean
    ✓ should check for Three Of A Kind
    ✓ should check for Four Of A Kind
    ✓ should check for Straight
    ✓ should check for Flush
    ✓ should check for Full House
    ✓ should check for Straight Flush
    ✓ should check for Royal Flush


  11 passing (8ms)

```

###### Why you choose the problem:
Accepted the challenge, which are in best interests of ADOBE.


###### Description of process followed in solving the problem:
 1. Since I am a newbie to poker, It drove me to watch videos on youtube to learn about the game & also have to play 
 couple of games with my husband to get better exposure on the game.
 2. Laid out poker winning conditions.
 3. Determine Player 1 vs Player 2 winning hands.
 4. Submitted & verified the solution on Project Euler website

Note: Initially the .txt file which is downloaded locally was used as an input. Later I had optimized by fetching 
it from the URL to meet the production level code requirements.

###### Time spent: ~9 hours including test cases

###### References: 
https://www.pokernews.com/poker-rules/

https://www.youtube.com/watch?v=JOomXP-r1wY

---

### Problem #18:  Triangle MaxPath Sum

###### Instructions for running the code:

> cd /TrianglePathSum#18 

> npm install mocha chai request (if not installed)

> node triangleMaxPathSum.js

> mocha triangleMaxPathSumSpec.js


###### Sample of the output:
```   
Time taken to calculate max path: : 0.609ms
Maximum Path Sum in given triangle: 1074

UNIT TEST:
sravyatamma@$ mocha triangleMaxPathSumSpec.js 

  Triangle Max Path Sum
    ✓ should calculate max path


  1 passing (4ms)

```

###### Why you choose the problem:
Since Min Path Sum (i.e., Problem #81) was related to Dynamic programming. 
It was quick to implement the knowledge transfer to Problem #18 as a bonus point.


###### Description of process followed in solving the problem:
 1. Start from len-1 row from bottom.
 2. Calculate the max of child elements and add to the current element.
 3. And traverse to the top.
 4. Return the top element which is the max path sum in a triangle.

###### Time spent: ~1 hour
