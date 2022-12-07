import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import EventsListPresenter from './presenter/events-list-presenter';
import {render} from './render.js';

const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const eventsListPresenter = new EventsListPresenter({eventsListContainer: tripEventsElement});

render(new FilterView(), tripFiltersElement);
render(new SortView(), tripEventsElement);

eventsListPresenter.init();
