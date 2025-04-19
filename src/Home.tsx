import { useAuth } from "./context/AuthContext";
import { Button } from "./components/ui/button";
import { Avatar,AvatarImage } from "@radix-ui/react-avatar";


export const Home = () => {

    const{signInWithGitHub,signOut,user}=useAuth()

    const displayUser=user?.user_metadata.user_name || user?.email;

    return(
        <div className="bg-black h-screen flex items-center justify-center">

            {user?(
                <div className="bg-white p-10 rounded-lg flex flex-col items-center justify-center gap-4">
                    <Avatar>
                        <AvatarImage src={user?.user_metadata.avatar_url} className="rounded-full w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32"/>
                    </Avatar>
                    <p>{user?.email}</p>
                    <h1>Welcome {displayUser}</h1>
                    <Button variant="destructive" onClick={signOut}>
                        Sign out
                    </Button>
                </div>
            ):(
            <Button onClick={signInWithGitHub}>
                Sign with GitHub
            </Button>
            )}
            
        </div>
    );
}