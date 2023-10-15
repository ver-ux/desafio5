import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="app">
      <h1>Calendário com Tooltips</h1>
      <Tooltip text="Informações adicionais para 10 de outubro." children={undefined}>
        <div className="date">10 de Outubro</div>
      </Tooltip>
      <Tooltip text="Informações adicionais para 15 de outubro." children={undefined}>
        <div className="date">15 de Outubro</div>
      </Tooltip>
    </div>
  );
}

export default App;