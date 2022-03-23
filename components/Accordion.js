import React, {useState} from 'react';

const Accordion = ({items}) =>{
    //Array destructure: no array is declared inside below squre bracket
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    //returns all items inside items through map
    const renderedItems = items.map((item, index) => {
        const active = index ===activeIndex? 'active': '';

        //React.Fragment was used in replace of div was to avoid a css colision from semantic-ui
        return <React.Fragment key={item.title}> 
            <div 
                className={`title ${active}`}
                onClick= {() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p> {item.content}</p>
            </div>
        </React.Fragment>
    })

    return <div className="ui styled accordion">
        {renderedItems}
    </div>;
};

export default Accordion;