import React from 'react';
import Button from '../../components/Button'

const History = ({history, onClick, onClear}) => {
  const ClearHistory = () => {
    history.clear();
    onClear();
  }
 
  // let list = calcProcessor.history;
  let list = history;

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