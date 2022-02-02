import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardPlanos from './components/card_preco/index.jsx';
import './style.css';

export default function App() {
  const planos = [
    {
      descricao: 'teste1',
      icone: false,
    },
  ];

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CardPlanos
            plano="Teste"
            quantidade="2"
            valor="49"
            colors="green"
            descricao={[{ nome: 'descricao', icone: 'icone' }]}
            data={planos}
            buttons={[
              { titulo: 'Contrate já', icon: '<RiSecurePaymentLine />' },
            ]}
            observacao="Aqui vai alguma observação"
          />
        </Grid>
      </Grid>
    </div>
  );
}
