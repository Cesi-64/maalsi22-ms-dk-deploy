import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import CocktailForm from "@components/admin/CocktailForm"

import { cocktailService, accountService } from '@/_services'

const CocktailAdd = () => {
    let navigate = useNavigate()

    const [cocktail, setCocktail] = useState({})

    const onChange = (e) => {
        setCocktail({
            ...cocktail,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const {id} = accountService.getTokenInfo()
        cocktail.user_id = id

        cocktailService.addCocktail(cocktail)
            .then(res => navigate('../index'))
            .catch(e => console.log('ERROR', e))

    }

    return (
        <div>
            Cocktail Add
            <CocktailForm data={cocktail} onChange={onChange} onSubmit={onSubmit} text="Ajouter"/>
        </div>
    );
};

export default CocktailAdd;