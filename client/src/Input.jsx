import React, {useState} from 'react';
import './Input.css';

function Input (prop)
{

    //const [radio, setRadio] = useState('');
    //const [isChecked, setIsChecked] = useState(false);    

   const [checked, setChecked] = useState('');

    return(
        <div className = 'horizontal-layout'>      
            <div className = 'label'>
            <label for = {prop.class}>{prop.text}</label>
            </div>
            <div className = 'float-input' onClick = {() => setChecked(prop.value)}>                                                    
                <input
                 type = {prop.type}
                 className = {prop.class}
                 name = {prop.name} 
                 value = {prop.value} 
                 placeholder = {prop.placeholder}
                 checked =  {checked === prop.value}
                                                                           
                 />
                 
            </div>             
        </div>
    )
}

export default Input;

            
