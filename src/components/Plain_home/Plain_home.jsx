import PropTypes from 'prop-types';

const Plain_home = ({ title, tipo }) => {
  return (
    <div className='p-5 bg-slate-100 gap-2 sm:rounded-xl sm:shadow-lg flex flex-col items-center sm:hover:shadow-gray-500 sm:hover:shadow-lg'>
      <h3 className='text-xl text-black font-bold text-center'>{title}</h3>
      {tipo && (
        <div className='w-full flex flex-row gap-2 pr-5 hidden sm:flex justify-center text-center'>
          {tipo.map((tag, index) => (
            <span key={index} className='px-4 py-1 rounded-full text-xs font-bold uppercase text-center items-center tag hover:scale-110'>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

Plain_home.propTypes = {
  title: PropTypes.string.isRequired,
  tipo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Plain_home;
