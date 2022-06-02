import styled from "styled-components";
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase";

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

export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        error: null,
        loading: false,
    })

    const { name, email, password, error, loading } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true })
        if (!name || !email || !password) {
            setData({ ...data, error: 'All fields are required' })
        }
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log(result.user);
        } catch (error) {

        }
    }
    return (
        <Section>
            <H3>Create an account</H3>
            <Form action="" className="form" onSubmit={handleSubmit}>
                <div className="inputCont">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={handleChange} />
                </div>
                <div className="inputCont">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </div>
                <div className="inputCont">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </div>
                {error ? <p className="error">{error}</p> : null}
                <div className="btnCont">
                    <button className="regisBtn">
                        Register
                    </button>
                </div>
            </Form>
        </Section>
    )
}