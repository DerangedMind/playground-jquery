// Wait for document ready
$(() => {
  // onClick event listener for element with ID "blue"
  $('#blue').on('click', function(evt) {
    console.log('', evt.offsetX, evt.offsetY);
  });
})
