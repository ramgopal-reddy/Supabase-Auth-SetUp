'use client';
import { useAuth } from "./context/AuthContext";
import { Button } from "./components/ui/button";
import { Avatar,AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import { SlidingNumber } from "./components/motion-primitives/sliding-number";


export const Home = () => {

    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds());

        useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date();
                setHours(now.getHours());
                setMinutes(now.getMinutes());
                setSeconds(now.getSeconds());
            }, 1000);

            return () => clearInterval(interval);
        }, []);

    const{signInWithGitHub,signOut,user}=useAuth()

    const displayUser=user?.user_metadata.user_name || user?.email;

    return(
            
        <div className="bg-black h-screen flex items-center justify-center">

            {user?(
                <div className="bg-white p-10 rounded-lg flex flex-col items-center justify-center gap-4">
                    <Avatar>
                        <AvatarImage src={user?.user_metadata.avatar_url} className="rounded-full w-18 h-18 sm:w-26 sm:h-26 lg:w-40 lg:h-40"/>
                    </Avatar>
                    <p>{user?.email}</p>
                    <h1>Welcome {displayUser}</h1>
                    <Button variant="destructive" onClick={signOut}>
                        SignOut
                    </Button>

                    <div className="flex gap-2">
                        <SlidingNumber value={hours} />
                        <SlidingNumber value={minutes} />
                        <SlidingNumber value={seconds} />
                    </div>
                </div>
            ):(
            <Button onClick={signInWithGitHub} className="bg-white text-black hover:bg-white-200">
                Sign with GitHub
            </Button>
            )}
            
        </div>
    );
}