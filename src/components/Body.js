import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function body() {
  return (
    <Box sx={{ width: 800, height: 450, overflowY: "scroll" , marginLeft:40 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: require("../imags/im1.jpeg"),
    title: "Jeans",
    author: "swabdesign",
  },
  {
    img: require("../imags/img2.jpeg"),
    title: "Bed",
    author: "swabdesign",
  },
  {
    img: require("../imags/img5.jpeg"),
    title: "Bed",
    author: "swabdesign",
  },
  {
    img: require("../imags/img3.jpeg"),
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: require("../imags/img4.jpeg"),
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    img: require("../imags/img6.jpeg"),
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    img: require("../imags/img7.jpeg"),
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: require("../imags/img8.jpeg"),
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    img: require("../imags/img9.jpeg"),
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    img: require("../imags/im1.jpeg"),
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: require("../imags/img10.jpeg"),
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    img: require("../imags/im1.jpeg"),
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: require("../imags/Jeans.webp"),
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    img: require("../imags/im1.jpeg"),
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: require("../imags/im1.jpeg"),
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];
