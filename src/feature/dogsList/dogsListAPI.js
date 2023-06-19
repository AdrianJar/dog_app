export const getDogsList = async () => {
    const response = await fetch(
        `https://dog.ceo/api/breeds/list/all`
    );

    const list = await response.json()
    return list;
};