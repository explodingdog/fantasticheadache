const createListOfNumberedItems = (n, name) => {
  let createdList = [];
  for (n; n > 0; n--) {
    createdList.push(`${name}${n}`);
  }
  return createdList;
};

const createImage = name => {
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    `https://res.cloudinary.com/explodingdog/image/upload/w_1200/${name}.jpg`
  );
  return image;
};

const createListElement = content => {
  let listItem = document.createElement("li");
  listItem.appendChild(content);
  return listItem;
};

const makeListItemWithImage = nameOfImage => {
  let theWholeThing = createListElement(createImage(nameOfImage));
  return theWholeThing;
};

const makeItems = listOfItems => {
  let theItems = listOfItems.map(item => makeListItemWithImage(item));
  return theItems;
};

let imageList = document.querySelector(".image-list");

const circles = createListOfNumberedItems(24, "circle");
let theList = makeItems(circles);
theList.forEach(one => imageList.appendChild(one));
