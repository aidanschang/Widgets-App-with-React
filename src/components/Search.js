import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () =>{
    const [term, setTerm] = useState('Rest API');
    const [results, setResults] = useState([]);

    /*
        useEffect: whenever term changes, runs the arrow function
        useEffect can't use async. Three soluitons:
            1) a helper function(const search = async...) inside the arrow function, 
            2)use double () on the first solution, 
            3)use normal promises(get.then) instead async-await method
        First solution is often the preferred solution in the industry
    */
    useEffect( ()=> {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };

        //To avoid setTimeout of 0.5 sec on the initial render, use a condition expression to avoid that initial delay
        if (term && !results.length) {
            search();
        } else {
            //setTimeout to set a delay on searching a term to avoid overloading the server by large numbers of requests
            const timeoutID = setTimeout(() => { 
                
                // This logical expression will avoid error message when we search a term of a empty string
                if (term) { 
                    search();
                }
            }, 500);

            //The return arrow function is heldoff until next time the useEffect is being invoked. 
            return () => { 
                clearTimeout(timeoutID);
            };
        }
    },[term] //whenever the square brackets(term) has been modified, the useEffect function will be invoked
    );

    //render results and display a list of articles
    const renderedResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a 
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    {/*dangerouslySetInnerHTML is used to solved the html tags that wikipedia incorporated in their snippets}*/}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>

            </div>
        )
    });

    return (
        <div>
            <div className= 'ui form'>
                <div className='field'>
                    <h1 className='ui header'>wikipedia Search API</h1>
                    <label>Enter Search Term</label>
                    <input 
                        value= {term}
                        onChange={e => setTerm(e.target.value)}
                        className='input'
                    />
                </div>
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    )
};

export default Search;