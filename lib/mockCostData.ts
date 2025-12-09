// Generate realistic random data with volatility
const generateRealisticData = (
  startDate: Date,
  days: number,
  startCost: number,
  endCost: number,
  startUsers: number,
  endUsers: number
) => {
  const data = [];
  const costPerDay = (endCost - startCost) / days;
  const usersPerDay = (endUsers - startUsers) / days;

  let currentCost = startCost;
  let currentUsers = startUsers;

  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    // DRAMATIC random volatility: ±3-8% of current value
    const costVolatilityPercent = (Math.random() * 0.11 - 0.03); // -3% to +8%
    const usersVolatilityPercent = (Math.random() * 0.11 - 0.03); // -3% to +8%

    const costVolatility = currentCost * costVolatilityPercent;
    const usersVolatility = currentUsers * usersVolatilityPercent;

    currentCost += costPerDay + costVolatility;
    currentUsers += usersPerDay + usersVolatility;

    // Ensure we don't go below zero
    currentCost = Math.max(currentCost, 0);
    currentUsers = Math.max(currentUsers, 0);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateStr = `${months[date.getMonth()]} ${date.getDate()}`;

    data.push({
      date: dateStr,
      cost: Math.round(currentCost),
      users: Math.round(currentUsers)
    });
  }

  return data;
};

export const mockCostData = {
  landingZones: [
    { id: 'all', name: 'All Landing Zones' },
    { id: 'app1-dev', name: 'app1-dev-001' },
    { id: 'app2-prod', name: 'app2-prod-001' },
    { id: 'app3-uat', name: 'app3-uat-001' },
  ],

  timePeriods: [
    { id: 'week', label: 'Past Week' },
    { id: 'month', label: 'Past Month' },
    { id: '3months', label: 'Past 3 Months' },
    { id: '6months', label: 'Past 6 Months' },
  ],

  // Resource breakdown data
  resourceBreakdown: {
    all: [
      { name: 'Compute', cost: 12500, percentage: 48.7, color: '#3b82f6' },
      { name: 'Storage', cost: 5200, percentage: 20.3, color: '#8b5cf6' },
      { name: 'Database', cost: 4100, percentage: 16.0, color: '#ec4899' },
      { name: 'Network', cost: 2357, percentage: 9.2, color: '#f59e0b' },
      { name: 'Other', cost: 1500, percentage: 5.8, color: '#10b981' },
    ],
    'app1-dev': [
      { name: 'Compute', cost: 2500, percentage: 49.8, color: '#3b82f6' },
      { name: 'Storage', cost: 1020, percentage: 20.3, color: '#8b5cf6' },
      { name: 'Database', cost: 800, percentage: 15.9, color: '#ec4899' },
      { name: 'Network', cost: 450, percentage: 9.0, color: '#f59e0b' },
      { name: 'Other', cost: 250, percentage: 5.0, color: '#10b981' },
    ],
    'app2-prod': [
      { name: 'Compute', cost: 8800, percentage: 48.2, color: '#3b82f6' },
      { name: 'Storage', cost: 3650, percentage: 20.0, color: '#8b5cf6' },
      { name: 'Database', cost: 2920, percentage: 16.0, color: '#ec4899' },
      { name: 'Network', cost: 1707, percentage: 9.3, color: '#f59e0b' },
      { name: 'Other', cost: 1173, percentage: 6.5, color: '#10b981' },
    ],
    'app3-uat': [
      { name: 'Compute', cost: 1200, percentage: 47.6, color: '#3b82f6' },
      { name: 'Storage', cost: 530, percentage: 21.0, color: '#8b5cf6' },
      { name: 'Database', cost: 380, percentage: 15.1, color: '#ec4899' },
      { name: 'Network', cost: 200, percentage: 7.9, color: '#f59e0b' },
      { name: 'Other', cost: 210, percentage: 8.4, color: '#10b981' },
    ],
  },

  // Zone-specific metrics
  zoneMetrics: {
    all: {
      costTrend: { percentage: 196, trend: 'up' },
      dailyActiveUsersTrend: { percentage: 176, trend: 'up' },
      excess: { percentage: 20, engineers: 4 }
    },
    'app1-dev': {
      costTrend: { percentage: 85, trend: 'up' },
      dailyActiveUsersTrend: { percentage: 120, trend: 'up' },
      excess: { percentage: 12, engineers: 1 }
    },
    'app2-prod': {
      costTrend: { percentage: 245, trend: 'up' },
      dailyActiveUsersTrend: { percentage: 210, trend: 'up' },
      excess: { percentage: 28, engineers: 6 }
    },
    'app3-uat': {
      costTrend: { percentage: 140, trend: 'up' },
      dailyActiveUsersTrend: { percentage: 155, trend: 'up' },
      excess: { percentage: 15, engineers: 2 }
    }
  },

  // Zone-specific chart data with RANDOM fluctuations
  zoneChartData: {
    all: generateRealisticData(
      new Date(2024, 5, 11), // Jun 11, 2024
      179, // days
      6500, // start cost
      25657, // end cost
      95000, // start users
      329800  // end users
    ),
    'app1-dev': generateRealisticData(
      new Date(2024, 5, 11), // Jun 11, 2024
      179, // days
      1200, // start cost
      5020, // end cost
      15000, // start users
      33200  // end users
    ),
    'app2-prod': generateRealisticData(
      new Date(2024, 5, 11), // Jun 11, 2024
      179, // days
      3800, // start cost
      18250, // end cost
      55000, // start users
      182500  // end users
    ),
    'app3-uat': generateRealisticData(
      new Date(2024, 5, 11), // Jun 11, 2024
      179, // days
      1500, // start cost
      2520, // end cost
      25000, // start users
      89000  // end users
    )
  }
};
