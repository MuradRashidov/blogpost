import { deleteSession, getSession } from '@/lib/session'
import Link from 'next/link'
import React from 'react'
import SignInPanel from './SignInPanel';
import Profile from './Profile';

const Navbar = async () => {
    const session = await getSession();
    return (
        <>
            <h1 className="font-bold p-2 text-2xl">Paragraph Blog App</h1>
            <div className="flex flex-col md:flex-row ml-auto gap-2 [&>a]:transition  [&>a]:rounded-md [&>a:hover]:text-orange-100 [&>a:hover]:bg-orange-400 [&>a]:px-4 [&>a]:py-2">
                <Link href="/">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                {
                    session && session.user ?<Profile user={session.user}/>:<SignInPanel/>
                }
            </div>
        </>
    )
}

export default Navbar