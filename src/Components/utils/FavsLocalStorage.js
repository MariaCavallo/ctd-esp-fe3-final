export const favsLocalSotrage = () => {
    const favorites = localStorage.getItem("favs");
    return favorites ? JSON.parse(favorites) : [];
};

export const setFavoritesStorage = (dentist) => {
    let favorites = favsLocalSotrage();
    const newFavorite = favorites.filter(fav => {
        return fav.id === dentist.id
    });

    if(newFavorite.length === 0){
        favorites.push(dentist)
        localStorage.setItem("favs", JSON.stringify(favorites));
        alert(`Dentist ${dentist.name} added to favorites`);
        return true;
    }else{
        alert(`Dentist ${dentist.name} alredy exists in favorites`);
        return false;
    }
}

export const removeFavoriteStorage = (id, name) => {
    let favorites = favsLocalSotrage();
    const index = favorites.findIndex(fav => fav.id === id);
    if(index !== -1){
        favorites.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(favorites));
        alert(`Dentist ${name} was removed from the list`)
    }else{
        alert(`Dentist ${name} could not be removed from the list`)
    }

}

export const isFavorited = (id) => {
    const favorites = favsLocalSotrage();
    const newfavorites = favorites.filter(fav => {
        return fav.id === id
    });
    return newfavorites.length === 1;
};