import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <PageDefault>
        <h1> Você se perdeu?</h1>
      <Link to="/"> Voltar para Casa</Link>
       
    </PageDefault>

  );
}

export default NotFound;