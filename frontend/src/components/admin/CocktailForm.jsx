import React from 'react';

const CocktailForm = ({ data, onChange, onSubmit, text }) => {

    return (
        <form onSubmit={onSubmit}>            
            <div className="group">
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" id="nom" value={data.nom} onChange={onChange} />
            </div>
            <div className="group">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" value={data.description} onChange={onChange} />
            </div>
            <div className="group">
                <label htmlFor="recette">Recette</label>
                <input type="text" name="recette" id="recette" value={data.recette} onChange={onChange} />
            </div>            
            <div className="group">
                <button>{text}</button>
            </div>
        </form>
    );
};

export default CocktailForm;