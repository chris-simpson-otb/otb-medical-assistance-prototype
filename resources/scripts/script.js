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
      }
    }, false);
    element.no.addEventListener('change', function(event) {
      if (event.currentTarget.checked) {
        element.panel.classList = '';
      }
    }, false);
  });

  var showHideFields = [
    {
      field: document.getElementById('accommodation-subpanel'),
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
    {
      field: document.getElementById('wheelchair-panel-wrapper'),
      yes: document.getElementById('long-distance-no'),
      no: document.getElementById('long-distance-yes'),
    },
    {
      field: document.getElementById('wheelchair-dimension-panel'),
      yes: document.getElementById('foldable-yes'),
      no: document.getElementById('foldable-no'),
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
