export const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
};

export const setFavInStorage = (dentist) => {
    const storageFavs = getFavFromStorage();
    const isFavOnList = storageFavs.fillter(fav => {
        return fav.id === dentist.id
    });
    if (isFavOnList.length === 0) {
        storageFavs.push(dentist)
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Dentist added successfully");
        return true;
    } else {
        alert("Dentist alredy on the list");
        return false;
    }
}