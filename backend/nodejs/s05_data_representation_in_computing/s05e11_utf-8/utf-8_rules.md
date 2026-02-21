# utf-8 Character Encoding Rules

## For 1 byte character
0xxxxxxx

## For 2 byte character
110xxxxx 10xxxxxx -> 110 means this single character will take 2 bytes, hence followed by 10 represents 2nd byte to represent the same character.

## For 3 byte character
1110xxxx 10xxxxxx 10xxxxxx -> similarly, 1110 means it will take 3 character and 10xxxxxx and 10xxxxxx is the 2nd and 3rd character

## For 4 byte character
11110xxx 10xxxxxx 10xxxxxx 10xxxxxx -> 11110 means 4 bytes and so on...

# Terminal command to check the hex dump and binary representaion of characters

xxd text.txt -> hex dump
xxd -b text.txt -> binary representation
xxd g -1 text.txt -> seperate groups with one byte each
