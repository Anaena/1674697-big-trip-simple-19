import { getFilteredEvents } from '../utils/filter.js';

function generateFilter(points) {
  return Object.entries(getFilteredEvents(points)).map(
    ([filterName, filteredPoints]) => ({
      name: filterName,
      count: filteredPoints.length,
    }),
  );
}

export { generateFilter };
