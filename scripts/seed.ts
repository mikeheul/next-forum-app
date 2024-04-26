const { PrismaClient } = require("@prisma/client")

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Computer Science" },
                { name: "Music" },
                { name: "Fitness" },
                { name: "Photography" },
                { name: "Accounting" },
                { name: "Engineering" },
                { name: "Filming" },
                { name: "Graphic Design" },
                { name: "Web development" },
            ]
        })

        // Create topics for existing categories
        const categories = await database.category.findMany();
        for (const category of categories) {
            await database.topic.create({
                data: {
                    title: `Sample Topic for ${category.name}`,
                    categoryId: category.id,
                    // Assuming userId and categoryId are already present in your database
                    userId: "sample_user_id",
                },
            });
        }

        // Create posts for existing topics
        const topics = await database.topic.findMany();
        for (const topic of topics) {
            await database.post.create({
                data: {
                    message: `Sample post for ${topic.title}`,
                    topicId: topic.id,
                    // Assuming userId and topicId are already present in your database
                    userId: "sample_user_id",
                },
            });
        }

        console.log("Success");

    } catch (error) {
        console.log("Error seeding the database categories", error)
    } finally {
        await database.$disconnect();
    }
}

main();