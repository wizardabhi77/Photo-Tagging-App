
import { prisma } from "../lib/prisma.js"

async function main() {

    await prisma.image.create({
        data: {
            source: "./assets/group.jpeg"
        }
    });

    await prisma.faceCard.createMany({
        data: [
            {
                selection:"NinnuKori",
                left: 829,
                top: 707,
                size: 100,
                imageId: 1
            },
            {
                selection: "Dalapathi",
                left: 595,
                top: 702,
                size: 100,
                imageId: 1
            },
            {
                selection: "Uppena",
                left: 136,
                top: 715,
                size: 100,
                imageId: 1
            },
            {
                selection: "MSDhoni",
                left: 320,
                top: 698,
                size: 100,
                imageId: 1
            },
            {
                selection: "Spiderman",
                left: 432,
                top: 709,
                size: 100,
                imageId: 1
            },
            {
                selection: "Single",
                left: 697,
                top: 696,
                size: 100,
                imageId: 1
            }
        ]
    });


}

main()
.then (()=> {
    console.log("Database Seeded");
})
.catch((error) => console.error(error))
.finally(async () => {
    await prisma.$disconnect();
});