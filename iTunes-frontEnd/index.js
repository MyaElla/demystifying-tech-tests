let url = 'https://itunes.apple.co/gb/rss/topalbums/limit=100/json'

let results = document.querySelector('.results')
console.log('This are my results', results)

const generateItemHtml = (url) => {
  let resultsItem = document.createElement('div')
  resultsItem.innerHTML = url
  results.appendChild(resultsItem)
}

// NOTE: Testing how to allow for mocking this function when myRequest is invoked
// We need to change what it's returning

const generateErrorHtml = () => {
  let resultsItem = document.createElement('p')
  resultsItem.innerHTML = 'You have an error in here'
  results.appendChild(resultsItem)
}


export let myRequest = fetch(url)
  .then(response => response.json())
  .then(albums => {
    albums.feed.entry.forEach( item => {
      generateItemHtml(item['im:artist'].label)
    })
  })
  .catch(error => {
    generateErrorHtml()
  })
