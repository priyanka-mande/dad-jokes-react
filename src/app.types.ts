export interface JokesList {
    jokes: Jokes[],
    loader: boolean
}

export interface Jokes {
    id: string,
    joke: string
}