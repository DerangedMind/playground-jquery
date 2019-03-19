$(() => {
  let flavours = [
    {
      name: 'Strawberry',
      color: 'strawberry-pink'
    },
    {
      name: 'French Vanilla',
      color: 'vanilla'
    },
    {
      name: 'Chocolate',
      color: 'chocolate'
    },
    {
      name: 'Pistachio',
      color: 'pistachio-green'
    },
  ]

  let counterContainer = $('#counter')

  let iceCream = $('<div />').addClass('ice-cream')

  // Build an ice cream cone here...

  counterContainer.append(iceCream)

})
