// Profile.tsx
import { useParams } from "react-router-dom";

const Profile = () => {
    const { username } = useParams<{ username: string }>();

    return (
        <div className="bg-white p-10 rounded-lg flex flex-col items-center justify-center gap-4">
            <h1>Profile of {username}</h1>
            {/* You can fetch and display more user data here */}
        </div>
    );
};

export default Profile;