export const calculateAverage = grades => {
  if (grades && grades.length > 0) {
    let sum = 0;
    grades.forEach(val => {
      sum += parseInt(val);
    });
    const average = (sum / grades.length).toFixed(2);
    return average;
  } else {
    return 0;
  }
};
