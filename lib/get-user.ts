import { clerkClient } from "@clerk/nextjs/server";

export async function getUserById(userId: string) {
    try {
        const user = await clerkClient.users.getUser(userId);
        return user.firstName + " " + user.lastName;
    } catch (error) {
        console.error('Error retrieving user:', error);
        throw error;
    }
}