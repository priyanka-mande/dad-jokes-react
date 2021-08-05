export interface JokesList {
    jokes: Joke[],
    loader: boolean
}

export interface Joke {
    id: string,
    joke: string
}

export interface JokeText {
    data: string;
}