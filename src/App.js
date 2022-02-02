import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardPlanos from './components/card_preco/index.jsx';
import './style.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function App() {
  const planos = [
    {
      descricao: 'teste1',
      icone: false,
    },
    {
      descricao: 'teste2',
      icone: true,
    },
    {
      descricao: 'teste3',
      icone: true,
    },
    {
      descricao: 'teste4',
      icone: true,
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
            valor="99"
            colors="green"
            descricao={[{ nome: 'descricao', icone: 'icone' }]}
            data={planos}
            buttons={[
              { titulo: 'Contrate já', icon: <ShoppingCartOutlinedIcon /> },
            ]}
            observacao="Aqui vai alguma observação"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardPlanos
            plano="Teste"
            quantidade="2"
            valor="59"
            colors="purple"
            descricao={[{ nome: 'descricao', icone: 'icone' }]}
            data={planos}
            buttons={[
              { titulo: 'Contrate já', icon: <ShoppingCartOutlinedIcon /> },
            ]}
            observacao="Aqui vai alguma observação"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardPlanos
            plano="Teste"
            quantidade="2"
            valor="89"
            colors="blue"
            descricao={[{ nome: 'descricao', icone: 'icone' }]}
            data={planos}
            buttons={[
              { titulo: 'Contrate já', icon: <ShoppingCartOutlinedIcon /> },
            ]}
            observacao="Aqui vai alguma observação"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardPlanos
            plano="Teste"
            quantidade="2"
            valor="89"
            colors="orange"
            descricao={[{ nome: 'descricao', icone: 'icone' }]}
            data={planos}
            buttons={[
              { titulo: 'Contrate já', icon: <ShoppingCartOutlinedIcon /> },
            ]}
            observacao="Aqui vai alguma observação"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardPlanos
            plano="Teste"
            quantidade="2"
            valor="89"
            descricao={[{ nome: 'descricao', icone: 'icone' }]}
            data={planos}
            buttons={[
              { titulo: 'Contrate já', icon: <ShoppingCartOutlinedIcon /> },
            ]}
            observacao="Aqui vai alguma observação"
          />
        </Grid>
      </Grid>
    </div>
  );
}
