import React, {useState} from 'react';
export const DashboardView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>DASHBOARD - Dashboard - OEE, KPI, heatmap, trend</h2><p>OEE</p></div>
};
export default DashboardView;
