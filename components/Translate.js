import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Traditional Chinese',
        value: 'zh-TW'
    },
    {
        label: 'Spanish',
        value: 'es'
    }

];


const Translate= () => {
    const [language, setLanguage]= useState(options[0]);
    const [text, setText]=useState('Hello my name is Aidan');
    
    return (
        <div>
            <h1 className='ui header'>Google Translator API</h1>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            
            <Dropdown 
                label= 'Select a language' 
                selected={language} 
                onSelectedChange={setLanguage} 
                options={options}
            />
            <hr/>
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};

export default Translate;