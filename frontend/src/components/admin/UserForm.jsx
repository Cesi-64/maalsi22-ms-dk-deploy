import React from 'react';

const UserForm = ({ data, onChange, onSubmit, text }) => {

    return (
        <form onSubmit={onSubmit}>
            <div className="group">
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" id="nom" value={data.nom} onChange={onChange} />
            </div>
            <div className="group">
                <label htmlFor="prenom">Prénom</label>
                <input type="text" name="prenom" id="prenom" value={data.prenom} onChange={onChange} />
            </div>
            <div className="group">
                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" name="pseudo" id="pseudo" value={data.pseudo} onChange={onChange} />
            </div>
            <div className="group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={data.email} onChange={onChange} />
            </div>
            {text === "Ajouter" && (
            <div className="group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" value={data.password} onChange={onChange} />
            </div>
            )}
            <div className="group">
                <button>{text}</button>
            </div>
        </form>
    );
};

export default UserForm;