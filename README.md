# Valorant Match Generator
This is just a little thing i made for generating custom game setups when i was bored :P

## What does this do?
---
This program generates match setups with random teams and maps and outputs them to a text file.

Example:  
![Example Image](https://i.imgur.com/pnjj8S4.png)  

## How to download and use this program
---
## **You will need Node.JS to use this program**  
### **If you do not have it install it from https://nodejs.org/** 
---
#### How to download
---
- Scroll all the way to the top of the page and click on the latest release.
- Click on `Source code (zip)` and download it.
- Extract the files in a folder.
- Open a command prompt in the folder where you installed the files.
- Run `npm i`
- Try running `node .` and if everything was done correctly the program should run without a `MODULE_NOT_FOUND` error.
---
#### How to use
---
When you first run the program you might see this:  
![Example Image](https://i.imgur.com/LxQaR14.png)  
This is happening beacause we have not defined any players in our `config.json` file.  
When you open the config.json file you should see this:
```JSON
{
    "players": [

    ],
    "matches": 1,
    "outputFile": "matches.txt"
}
```
- `"players"` is the list where we define our players
- `"matches"` is the number of matches we want to generate
- `"outputFile"` is the name of the file where we want to output our generated matches

You can define players by writing the players names in quotes and separating them by commas.  

Example:
```JSON
{
    "players": [
        "Player1",
        "Player2",
        "Player3",
        "Player4",
        "Player5",
        "Player6"
    ],
    "matches": 1,
    "outputFile": "matches.txt"
}
```

Now if you try to run the program again (with `node .`) you should get an output like this:  
![Example Image](https://i.imgur.com/RVMDN88.png)  
And if you look inside the folder where you ran the file you should see a file named `matches.txt` generated.  
If you open it you should see the match info generated in there.

### And that's pretty much it
---
#### Notes
- I will try to find a way to download the program without all this hassle in the future *(if people actually want to use this)*  
- The last player defined cannot have a comma after the quote. This will cause an error.  
- As i said you can change the number of matches and the output file name in config.json  
- I will probably make a CS:GO version if people are intrested as it's not that hard (i just gotta change the name and the maps :P)  
- If you have any more questions message me on Discord at `アトレア#1921`