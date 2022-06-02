import { useRouter } from "next/router"
import { Link } from "react-router-dom"
import styled from "styled-components";

const RegLoginCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 14vw;
`
const Head = styled.h3`
    display: flex;
    justify-content: center;
    font-family: 'Source Code Pro', monospace;
    font-size: 24px;
`
const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    // flex-direction: column;
    // align-items: center;
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
    const r = useRouter();
    return (
        <Nav>
            <Head>
                ezchat
            </Head>
            <RegLoginCont>
                <Btns>Login</Btns>
                <Btns>Register</Btns>
            </RegLoginCont>
        </Nav>
    )
}