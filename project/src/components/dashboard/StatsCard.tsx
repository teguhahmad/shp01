import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatProps {
  title: string;
  value: string;
  change: string;
  isIncrease: boolean;
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

interface StatsCardProps {
  stat: StatProps;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-50 text-primary-600';
      case 'secondary':
        return 'bg-secondary-50 text-secondary-600';
      case 'success':
        return 'bg-success-50 text-success-600';
      case 'warning':
        return 'bg-warning-50 text-warning-600';
      case 'error':
        return 'bg-error-50 text-error-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="card p-5 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center">
        <div className={`flex-shrink-0 rounded-md p-3 ${getColorClass(stat.color)}`}>
          {stat.icon}
        </div>
        <div className="ml-5 w-0 flex-1">
          <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
          <dd className="flex items-baseline">
            <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
            <div className={`ml-2 flex items-baseline text-sm font-semibold ${
              stat.isIncrease ? 'text-success-600' : 'text-error-600'
            }`}>
              {stat.isIncrease ? (
                <ArrowUp className="h-4 w-4 flex-shrink-0 self-center" />
              ) : (
                <ArrowDown className="h-4 w-4 flex-shrink-0 self-center" />
              )}
              <span className="ml-1">{stat.change}</span>
            </div>
          </dd>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;