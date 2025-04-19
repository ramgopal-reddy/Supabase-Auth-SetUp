import { useAuth } from "./context/AuthContext";


export const Home = () => {

    const{signInWithGitHub,signOut,user}=useAuth()

    const displayUser=user?.user_metadata.user_name || user?.email;

    return(
        <div>

            {user?(
                <div>
                    <img src={user?.user_metadata.avatar_url} alt="avatar" width={100} height={100}/>
                    <p>{user?.email}</p>
                    <h1>Welcome {displayUser}</h1>
                    <button onClick={signOut}>
                        Sign out
                    </button>
                </div>
            ):(
            <button onClick={signInWithGitHub}>
                Sign with GitHub
            </button>
            )}
            
        </div>
    );
}