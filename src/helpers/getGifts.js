export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=rXKEGW48NaaDAWjQ3LD1kR65RI4V1dsB`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifts;
}