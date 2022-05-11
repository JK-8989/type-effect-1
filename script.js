const text = "Typing Effect with Cursor"
// const content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum reprehenderit quia quas veritatis exercitationem beatae iure molestias obcaecati esse. Recusandae alias, maxime reprehenderit unde, earum quibusdam ex adipisci sint magnam, ullam minus. Repellat ad maxime nostrum veniam quia, tempore aut vel, possimus repudiandae fugiat consectetur iure accusantium magni error odit a magnam laboriosam perspiciatis dolor tenetur consequatur dolorem sequi?'
const heading = document.querySelector('.heading')
// const Lorem = document.querySelector('.lorem')

let index = 0

const typeTexts = () => {
  heading.textContent += text[index++];
  if(index > text.length){
    heading.textContent = ''
    heading.textContent = 'Typing Effect with Cursor'
    // index = 0;
  }
}

setInterval(typeTexts, 300)
