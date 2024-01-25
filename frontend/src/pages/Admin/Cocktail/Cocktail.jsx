import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

import { cocktailService } from '@/_services'



const Cocktail = () => {

    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        cocktailService.getAllCocktails()
            .then(res => setCocktails(res.data.data))
            .catch(e => console.log('ERROR', e))
    }, [])

    const delCocktail = (cid) => {
        cocktailService.deleteCocktail(cid)
            .then(res => {               
                setCocktails(current => current.filter(cocktail => cocktail.id !== cid))
            })
            .catch(e => console.log('ERROR', e))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Recette</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cocktails.map(cocktail => (
                            <tr key={cocktail.id}>
                                <td><span className="del_btn" onClick={() => delCocktail(cocktail.id)}>X</span></td>
                                <td><Link to={`/admin/cocktail/edit/${cocktail.id}`}>{cocktail.id}</Link></td>
                                <td>{cocktail.nom}</td>
                                <td>{cocktail.description}</td>
                                <td>{cocktail.recette}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default Cocktail;