/* File used as utility for retrieving database information */

import img1 from "../../assets/featured_collections/HAPE Prime.png";
import img2 from "../../assets/featured_collections/Creepz Genesis.png";
import img3 from "../../assets/featured_collections/CryptoBatz.png";
import img4 from "../../assets/featured_collections/Azuki.png";

import logo1 from "../../assets/featured_collections/HAPE collection.png";
import logo2 from "../../assets/featured_collections/Creepz collection.png";
import logo3 from "../../assets/featured_collections/CryptoBatz collection.png";
import logo4 from "../../assets/featured_collections/Azuki collection.png";

import verified from "../../assets/Verified.svg";
import transparent from "../../assets/transparent.png";

//Temp - Image Array
const collection1 = [
  {
    id: "1",
    name: "HAPE Prime",
    alt: "",
    src: img1,
    logo: logo1,
    author: "HAPEBEAST",
    items: 8.1,
    col_verified: verified,
    auth_verified: verified
  },
  {
    id: "2",
    name: "Creepz Genesis",
    alt: "",
    src: img2,
    logo: logo2,
    author: "Genesis-Creepz-OVERLORD",
    items: 11.1,
    col_verified: transparent,
    auth_verified: transparent
  },
  {
    id: "3",
    //name: "CryptoBatz",
    name: "Flapp Flappy Bat Bois",
    alt: "",
    src: img3,
    logo: logo3,
    author: "SutterSystems",
    items: 9.7,
    col_verified: verified,
    auth_verified: transparent
  },
  {
    id: "4",
    name: "Azuki",
    alt: "",
    src: img4,
    logo: logo4,
    author: "TeamAzuki",
    items: 10,
    col_verified: transparent,
    auth_verified: verified
  }
];

export default collection1;
