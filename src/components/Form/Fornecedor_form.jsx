import React from 'react';

const Fornecedor_form = () => {
    return (
        <div className="p-4 bg-gray-100 rounded shadow mb-4">
            <h2 className="text-lg font-semibold mb-2">Estudo dos Fornecedores</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="itemDescription" className="block text-sm font-medium text-gray-700">Descrição dos Itens</label>
                    <textarea id="itemDescription" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <div>
                    <label htmlFor="supplierName" className="block text-sm font-medium text-gray-700">Nome do Fornecedor</label>
                    <input type="text" id="supplierName" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    <label htmlFor="supplierPrice" className="block text-sm font-medium text-gray-700">Preço</label>
                    <input type="text" id="supplierPrice" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    <label htmlFor="supplierPaymentConditions" className="block text-sm font-medium text-gray-700">Condições de Pagamento</label>
                    <input type="text" id="supplierPaymentConditions" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700">Prazo de Entrega</label>
                    <input type="text" id="deliveryTime" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    <label htmlFor="supplierLocation" className="block text-sm font-medium text-gray-700">Localização</label>
                    <input type="text" id="supplierLocation" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
            </div>
        </div>
    );
};

export default Fornecedor_form;
