import db from "../scripts/userScript.js"

function getPhotos (req, res) {
    res.send("OK!");
}

async function getMatch(req, res) {

    const {x, y, size, character} = req.query;

    const imgId = req.params.imgId;

   if(character ==="default"){
     return res.json(false);
   }
    
    const faceCard = await db.findFaceCardsByImg(imgId, character);


    const isMatch = isAMatch(x, y, size, faceCard);

    res.send(isMatch);

}

function isAMatch (x,y, size, faceCard){

    x = Number(x);
    y = Number(y);
    size = Number(size);
    faceCard.left = Number(faceCard.left);
    faceCard.top = Number(faceCard.top);

    return (
        x >= faceCard.left  &&
        x <= faceCard.left + size &&
        y >= faceCard.top &&
        y <= faceCard.top + size 
    
    );  
    
}

async function postScore(req,res) {

    const {name, seconds} = req.body;

    const score = await db.createScore(name, seconds);

    res.send(score);
}

async function getScoreBoard(req, res) {

    const scoreBoard = await db.findScoreBoard();

    res.send(scoreBoard);
}

export  default{
    getPhotos,
    getMatch,
    postScore,
    getScoreBoard
}

