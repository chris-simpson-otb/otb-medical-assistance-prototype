window.onload = function() {

  var accomodationPanel = document.getElementById('accommodation-panel');
  var flightPanel = document.getElementById('flights-panel');
  var wheelchairPanel = document.getElementById('wheelchair-panel');

  var expandablePanels = [
    {
      panel: accomodationPanel,
      yes: document.getElementById('accom-assistance-yes'),
      no: document.getElementById('accom-assistance-no'),
    },
    {
      panel: flightPanel,
      yes: document.getElementById('flight-assistance-yes'),
      no: document.getElementById('flight-assistance-no'),
    },
    {
      panel: wheelchairPanel,
      yes: document.getElementById('wheelchair-yes'),
      no: document.getElementById('wheelchair-no'),
    },
  ];

  expandablePanels.forEach(function(element) {
    element.yes.addEventListener('change', function(event) {
      if (event.currentTarget.checked) {
        element.panel.classList = 'expanded';
        element.yes.parentElement.parentElement.classList.add('question-block--grey');
      }
    }, false);
    element.no.addEventListener('change', function(event) {
      if (event.currentTarget.checked) {
        element.panel.classList = '';
        element.no.parentElement.parentElement.classList.remove('question-block--grey');
      }
    }, false);
  });

  var showHideFields = [
    {
      field: document.getElementById('accom-textarea'),
      yes: document.getElementById('accom-request-yes'),
      no: document.getElementById('accom-request-no'),
    },
    {
      field: document.getElementById('medical-luggage-panel'),
      yes: document.getElementById('medication-yes'),
      no: document.getElementById('medication-no'),
    },
    {
      field: document.getElementById('medical-equipment-panel'),
      yes: document.getElementById('medical-equip-yes'),
      no: document.getElementById('medical-equip-no'),
    },
  ];

  showHideFields.forEach(function(element) {
    element.yes.addEventListener('change', function(event) {
      if (event.currentTarget.checked) {
        element.field.classList.add('expanded');
      }
    }, false);
    element.no.addEventListener('change', function(event) {
      if (event.currentTarget.checked) {
        element.field.classList.remove('expanded');
      }
    });
  });

  $(function () {
    $('[data-toggle="popover"]').popover()
  })
};
