export default class DestinationsModel{

  constructor(service){
    this.service = service;
    this.destinations = this.service.getDestinations();
  }

  getDestination(){
    return this.destinations;
  }

  getById(id){
    return this.destinations.find((destination) => destination.id === id);
  }
}
