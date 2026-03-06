
import { prisma } from "../lib/prisma.js";

async function getFaceCard(fid) {
    const faceCard = await prisma.FindUnique({
        where: {
            id : fid
        }
    })

    return faceCard;
}

async function findFaceCardsByImg(imgId,character) {
    const faceCards = await prisma.faceCard.findUnique({
        where: {
            imageId : Number(imgId),
            selection: character
        }
    });

    return faceCards;
}

async function createScore(name, seconds) {
    const score = await prisma.scoreBoard.create({
        data: {
            name : name,
            seconds: seconds
        }
    })

    return score;
}

async function findScoreBoard() {
    const scoreBoard = await prisma.scoreBoard.findMany({
        orderBy: {
            seconds : "desc"
        }
    });

    return scoreBoard;
}

export default {
    getFaceCard,
    findFaceCardsByImg,
    createScore,
    findScoreBoard
}