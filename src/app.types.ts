export interface JokeObject {
    results: Joke[],
    total_jokes: number
}

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