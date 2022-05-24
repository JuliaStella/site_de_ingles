import './App.css';

function App() {
  return (
    <div className="App--container">
      <div className='resgister--container'>
        <h1>Site de inglês</h1>
        <input type='text'
        name='name'
        placeholder='Nome'
        className='register--input' 
        />
         <input type='text'
        name='name'
        placeholder='Email'
        className='register--input' 
        />
         <input type='text'
        name='name'
        placeholder='Telefone'
        className='register--input' 
        />
        <button>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
