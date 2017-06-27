(function() {
  var form, options, other, otherText, hide;
  form = document.getElementById('how-heard');
  options = form.elements.heard;
  other = document.getElementById('other');
  otherText = document.getElementById('other-text');
  otherText.className = 'hide';

  // Loop through each radio button, add an event listener, when one is clicked call the radioChanged function
  for (var i = [0]; i < options.length; i++) {
    addEvent(options[i], 'click', radioChanged);
  }
  // The class for 'other' text field is updated to 'hide' if not selected and blank if selected
  function radioChanged() {
    hide = other.checked ? '' : 'hide';
    otherText.className = hide;
    // If the other radio is hidden, the text input is emptied
    if (hide) {
      otherText.value = '';
    }
  }
}());
