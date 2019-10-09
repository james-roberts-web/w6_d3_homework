const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function (searchStartLocation) {
  const result = this.journeys.map((journey) => {
    return journey.startLocation
  });
return result;
};


Traveller.prototype.getJourneyEndLocations = function (searchEndLocation) {
  const result = this.journeys.map((journey) => {
    return journey.endLocation
  });
return result;
};

Traveller.prototype.getJourneysByTransport = function (transportType) {
  const result = this.journeys.filter((journey) => {
    return (transportType === journey.transport)
  });
return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return (minDistance < journey.distance);
  });
return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let result =[];
  let journeys = this.journeys
  journeys.forEach((journey) => {
    if (result.includes(journey.transport)){
      return
    } else {
      result.push(journey.transport)
    };
  });
  return result;
};

module.exports = Traveller;
