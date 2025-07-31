import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { type MeasurementData } from '../../types';

interface MeasurementDisplayProps {
  data: MeasurementData;
}

export const MeasurementDisplay: React.FC<MeasurementDisplayProps> = ({ data }) => {
  const { currentTheme } = useTheme();
  const { dataDisplay } = currentTheme.components;
  const { scale } = currentTheme.typography;
  
  const isError = data.status === 'error';
  const isWarning = data.status === 'warning';
  
  const getStatusColor = () => {
    if (isError) return currentTheme.colors.error;
    if (isWarning) return currentTheme.colors.warning;
    return currentTheme.colors.success;
  };
  
  const getScaleStyles = () => {
    const scales = {
      compact: { text: 'text-lg', value: 'text-2xl' },
      standard: { text: 'text-xl', value: 'text-3xl' },
      large: { text: 'text-2xl', value: 'text-4xl' },
      'extra-large': { text: 'text-3xl', value: 'text-5xl' },
    };
    return scales[scale];
  };
  
  const scaleStyles = getScaleStyles();
  
  if (dataDisplay === 'numeric') {
    return (
      <div 
        className="p-4 rounded-lg border-2 transition-all duration-300"
        style={{ 
          backgroundColor: isError ? `${currentTheme.colors.error}20` : currentTheme.colors.background,
          borderColor: getStatusColor(),
          color: currentTheme.colors.text,
          fontFamily: currentTheme.typography.fontFamily,
        }}
      >
        <div className={`${scaleStyles.text} font-medium mb-2`}>
          {data.label}
        </div>
        <div className={`${scaleStyles.value} font-bold`} style={{ color: getStatusColor() }}>
          {data.value.toFixed(3)} {data.unit}
        </div>
        <div className="text-sm mt-2 opacity-75">
          Range: {data.tolerance.min} - {data.tolerance.max} {data.unit}
        </div>
      </div>
    );
  }
  
  if (dataDisplay === 'gauge') {
    const percentage = ((data.value - data.tolerance.min) / (data.tolerance.max - data.tolerance.min)) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    
    return (
      <div 
        className="p-4 rounded-lg border-2"
        style={{ 
          backgroundColor: currentTheme.colors.background,
          borderColor: getStatusColor(),
          color: currentTheme.colors.text,
          fontFamily: currentTheme.typography.fontFamily,
        }}
      >
        <div className={`${scaleStyles.text} font-medium mb-4 text-center`}>
          {data.label}
        </div>
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke={`${getStatusColor()}30`}
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke={getStatusColor()}
              strokeWidth="8"
              strokeDasharray={`${(clampedPercentage / 100) * 314} 314`}
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`${scaleStyles.value} font-bold`} style={{ color: getStatusColor() }}>
                {data.value.toFixed(1)}
              </div>
              <div className="text-sm">{data.unit}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (dataDisplay === 'progress') {
    const percentage = ((data.value - data.tolerance.min) / (data.tolerance.max - data.tolerance.min)) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    
    return (
      <div 
        className="p-4 rounded-lg border-2"
        style={{ 
          backgroundColor: currentTheme.colors.background,
          borderColor: getStatusColor(),
          color: currentTheme.colors.text,
          fontFamily: currentTheme.typography.fontFamily,
        }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className={`${scaleStyles.text} font-medium`}>{data.label}</span>
          <span className={`${scaleStyles.text} font-bold`} style={{ color: getStatusColor() }}>
            {data.value.toFixed(3)} {data.unit}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="h-4 rounded-full transition-all duration-500"
            style={{ 
              width: `${clampedPercentage}%`,
              backgroundColor: getStatusColor(),
            }}
          />
        </div>
        <div className="flex justify-between text-sm mt-1 opacity-75">
          <span>{data.tolerance.min}</span>
          <span>{data.tolerance.max}</span>
        </div>
      </div>
    );
  }
  
  // Graph display
  return (
    <div 
      className="p-4 rounded-lg border-2"
      style={{ 
        backgroundColor: currentTheme.colors.background,
        borderColor: getStatusColor(),
        color: currentTheme.colors.text,
        fontFamily: currentTheme.typography.fontFamily,
      }}
    >
      <div className={`${scaleStyles.text} font-medium mb-4`}>
        {data.label}: {data.value.toFixed(3)} {data.unit}
      </div>
      <div className="h-20 flex items-end space-x-1">
        {data.trend.map((value, index) => (
          <div
            key={index}
            className="flex-1 rounded-t transition-all duration-300"
            style={{
              height: `${(value / Math.max(...data.trend)) * 100}%`,
              backgroundColor: getStatusColor(),
              opacity: index === data.trend.length - 1 ? 1 : 0.6,
            }}
          />
        ))}
      </div>
    </div>
  );
};