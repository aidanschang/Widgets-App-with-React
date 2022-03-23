import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    //State for dropdown box
    const[open, setOpen] = useState(false);
    const ref= useRef();

    //arrow function is rendered once at the initial start
    useEffect(()=> {
        const onBodyClick = (event)=> {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        
        document.body.addEventListener('click', onBodyClick, {capture: true});
        
        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true,});
        };
        },[]
    );
    
    //maps the array 'options' into individual dropdown option.
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) { //avoid displaying already selected opiton as one of the option
            return null;
        }
        return (
            <div 
            key={option.value}
            className='item'
            onClick= {() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });


    return (
        <div ref={ref} className= 'ui form'>
            <div className= 'field'>
                <label className='label'>{label}</label>
                <div 
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open? 'visible active': ''}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'> {selected.label}</div>
                    <div className= {`menu ${open ? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;