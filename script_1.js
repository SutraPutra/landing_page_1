
// creating a script for Modal on page load
var myModal = new bootstrap.Modal(document.getElementById('modalChoice'));
myModal.show();

// creating alert when user selects NO in the modal
const noAlertPlaceholder = document.getElementById('noAlertPlaceholder');
const buttonsContainer = document.getElementById('buttonsContainer');

// we could also add a argument for 'type' here. that way we could modify the color & text of alert by callling parameters like danger/success to alert-{type} directly in the .alert class below
const appendAlert = (message) => {

  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-dismissible text-center p-1 m-auto border-0 text-danger" role="alert" style="width:250px;">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close pt-0" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  // clearing the existing alerts
  noAlertPlaceholder.innerHTML = '';
  noAlertPlaceholder.append(wrapper);
}

const alertTrigger = document.getElementById('noAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Sorry! Try again!')
  })
}


// alert("Welcome to Laxmi SHG e-store");