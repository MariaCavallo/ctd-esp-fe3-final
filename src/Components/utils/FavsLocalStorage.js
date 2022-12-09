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

export const removeFavoriteStorage = (id) => {
    let favorites = favsLocalSotrage();
    const index = favorites.findIndex(dentist => dentist.id === id);
    if(index !== -1){
        favorites.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(favorites));
        alert('The dentist was removed from the favorites list.')
    }else{
        alert('The dentist could not be removed from the favorites list.')
    }

}

export const isFavorited = (id) => {
    const favorites = favsLocalSotrage();
    const newfavorites = favorites.filter(fav => {
        return fav.id === id
    });
    return newfavorites.length === 1;
};