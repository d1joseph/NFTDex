/* File used as utility for retrieving database information */

import nft_img1 from "../../assets/Featured NFT Image.png";
import nft_img2 from "../../assets/trending_raffles/Gambling Ape 1.png";
import nft_img3 from "../../assets/trending_raffles/Bored Mummy Waking Up.png";
import nft_img4 from "../../assets/trending_raffles/Gauntlets.png";

import col_logo5 from "../../assets/Featured NFT Collection.png";
import col_logo6 from "../../assets/trending_raffles/Gambling Ape collection.png";
import col_logo7 from "../../assets/trending_raffles/Bored Mummy Waking Up collection.png";


import verified from "../../assets/Verified.svg";
import transparent from "../../assets/transparent.png";

import eth from '../../assets/Ethereum.png';

//Temp - Image Array
const raffle1 = [
  {
    id: "1",
    type: "raffle",
    nft_name: "#3690",
    nft_src: nft_img1,
    nft_alt: "",
    col_name: "Bored Ape Yacht Club",
    col_logo: col_logo5,
    col_verified: verified,
    raf_price: 1.2,
    raf_tickets_reserve: 10000,
    raf_tickets_sold: 5000,
    raf_draw_datetime: "",
    currency: eth
  },
  {
    id: "2",
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
    id: "3",
    type: "raffle",
    nft_name: "Bored Mummy #4114",
    nft_src: nft_img3,
    nft_alt: "",
    col_name: "Bored Mummy Waking Up",
    col_logo: col_logo7,
    col_verified: transparent,
    raf_price: 0.05,
    raf_tickets_reserve: 10000,
    raf_tickets_sold: 10000,
    raf_draw_datetime: "",
    currency: eth
  },
  {
    id: "4",
    type: "raffle",
    nft_name: "Pixel Purple",
    nft_src: nft_img4,
    nft_alt: "",
    col_name: "Gauntlets",
    col_logo: col_logo7,
    col_verified: transparent,
    raf_price: 0.01,
    raf_tickets_reserve: 10000,
    raf_tickets_sold: 1000,
    raf_draw_datetime: "",
    currency: eth
  }
];

export default raffle1;