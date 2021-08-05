
import { Spin } from 'antd';
import { JokesList } from '../app-interface'
import { Joke } from './Joke';
import 'antd/dist/antd.css';

export const JokeList: React.FC<JokesList> = ({jokes, loader}) => {
    return (
        <>
            {!loader ? 
                jokes.length ? 
                    jokes.map((joke: any) => {
                        return( 
                            <span key={joke.id}><Joke data={joke.joke} /></span>
                        )
                    }) 
                : <p className="no-content">No jokes found</p>
            : <Spin className="loader" tip="Loading..." />}
        </>
    );
};