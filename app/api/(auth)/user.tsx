import { clerkClient } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";

async function fetchUser(userId: string) {
    try {
        const response = await clerkClient.users.getUser(userId);
        return response;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function UserProfile({ userId }: { userId: string }) {
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        fetchUser(userId)
            .then(response => setUserData(response))
            .catch(error => console.error('Error fetching user data:', error));
    }, [userId]);

    return (
        <div>
            {userData ? (
                <p>User Name: {userData.username}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default UserProfile;