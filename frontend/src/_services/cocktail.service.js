import Axios from './caller.service'

const getAllCocktails = () => {
    return Axios.get('/cocktails')
}

const getOneCocktail = (cid) => {
    return Axios.get('/cocktails/'+cid)
}

const addCocktail = (cocktail) => {
    return Axios.put('/cocktails', cocktail)
}

const updateCocktail = (cocktail) => {
    return Axios.patch('/cocktails/'+cocktail.id, cocktail)
}

const deleteCocktail = (cid) => {
    return Axios.delete('/cocktails/'+cid)
}

export const cocktailService = {
    getAllCocktails, getOneCocktail, addCocktail, updateCocktail, deleteCocktail
}