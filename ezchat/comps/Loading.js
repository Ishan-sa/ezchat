import styled from "styled-components";

const LoadH2 = styled.h2`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: "translate(-50%, -50%)";
`

export default function Loading() {
    return (
        <div style={{ position: "relative" }}>
            <LoadH2>
                Loading...
            </LoadH2>
        </div>
    )
}