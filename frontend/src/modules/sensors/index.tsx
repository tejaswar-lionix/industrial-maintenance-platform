import React, {useState} from 'react';
export const SensorsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SENSORS - Sensors - vibration, temperature, pressu</h2><p>vibration</p></div>
};
export default SensorsView;
