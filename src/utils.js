function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export {getRandomArrayElement, getRandomInteger};





// const getRandomArray = (arr) => {
//   const results = [];
//   results.push(arr.slice(0, Math.ceil(Math.random() * arr.length)));
//   return results;
// };

// const getDateFormat = ((date) => dayjs(date).format('YYYY/MM/DD HH:mm'));
// const getDateISO = ((date) => dayjs(date).format('YYYY-MM-DDTHH:mm'));
// const getDateHoursMinutes = ((date) => dayjs(date).format('HH:mm'));
// const getDateMonthDay = ((date) => dayjs(date).format('MMM DD'));


// export {getRandomInteger, getRandomArray, getDateFormat, getDateISO, getDateHoursMinutes, getDateMonthDay};
