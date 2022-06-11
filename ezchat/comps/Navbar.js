import { useRouter } from "next/router"
import styled from "styled-components";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { useContext } from 'react';
import { AuthContext } from "../context/auth";


const RegLoginCont = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 15vw;
`
const Head = styled.h3`
    display: flex;
    justify-content: center;
    font-family: 'Source Code Pro', monospace;
    font-size: 24px;
    cursor: pointer;
`
const HeadCont = styled.div`

`

const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    // width: 100vw;
    border-bottom: 1.5px solid #323742;
`
const Btns = styled.button`
    font-family: 'Source Code Pro', monospace;
    padding: 6px;
    border: 0;
    background: #ffea00;
    color: #333;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    &:hover{
        background-color: #b1a200;
    }
`

export default function Navbar() {
    const { user } = useContext(AuthContext);
    const handleSignOut = async () => {
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            isOnline: false,
        })
        await signOut(auth);
    }
    const r = useRouter();
    return (
        <Nav>
            <HeadCont>
                <Head onClick={
                    () => r.push('/')
                }>
                    ezchat
                </Head>
            </HeadCont>
            <RegLoginCont>
                {user ? (
                    <>
                        <Btns onClick={
                            () => r.push('/profile')
                        }>Profile</Btns>
                        <Btns onClick={handleSignOut}>Logout</Btns>
                    </>
                ) : (
                    <>
                        <Btns onClick={
                            () => r.push('/login')
                        }>Login</Btns>
                        <Btns onClick={
                            () => r.push('/register')
                        }>Register</Btns>
                    </>
                )}
            </RegLoginCont>
        </Nav>
    )
}