import React from 'react';
import history from '../../services/history';

import { Container } from './styles';

function Home() {
  return <Container><button type="button" onClick={()=> window.location.href = `http://${process.env.REACT_APP_API_SERVICE_HOST}:${process.env.REACT_APP_API_SERVICE_PORT}`} >Login</button></Container>;
}

export default Home;