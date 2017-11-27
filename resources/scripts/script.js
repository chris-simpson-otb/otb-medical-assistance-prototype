window.onload = function() {

  var accomodationPanel = document.getElementById('accommodation-panel');
  var flightPanel = document.getElementById('flights-panel');
  var wheelchairPanel = document.getElementById('wheelchair-panel');

  var expandablePanels = [
    {
      panel: accomodationPanel,
      yes: 'accom-assistance-yes',
      no: 'accom-assistance-no',
    },
    {
      panel: flightPanel,
      yes: 'flight-assistance-yes',
      no: 'flight-assistance-no',
    },
    {
      panel: wheelchairPanel,
      yes: 'wheelchair-yes',
      no: 'wheelchair-no',
    },
  ];

  expandablePanels.forEach(function(element) {
    document.getElementById(element.yes).addEventListener('change', function(event) {
      if (event.currentTarget.checked) {
        element.panel.classList = 'expanded';
      }
    }, false);
    document.getElementById(element.no).addEventListener('change', function(event) {
      if (event.currentTarget.checked) {
        element.panel.classList = '';
      }
    }, false);
  });

  var showHideFields = [
    {
      inputTrigger: document.querySelectorAll('input[name="accom-request"]'),
      textArea: document.getElementById('accom-textarea'),
    },
    {
      inputTrigger: document.querySelectorAll('input[name="medication"]'),
      textArea: document.getElementById('medical-luggage-panel'),
    },
    {
      inputTrigger: document.querySelectorAll('input[name="medical-equip"]'),
      textArea: document.getElementById('medical-equipment-panel'),
    },
  ];

  showHideFields.forEach(function(element) {
    this.textArea = element.textArea;
    element.inputTrigger.forEach(function(input) {
      debugger;
      input.addEventListener('change', function() {
        if (event.currentTarget.value === 'yes') {
          textArea.classList.add('expanded');
        } else {
          textArea.classList.remove('expanded');
        }
      });
    }.bind(this));
  });

};
