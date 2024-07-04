import React, { useState } from 'react';

const Executivo = () => {
  const [empresa, setEmpresa] = useState({
    nome: '',
    cpfCnpj: '',
    missao: '',
    setorAtividade: '',
    formaJuridica: '',
    enquadramentoTributario: '',
    fonteRecursos: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({
      ...empresa,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados, como uma chamada de API ou console.log para teste.
    console.log('Dados da Empresa:', empresa);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Dados da Empresa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">Nome da Empresa</label>
            <input
              type="text"
              name="nome"
              value={empresa.nome}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">CPF ou CNPJ</label>
            <input
              type="text"
              name="cpfCnpj"
              value={empresa.cpfCnpj}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">Missão da Empresa</label>
            <textarea
              name="missao"
              value={empresa.missao}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">Setor de Atividade</label>
            <select
              name="setorAtividade"
              value={empresa.setorAtividade}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="">Selecione...</option>
              <option value="Agropecuária">Agropecuária</option>
              <option value="Indústria">Indústria</option>
              <option value="Comércio">Comércio</option>
              <option value="Prestação de serviços">Prestação de serviços</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">Forma Jurídica</label>
            <select
              name="formaJuridica"
              value={empresa.formaJuridica}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="">Selecione...</option>
              <option value="MEI">Microempreendedor Individual – MEI</option>
              <option value="Empresário Individual">Empresário Individual</option>
              <option value="EIRELI">Empresa Individual de Responsabilidade Limitada – EIRELI</option>
              <option value="Sociedade Limitada">Sociedade Limitada</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">Enquadramento Tributário</label>
            <input
              type="text"
              name="enquadramentoTributario"
              value={empresa.enquadramentoTributario}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">Fonte de Recursos</label>
            <textarea
              name="fonteRecursos"
              value={empresa.fonteRecursos}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Enviar Formulário
        </button>
      </form>
    </div>
  );
};

export default Executivo;
