/* File used as utility for retrieving database information */
import nft_img2 from "../../assets/trending_raffles/Gambling Ape 1.png";
import col_img1 from "../../assets/featured_collections/HAPE Prime.png";
import col_logo1 from "../../assets/featured_collections/HAPE collection.png";
import col_logo6 from "../../assets/trending_raffles/Gambling Ape collection.png";
import auth1 from "../../assets/featured_creators/Featured creator bg.png";
import logo1 from "../../assets/featured_creators/Profile pic.png";
import eth from '../../assets/Ethereum.png';
import verified from "../../assets/Verified.svg";
import transparent from "../../assets/transparent.png";

//Mixed Array
const cardsArray = [
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
    type: "raffle",
    nft_name: "Gambling Ape #4145",
    nft_src: nft_img2,
    nft_alt: "",
    col_name: "Gambling Apes",
    col_logo: col_logo6,
    col_verified: verified,
    raf_price: 0.1,
    raf_tickets_reserve: 10000,
    raf_tickets_sold: 7500,
    raf_draw_datetime: "",
    currency: eth
  },
  {
    id: "4",
    type: "",
  }
];


  export default cardsArray;
  
  
