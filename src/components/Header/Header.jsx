import React from 'react';
import img from '../img/Logo.png';
function Header() {
  return (
    <div className='flex justify-between sm:rounded-xl sm:m-5 mr-4 ml-4 p-5 h-20 bg-background-100'>
      <img src={img} alt="" />
      <div className='flex flex-row space-x-4 text-white p-2 gap-2'>
        <button className=' bg-button_criar-100 px-5 text-lg rounded-lg'>Criar um novo plano</button>
        <h2>Configurações</h2>
        <h2 >Perfil</h2>
      </div>
    </div>
  );
}

export default Header;
