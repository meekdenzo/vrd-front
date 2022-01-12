import React from 'react'
import { useState } from "react";
import PropTypes from 'prop-types'

function InputField(props) {
    const [_input, setInput] = useState('');

    const handleSubmit = (e) => {
        const text = { _input }
        fetch('http://localhost:8000/receive', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(text)
          }).then(() => {
            console.log('Regex being scanned. Please wait...');
          })
    }

    return (
        <div>
            <div className='input-group'>
                <input
                    type='text'
                    placeholder='Enter regex'
                    value={_input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit' onSubmit={handleSubmit}>
                    Test
                </button>
            </div>
        </div>
    )
}

InputField.propTypes = {

}

export default InputField

