// Write your code here!
const mainNode = document.querySelector("#main")

mainNode.remove()

const newHeader = document.createElement("h1")

newHeader.id = "victory"

newHeader.textContent = "JESUS is the champion"

document.body.append(newHeader)

