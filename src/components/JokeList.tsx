
import { Spin } from 'antd';
import { Joke } from './Joke';
import 'antd/dist/antd.css';

interface Props {
    jokes: string[],
    loader: boolean
}

export const JokeList: React.FC<Props> = ({jokes, loader}) => {
    return (
        <>
            {!loader ? jokes.length ? jokes.map((joke: any) => {
                return(
                    <span key={joke.id}><Joke data={joke.joke} /></span>
                )
            }) : <p style={{margin: '40%', fontSize: '18px'}}>No jokes found...</p>: <Spin style={{margin: '40%'}} tip="Loading..." />}
        </>
    );
};