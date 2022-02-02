import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cards: {
    width: '100%',
    margin: 'auto',
  },
  cardContainer: {
    textAlign: 'center',
    width: '90%',
    margin: 'auto',
    boxShadow: '0px 0px 21px 0px rgba(26,122,94,0.29) ',
    border: '1px solid #e8e8e8',
    borderRadius: '5px',
    margin: 'auto',
    '& h4': {
      fontWeight: 'normal',
    },
  },
  cardHeader: {
    color: '#fff',
    borderRadius: '5px',
    padding: '5px',
    '& h3': {
      marginBottom: '-0.01em',
      fontSize: '18px',
    },
    '& h5': {
      fontWeight: 'normal',
      marginTop: '-0em',
      fontSize: '12px',
    },
  },
  cardPreco: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    '& h4': {
      fontSize: '30px',
    },
  },
  cardBody: {
    fontSize: '14px',
    width: '90%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBotton: '0.5em',
  },
  cardCompra: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1em',
    height: '35px',
    color: '#fff',
    borderRadius: '0px 0px 5px 5px',
    padding: '5px',
    '& button': {
      margin: 'none',
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '15px',
    },
  },
}));
export default useStyles;
