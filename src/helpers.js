export const getDates = (current) => {
  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];
  let month = [];
  current.setDate((current.getDate() - current.getDay()));
  for (var i = 0; i < 30; i++) {
    month.push({
      day: days[current.getDay()],
      date: current.getDate()
    });
    current.setDate(current.getDate() + 1);
  }
  return month;
};