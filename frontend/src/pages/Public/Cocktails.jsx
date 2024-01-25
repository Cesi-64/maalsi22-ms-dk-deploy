import React, { useEffect, useState } from 'react';

import { cocktailService } from '@/_services'

const Cocktails = () => {

    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        cocktailService.getAllCocktails()
            .then(res => setCocktails(res.data.data))
            .catch(e => console.log('ERROR', e))
    }, [])

    return (
        <div className='ct_list'>
            {
                cocktails.map(cocktail => (
                    <figure key={cocktail.id}>
                        <img src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I" alt={cocktail.name} />
                        <figcaption>{cocktail.nom}</figcaption>
                    </figure>
                ))
            }
        </div>
    );
};

export default Cocktails;