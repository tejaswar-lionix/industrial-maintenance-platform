import React, {useState} from 'react';
export const ReportingView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>REPORTING - Reporting - MTBF, MTTR, availability</h2><p>MTBF</p></div>
};
export default ReportingView;
