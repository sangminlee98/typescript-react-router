import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

const HistorySample = ({history}: RouteComponentProps) => {
  const handleGoBack = () => {
    history.goBack();
  }
  const handleGoHome = () => {
    history.push('/');
  }
  useEffect(() => {
    return history.block('떠나실 건가요?');
  })
  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;