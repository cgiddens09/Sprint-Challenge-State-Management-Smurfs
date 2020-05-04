import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 35%;

`;

const Input = styled.input`
    margin:1%;
    padding: 1%;
`;

const Button = styled.button`
    width: 50%;
    margin-left: 25%
`

export default function Form(props){
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.add(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height: ""
        });
    };

    return (
        <Container>
            <Input
                type='text'
                name='name'
                value={newSmurf.name}
                onChange={handleChanges}
                placeholder='Name of Smurf'
            />
            <Input
                type='text'
                name='age'
                value={newSmurf.age}
                onChange={handleChanges}
                placeholder='Age'
            />
            <Input
                type='text'
                name='height'
                value={newSmurf.height}
                onChange={handleChanges}
                placeholder='Height'
            />
            <Button onClick={handleSubmit}>Add to the Family!</Button>
        </Container>
    );




}
