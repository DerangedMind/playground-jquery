$(() => {
  $('#blue').on('click', function(evt) {
    console.log('', evt.offsetX, evt.offsetY);
  });
})
