import React, {useState} from 'react';
export const AssetsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ASSETS - Assets - equipment registry, hierarchy, </h2><p>CNC</p></div>
};
export default AssetsView;
