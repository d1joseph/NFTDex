/* File used as utility for retrieving database information */
import auth1 from "../../assets/featured_creators/Featured creator bg.png";

import logo1 from "../../assets/featured_creators/Profile pic.png";

import verified from "../../assets/Verified.svg";
import transparent from "../../assets/transparent.png";

//Temp - Image Array
const creators1 = [
  {
    id: "1",
    type: "creator",
    auth_name: "Banks",
    auth_socials: "@banks",
    auth_banner_src: auth1,
    auth_banner_alt: "",
    auth_logo_src: logo1,
    auth_logo_alt: "",
    auth_followers: "2,834",
    auth_verified: verified,
    auth_description: "just a random kid who was born to be a loser, but fkd around on the internet and made a life for himself."
  },
  {
    id: "2",
    type: "creator",
    auth_name: "Banks2",
    auth_socials: "@banks_",
    auth_banner_src: auth1,
    auth_banner_alt: "",
    auth_logo_src: logo1,
    auth_logo_alt: "",
    auth_followers: "8,342",
    auth_verified: transparent,
    auth_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: "3",
    type: "creator",
    auth_name: "Name is too long for the space",
    auth_socials: "@banks__",
    auth_banner_src: auth1,
    auth_banner_alt: "",
    auth_logo_src: logo1,
    auth_logo_alt: "",
    auth_followers: "3,428",
    auth_verified: verified,
    auth_description: "just a random kid who was born to be a loser, but fkd around on the internet and made a life for himself."
  },
  {
    id: "4",
    type: "creator",
    auth_name: "Banks4",
    auth_socials: "@banks___",
    auth_banner_src: auth1,
    auth_banner_alt: "",
    auth_logo_src: logo1,
    auth_logo_alt: "",
    auth_followers: "4,283",
    auth_verified: transparent,
    auth_description: "just a random kid who was born to be a loser, but fkd around on the internet and made a life for himself."
  }
];

export default creators1;