import { render } from './framework/render.js';
import NewPointButtonView from './view/new-point-button-view';
import EventsPresenter from './presenter/events-presenter.js';
import FilterPresenter from './presenter/filter-presenter';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import OffersModel from './model/offers-model';
import DestinationsModel from './model/destinations-model';

const siteHeaderElement = document.querySelector('.trip-main');
const filterContainerElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const filterModel = new FilterModel();

const eventsPresenter = new EventsPresenter({
  eventListContainer: tripEventsElement,
  pointsModel,
  filterModel,
  offersModel,
  destinationsModel,
  onNewPointDestroy: handleNewPointFormClose,
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  eventsPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

const filterPresenter = new FilterPresenter({
  filterContainer: filterContainerElement,
  filterModel,
  pointsModel
});

render(newPointButtonComponent, siteHeaderElement);

filterPresenter.init();
eventsPresenter.init();
