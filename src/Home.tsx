"use client";
import React from "react";
import { useAuth } from "./context/AuthContext";
import { Button } from "./components/ui/button";
import { AnimatedBackground } from 'animated-backgrounds';


export const Home = () => {

    const{signInWithGitHub,signOut,user}=useAuth()

    const displayUser=user?.user_metadata.user_name || user?.email;

    return(
            
        <div className=" h-screen flex items-center justify-center">
            <AnimatedBackground animationName="starryNight" blendMode="difference"/>

            {user?(
                <div className="bg-white p-10 rounded-lg flex flex-col items-center justify-center gap-4">
                    <img src={user?.user_metadata.avatar_url} alt="Avatar" className="rounded-full w-18 h-18 sm:w-26 sm:h-26 lg:w-40 lg:h-40"/>
                    <p>{user?.email}</p>
                    <h1>Welcome {displayUser}</h1>
                    <Button variant="destructive" onClick={signOut}>
                        SignOut
                    </Button>
                </div>
            ):(
            <Button onClick={signInWithGitHub} className="bg-white text-black hover:bg-white-200">
                Sign with GitHub
            </Button>
            )}
            
        </div>
    );
}