import React, {useState} from 'react';
export const AlertsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ALERTS - Alerts - threshold, escalation, notifica</h2><p>threshold</p></div>
};
export default AlertsView;
