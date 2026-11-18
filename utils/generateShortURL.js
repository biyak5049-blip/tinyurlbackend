export const generateShortURL = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let shortURL = "";
    for (let i = 0; i < 6; i++) {
        shortURL += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return shortURL;
};
