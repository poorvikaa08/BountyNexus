export const getUserEmail = () => {
    return typeof window !== "undefined" ? localStorage.getItem('userEmail') : null;
};