import React, {useState} from 'react';
export const Signal_processingView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SIGNAL_PROCESSING - Signal processing - FFT, RMS, kurtosis, </h2><p>FFT</p></div>
};
export default Signal_processingView;
