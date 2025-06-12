import React, {useState} from 'react';
export const AnomaliesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ANOMALIES - Anomalies - threshold, isolation forest,</h2><p>threshold</p></div>
};
export default AnomaliesView;
