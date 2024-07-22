import { useState } from 'react';

export const CounterHook = (initialVal=0) => {
    
    const[state, setState] = useState(initialVal);

    const inc = () => {
        setState(state+1);
    }

    const dec = () => {
        setState(state-1);
    }

    const reset = () => {
        setState(0);    
    }

    return [state, inc, dec, reset];

};