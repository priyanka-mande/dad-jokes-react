
import { Spin } from 'antd';
import { JokesList, Joke } from '../app.types'
import { IndividualJoke } from './IndividualJoke';
import 'antd/dist/antd.css';

export const JokeList: React.FC<JokesList> = ({jokes, loader}) => {
    return (
        <>
            {!loader ? 
                jokes.length ? 
                    jokes.map((joke: Joke) => {
                        return( 
                            <span key={joke.id}><IndividualJoke data={joke.joke} /></span>
                        )
                    }) 
                : <p className="no-content">No jokes found</p>
            : <Spin className="loader" tip="Loading..." />}
        </>
    );
};