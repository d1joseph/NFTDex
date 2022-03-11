/* File used as utility for retrieving database information */

import col_img1 from "../../assets/featured_collections/HAPE Prime.png";
import col_img2 from "../../assets/featured_collections/Creepz Genesis.png";
import col_img3 from "../../assets/featured_collections/CryptoBatz.png";
import col_img4 from "../../assets/featured_collections/Azuki.png";

import col_logo1 from "../../assets/featured_collections/HAPE collection.png";
import col_logo2 from "../../assets/featured_collections/Creepz collection.png";
import col_logo3 from "../../assets/featured_collections/CryptoBatz collection.png";
import col_logo4 from "../../assets/featured_collections/Azuki collection.png";

import verified from "../../assets/Verified.svg";
import transparent from "../../assets/transparent.png";

//Temp - Image Array
const collection1 = [
  {
    id: "1",
    type: "collection",
    col_name: "HAPE Prime",
    col_src: col_img1,
    col_alt: "",
    col_logo: col_logo1,
    col_items: 8.1,
    col_verified: verified,
    auth_name: "HAPEBEAST",
    auth_verified: verified
  },
  {
    id: "2",
    type: "collection",
    col_name: "Creepz Genesis",
    col_src: col_img2,
    col_alt: "",
    col_logo: col_logo2,
    col_items: 11.1,
    col_verified: transparent,
    auth_name: "Genesis-Creepz-OVERLORD",
    auth_verified: transparent
  },
  {
    id: "3",
    type: "collection",
    col_name: "Flappy Flappy Bat Bois",
    col_src: col_img3,
    col_alt: "",
    col_logo: col_logo3,
    col_items: 9.7,
    col_verified: verified,
    auth_name: "SutterSystems",
    auth_verified: transparent
  },
  {
    id: "4",
    type: "collection",
    col_name: "Azuki",
    col_alt: "",
    col_src: col_img4,
    col_logo: col_logo4,
    col_items: 10,
    col_verified: transparent,
    auth_name: "TeamAzuki",
    auth_verified: verified
  }
];

export default collection1;
