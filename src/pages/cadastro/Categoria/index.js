import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria (){
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'#f00'
  }

  const [ categorias, setCategorias] = useState([]);  
  const [ values, setValues] = useState(valoresIniciais);  

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function HandleChange(infosDoEvento){
    const{getAttribute, value} = infosDoEvento.target;
    setValue(
      getAttribute('name'), 
      value
    );
  }

  return(
    <PageDefault>
      <h1>Cadastro de Categorias: {values.nome}</h1>

      <form onSubmit={function HandleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();      
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

      <div>
        <label>
          Nome da Categoria:
          <input 
            type="text" 
            name= "nome"
            value={ values.nome }
            onChange = {HandleChange}
          />            
        </label>
      </div>  

      <div>        
        <label>
          Descrição:
          <textarea 
            type="text" 
            name= "descricao"
            value={ values.descricao }
            onChange = {HandleChange}
          />         
        </label>
      </div>

      <div>   
          <label>
          Cor:
          <input 
            type="color" 
            name= "cor"
            value={ values.cor }
            onChange = {HandleChange}
          />            
        </label>       
      </div> 

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice)=>{
          return(
            <li key={categoria, indice}>
              {categoria.nome}
            </li>           
          )
        })}
      </ul>

      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
  }

  export default CadastroCategoria;