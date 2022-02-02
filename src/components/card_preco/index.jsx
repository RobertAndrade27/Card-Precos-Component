import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import useStyles from './styles';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function CardPlanos({
  plano,
  quantidade,
  descricao,
  valor,
  colors,
  buttons,
  data,
  observacao,
}) {
  const classes = useStyles();

  const [rows, SetRows] = useState([]);

  return (
    <div>
      <div className={classes.cardContainer}>
        <div
          className={classes.cardHeader}
          style={{
            background: `${
              colors == 'green'
                ? 'linear-gradient(90deg, rgba(40,187,144,1) 17%, rgba(12,136,133,1) 93%)'
                : colors == 'blue'
                ? 'linear-gradient(90deg, #0689bd 17%, #285CA8 93%)'
                : colors == 'purple'
                ? 'linear-gradient(90deg, #6072CC 17%, #761CD4 93%)'
                : colors == 'orange'
                ? 'linear-gradient(90deg, #ffbb00 17%, #f79502 93%)'
                : 'linear-gradient(90deg, #980F0D 17%, #5F0F0E 93%)'
            }`,
          }}
        >
          <h3>{plano}</h3>
          <h5>para {quantidade} assinante(s)</h5>
        </div>
        <div className={classes.cardPreco}>
          <h5>R$</h5>
          <h4>{valor}</h4>

          <h6>/mês</h6>
        </div>
        {data?.length > 0
          ? data.map((value, dataIndex) => (
              <div key={`V${dataIndex}`}>
                {descricao.map((item, index) => {
                  return (
                    <div>
                      <div
                        key={`BB-${index}`}
                        className={classes.cardBody}
                        style={{
                          color: `${
                            item.icone && value[item.icone] == true
                              ? '#149888'
                              : '#435656'
                          }`,
                          padding: '10px',
                        }}
                      >
                        <Grid xs="2">
                          {item.icone && value[item.icone] == true ? (
                            <CheckIcon />
                          ) : (
                            <CloseIcon />
                          )}{' '}
                          &nbsp;
                        </Grid>
                        <Grid xs="10">{item.nome && value[item.nome]}</Grid>
                      </div>
                      <Divider />
                    </div>
                  );
                })}
              </div>
            ))
          : 'batata'}
        <h5 style={{ color: '#435656' }}>{observacao}</h5>
        <div
          className={classes.cardCompra}
          style={{
            background: `${
              colors == 'green'
                ? 'linear-gradient(90deg, rgba(40,187,144,1) 17%, rgba(12,136,133,1) 93%)'
                : colors == 'blue'
                ? 'linear-gradient(90deg, #0689bd 17%, #285CA8 93%)'
                : colors == 'purple'
                ? 'linear-gradient(90deg, #6072CC 17%, #761CD4 93%)'
                : colors == 'orange'
                ? 'linear-gradient(90deg, #F6C901 17%, #F2AC0E 93%)'
                : 'linear-gradient(90deg, #980F0D 17%, #5F0F0E 93%)'
            }`,
          }}
        >
          {buttons?.map((item, index) => {
            return (
              <div>
                <button key={`BB-${index}`} onClick={() => item.onClick()}>
                  {item.icon} &nbsp;
                  {item.titulo}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardPlanos;
