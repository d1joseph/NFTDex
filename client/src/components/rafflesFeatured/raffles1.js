/* File used as utility for retrieving database information */

import img1 from "../../assets/Featured NFT Image.png";
import img2 from "../../assets/trending_raffles/Gambling Ape 1.png";
import img3 from "../../assets/trending_raffles/Bored Mummy Waking Up.png";
import img4 from "../../assets/trending_raffles/Gauntlets.png";

import logo1 from "../../assets/Featured NFT Collection.png";
import logo2 from "../../assets/trending_raffles/Gambling Ape collection.png";
import logo3 from "../../assets/trending_raffles/Bored Mummy Waking Up collection.png";
import logo4 from "../../assets/trending_raffles/Bored Mummy Waking Up collection.png";

import verified from "../../assets/Verified.svg";
import transparent from "../../assets/transparent.png";

import eth from '../../assets/Ethereum.png';

//Temp - Image Array
const raffle1 = [
  {
    id: "1",
    nft_name: "#3690",
    nft_src: img1,
    nft_alt: "",
    col_name: "Bored Ape Yacht Club",
    col_logo: logo1,
    col_verified: verified,
    raf_price: 1.2,
    raf_tickets_reserve: 10000,
    raf_tickets_sold: 5000,
    raf_draw_datetime: "",
    currency: eth
  },
  {
    id: "2",
    nft_name: "Gambling Ape #4145",
    nft_src: img2,
    nft_alt: "",
    col_name: "Gambling Apes",
    col_logo: logo2,
    col_verified: verified,
    raf_price: 0.1,
    raf_tickets_reserve: 10000,
    raf_tickets_sold: 7500,
    raf_draw_datetime: "",
    currency: eth
  },
  {
    id: "3",
    nft_name: "Bored Mummy #4114",
    nft_src: img3,
    nft_alt: "",
    col_name: "Bored Mummy Waking Up",
    col_logo: logo3,
    col_verified: transparent,
    raf_price: 0.05,
    raf_tickets_reserve: 10000,
    raf_tickets_sold: 10000,
    raf_draw_datetime: "",
    currency: eth
  },
  {
    id: "4",
    nft_name: "Pixel Purple",
    nft_src: img4,
    nft_alt: "",
    col_name: "Gauntlets",
    col_logo: logo4,
    col_verified: transparent,
    raf_price: 0.01,
    raf_tickets_reserve: 10000,
    raf_tickets_sold: 1000,
    raf_draw_datetime: "",
    currency: eth
  }
];

export default raffle1;