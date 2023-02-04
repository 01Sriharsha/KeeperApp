import React, { useState } from 'react';

export default function InputData(props) {

    const [input, setInput] = useState({
        title: "",
        content: ""
    })

    const [isExpanded, setIsExpanded] = useState(false);

    function expand() {
        setIsExpanded(true);
    }

    function isEmpty() {
        const { title, content } = input
        return title === '' || content === '' ? false : true;
    }

    function handleChange(event) {
        const { name, value } = event.target
        setInput((prevValue) => {
            return {
                ...prevValue, [name]: value
            }
        })
    }

    function handleClick(event) {
        if (isEmpty() === true) {
            props.onAdd(input, setInput);
            setInput({
                title: '',
                content: ''
            })
        }
        else {
            event.preventDefault();
        }
    }

    return (
        <div className='input'>
            <h1>Add a Note Here</h1>
            <div className="input-group">
                {isExpanded && <input
                    name="title"
                    id="title"
                    onChange={handleChange}
                    type="text"
                    placeholder='Enter title'
                    value={input.title}
                />}
                <textarea
                    name="content"
                    onChange={handleChange}
                    onClick={expand}
                    cols="10" rows={isExpanded ? '3' : '1'}
                    placeholder={isExpanded ? 'Enter Content' : 'Take a Note ...'}
                    value={input.content}
                />
            </div>
            <div
                style={isExpanded ? { visibility: 'visible' } : { visibility: 'hidden' }}
                className="btn-group">
                <button onClick={handleClick}>Add</button>
            </div>
        </div>
    )
}
