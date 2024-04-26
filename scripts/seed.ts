const { PrismaClient } = require("@prisma/client")
const faker = require("faker");

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
                    title: faker.lorem.words(3), // Random topic title
                    categoryId: category.id,
                    userId: "sample_user_id", // Replace with actual user ID
                    createdAt: faker.date.recent(), // Random createdAt datetime
                },
            });
        }

        // Create posts for existing topics
        const topics = await database.topic.findMany();
        for (const topic of topics) {
            await database.post.create({
                data: {
                    message: faker.lorem.paragraph(), // Random post message
                    topicId: topic.id,
                    userId: "sample_user_id", // Replace with actual user ID
                    createdAt: faker.date.between(topic.createdAt, new Date()), // Random createdAt datetime between topic creation and now
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