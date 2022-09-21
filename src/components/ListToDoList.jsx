import React from 'react';

const ListToDoList = (props) => {
    return (
        <>
            <ul>
                {props.propsTodos.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>
        </>
    )
}

export default ListToDoList;