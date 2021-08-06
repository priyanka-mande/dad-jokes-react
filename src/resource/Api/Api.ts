const SERVER_ADDRESS = "https://icanhazdadjoke.com";

export async function getJokes<T>(url: string): Promise<T> {
  try {
    const response = await fetch(SERVER_ADDRESS + url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    let data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}
