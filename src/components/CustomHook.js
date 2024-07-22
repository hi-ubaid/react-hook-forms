import { useState } from 'react';
import './CustomHook.css'

export const CustomHook = (initialVal=false) => {
    const[state, setState] = useState(initialVal);

    const toggle = () => {
        setState((prev)=>(!prev))
    };

    return [state, toggle];
};