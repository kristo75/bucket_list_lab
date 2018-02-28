const ListView = function(list) {
  this.view = document.querySelector('#bucket-list-view')

  console.log(list);
  list.forEach(item => {
    const listItem = document.createElement('li')
    listItem.innerText = item
    this.view.appendChild(listItem)
  })

}

module.exports = ListView;
