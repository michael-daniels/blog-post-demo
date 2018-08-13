let theData = [
  {
    headline:'Headline 1',
    content: 'some content, this is some content...',
    image: 'http://cdn.earthporm.com/wp-content/uploads/2015/04/cute-pet-rats-26__880.jpg'
  },
  {
    headline:'Headline 2',
    content: 'some content, this is some content...',
    image: 'http://cdn.earthporm.com/wp-content/uploads/2015/04/cute-pet-rats-26__880.jpg'
  },
  {
    headline:'Headline 3',
    content: 'some content, this is some content...',
    image: 'http://cdn.earthporm.com/wp-content/uploads/2015/04/cute-pet-rats-26__880.jpg'
  },
  {
    headline:'Headline 4',
    content: 'some content, this is some content...',
    image: 'http://cdn.earthporm.com/wp-content/uploads/2015/04/cute-pet-rats-26__880.jpg'
  },
  {
    headline:'Headline 5',
    content: 'some content, this is some content...',
    image: 'http://cdn.earthporm.com/wp-content/uploads/2015/04/cute-pet-rats-26__880.jpg'
  },
]


for (let i = 0; i < theData.length; i++) {
  document.getElementById('allPosts').insertAdjacentHTML('beforeend', `
    <div id=${i + 1}>
      <img src=${theData[i].image} />
      <h3>${theData[i].headline}</h3>
      <p>${theData[i].content}</p>
    </div>
  `)
}












// for (let i = 0; i < theData.length; i++) {
//   let newPostDiv = document.createElement('div')
//   let newPostHeadline = document.createTextNode(`${theData[i].headline}`)
//   let newPostContent = document.createTextNode(`${theData[i].content}`)
//   let newPostImage = document.createElement('img')
//
//   newPostImage.src = `${theData[i].image}`
//
//   newPostDiv.appendChild(newPostHeadline)
//   newPostDiv.appendChild(newPostContent)
//   newPostDiv.appendChild(newPostImage)
//   document.getElementById('allPosts').appendChild(newPostDiv)
// }
