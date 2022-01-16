import React from 'react';
import useFetch from 'components/UseFetch';

const CustomHooks = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
        <>
            <h3>Todo's List</h3>
            {data &&
                data.splice(0, 20).map((item) => {
                    return <p key={item.id} className='li'>{item.title}</p>
                })}
        </>
    );
}

export default CustomHooks;