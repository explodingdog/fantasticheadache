const circles = [
  "circle1",
  "circle2",
  "circle3",
  "circle4",
  "circle5",
  "circle6",
  "circle7",
  "circle8",
  "circle9",
  "circle10"
];

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
  let imageToBeAdded = createImage(nameOfImage);
  let theWholeThing = createListElement(imageToBeAdded);

  return theWholeThing;
};

const makeItems = listOfItems => {
  let theItems = listOfItems.map(item => makeListItemWithImage(item));
  return theItems;
};

let imageList = document.querySelector(".image-list");

let theList = makeItems(circles);
theList.forEach(one => imageList.appendChild(one));