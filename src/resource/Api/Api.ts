
let SERVER_ADDRESS = 'https://icanhazdadjoke.com';

export async function getJokes<T>(
    url: string,
  ):Promise<T> {
    try{
        const response = await fetch(SERVER_ADDRESS + url, { method: 'GET', headers: { Accept: "application/json" }});
        const data = await response.json();
        return data.results;
    } catch (err) {
        return err
    }
  }