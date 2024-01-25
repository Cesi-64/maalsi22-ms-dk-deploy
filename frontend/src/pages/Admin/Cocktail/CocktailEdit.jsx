import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

import { cocktailService } from '@/_services'

import CocktailForm from '@components/admin/CocktailForm'

const CocktailEdit = () => {
    let navigate = useNavigate()
    const { cid } = useParams()

    const [cocktail, setCocktail] = useState({})

    useEffect(() => {
        cocktailService.getOneCocktail(cid)
            .then(res => setCocktail(res.data.data))
            .catch(e => console.log('ERROR', e))
    }, [])

    const onChange = (e) => {
        setCocktail({
            ...cocktail,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        cocktailService.updateCocktail(cocktail)
            .then(res => navigate('../index'))
            .catch(e => console.log('ERROR', e))

    }

    return (
        <div>
            Cocktail Edit
            <CocktailForm data={cocktail} onChange={onChange} onSubmit={onSubmit} text="Modifier"/>
        </div>
    );
};

export default CocktailEdit;