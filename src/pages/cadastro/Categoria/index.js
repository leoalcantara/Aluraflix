import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria (){
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:''
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
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
    );
  }

  useEffect(()=>{
    console.log('alo alo w Brasil');
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor)=>{
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,          
        ]);
      });
    // setTimeout(()=>{
    //   setCategorias([
    //     ...categorias,
    //     {
    //       "id": 1,
    //       "nome": "Front End",
    //       "descricao": "Uma categoria show",
    //       "cor": "#CBD1FF"    
    //     },

    //     {
    //       "id": 2,
    //       "nome": "Back End",
    //       "descricao": "Uma outra categoria show",
    //       "cor": "#CBD15F"    
    //     },
    //   ]);     
    // }, 4 * 1000);
},[]);

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

      <FormField 
        label= "Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome}
        onChange = {HandleChange}
      /> 

      <FormField 
        label= "Descricao"
        type="textarea"
        name="descricao"
        value={values.descricao}
        onChange = {HandleChange}
      /> 

      <FormField 
      label= "Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange = {HandleChange}
      />   


        <Button>
          Cadastrar
        </Button>
      </form>
 
      {categorias.length === 0 && (<div>
        Loading...
      </div>)}

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