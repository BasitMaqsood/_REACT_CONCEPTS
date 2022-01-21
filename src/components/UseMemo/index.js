import React from 'react';
import { useState, useMemo } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = expensiveCalculation(count);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319__340.png" alt="Avatar" style={{ width: 80, textAlign: 'center' }} />
                            <div className="container">
                                <h4><b>{todo}</b></h4>
                                {/* <p>Architect and Engineer</p> */}
                            </div>
                        </div>
                    );
                })}
                <button onClick={addTodo} className='button'>Add Todo</button>
            </div>
            <hr />
            <div className="card" style={{ textAlign: 'center', padding: 10 }}>
                <div>
                    <b>Count: </b>{count}
                </div>
                <button onClick={increment} className='button'>+</button>

                <h2>Expensive Calculation</h2>
                <p>
                    {calculation}
                </p>
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

export default UseMemo;