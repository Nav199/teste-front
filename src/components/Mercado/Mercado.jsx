import React from 'react';
import Client_form from '../Form/Cliente_form';
import Concorrente_form from '../Form/Concorrente_form';
import Fornecedor_form from '../Form/Fornecedor_form';
const Mercado = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Formulário de Análise de Mercado</h1>
            <Client_form/>
            <Concorrente_form/>
            <Fornecedor_form/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Enviar</button>
        </div>
    );
};

export default Mercado;
