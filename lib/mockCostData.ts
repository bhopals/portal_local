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
  
  costTrend: {
    percentage: 196,
    trend: 'up' // or 'down'
  },
  
  dailyActiveUsersTrend: {
    percentage: 176,
    trend: 'up'
  },
  
  excess: {
    percentage: 20,
    engineers: 4
  },
  
  chartData: [
    { date: 'Jun 11', cost: 6500, users: 95000 },
    { date: 'Jun 18', cost: 7200, users: 105000 },
    { date: 'Jun 25', cost: 8100, users: 115000 },
    { date: 'Jul 2', cost: 8900, users: 125000 },
    { date: 'Jul 9', cost: 9500, users: 135000 },
    { date: 'Jul 16', cost: 10200, users: 145000 },
    { date: 'Jul 23', cost: 11000, users: 155000 },
    { date: 'Jul 30', cost: 11800, users: 165000 },
    { date: 'Aug 6', cost: 12500, users: 175000 },
    { date: 'Aug 13', cost: 13300, users: 185000 },
    { date: 'Aug 20', cost: 14000, users: 195000 },
    { date: 'Aug 27', cost: 14800, users: 205000 },
    { date: 'Sep 3', cost: 15500, users: 215000 },
    { date: 'Sep 10', cost: 16300, users: 220000 },
    { date: 'Sep 17', cost: 17000, users: 225000 },
    { date: 'Sep 24', cost: 17800, users: 230000 },
    { date: 'Oct 1', cost: 18500, users: 235000 },
    { date: 'Oct 8', cost: 19300, users: 240000 },
    { date: 'Oct 15', cost: 20000, users: 245000 },
    { date: 'Oct 22', cost: 20800, users: 250000 },
    { date: 'Oct 29', cost: 21500, users: 255000 },
    { date: 'Nov 5', cost: 22300, users: 260000 },
    { date: 'Nov 12', cost: 23000, users: 265000 },
    { date: 'Nov 19', cost: 23800, users: 270000 },
    { date: 'Nov 26', cost: 24500, users: 273000 },
    { date: 'Dec 3', cost: 25300, users: 275000 },
    { date: 'Dec 7', cost: 25657, users: 275000 },
  ]
};