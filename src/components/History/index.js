import React from 'react';
import Button from '../../components/Button'

const History = ({calcProcessor, onClick, onClear}) => {
  const ClearHistory = () => {
    calcProcessor.clearHistory();
    onClear();
  }
 
  let list = calcProcessor.history;

  return (
    <>
      <ul>
          {list && 
            list.map((item, index) => {
                return <li key={index} onClick={() => onClick(item[0])}>{item[1]}</li>
                })
            }
      </ul>
      <Button values="Clear" onClick={ClearHistory}/>
    </>
  );
}

export default History;