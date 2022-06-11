import styled from "styled-components";
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from "../firebase";
import { doc, updateDoc } from 'firebase/firestore';
import { useRouter } from "next/router";
import Navbar from "../comps/Navbar";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 0px 20px;
    margin-bottom: 30px;
`
const Section = styled.section`
    max-width: 500px;
    margin: 0 auto;
    margin-top: 100px;
    box-shadow: 1px 1px 20px var(--color-4);
    padding: 10px 20px;
    border-radius: 5px;
`
const H3 = styled.h3`
    text-align: center;
    color: var(--color-4);
    font-size: 20px;
`

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
        error: null,
        loading: false,
    })

    const { email, password, error, loading } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const r = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true })
        if (!email || !password) {
            setData({ ...data, error: 'All fields are required' });
        }
        try {
            // logging in
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            // setting the user info in firestore
            await updateDoc(doc(db, 'users', result.user.uid), {
                isOnline: true,
            });
            // resetting the state
            setData({
                email: '',
                password: '',
                error: null,
                loading: false
            });
            r.replace("/");
            // firebase.firestore().collection('users').doc(id).set({})
        } catch (err) {
            setData({ ...data, error: err.message, loading: false });
        }
    };
    return (
        <div>
            <Navbar />
            <Section>
                <H3>Login to your account</H3>
                <Form action="" className="form" onSubmit={handleSubmit}>
                    <div className="inputCont">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="inputCont">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    {error ? <p className="error">{error}</p> : null}
                    <div className="btnCont">
                        <button className="loginBtn" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </Form>
            </Section>
        </div>
    )
}