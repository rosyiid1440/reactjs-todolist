import React, { useState } from 'react'

const FormToDoList = (props) => {
    const [inputTodo, setTodo] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputTodo);
        props.propsSubmitHandler(inputTodo);
        setTodo("");
    }

    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <input type="text" value={inputTodo} onChange={(e) => {setTodo(e.target.value)}}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormToDoList;