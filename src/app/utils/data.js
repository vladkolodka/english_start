export function addServiceInformation(data) {
  data.forEach(function (element, i) {
    element.id = i;
  }, this);

  return data;
}