import React from 'react';

import Button from './button/Button';
import Input from './input/Input';

function Ui() {
    return (
        <div>
            <Button text="soy un boton"></Button>
            <Input
             text='soy un input'
             className='input'
            ></Input>
        </div>
    )
}

export default Ui;
