/* File used as utility for retrieving database information */

import nft_img1 from '../assets/Featured NFT Image.png';
import nft_img2 from '../assets/trending_raffles/Gambling Ape 1.png';
import nft_img3 from '../assets/trending_raffles/Bored Mummy Waking Up.png';
import nft_img4 from '../assets/trending_raffles/Gauntlets.png';

import col_img1 from '../assets/featured_collections/HAPE Prime.png';
import col_img2 from '../assets/featured_collections/Creepz Genesis.png';
import col_img3 from '../assets/featured_collections/CryptoBatz.png';
import col_img4 from '../assets/featured_collections/Azuki.png';

import col_logo1 from '../assets/featured_collections/HAPE collection.png';
import col_logo2 from '../assets/featured_collections/Creepz collection.png';
import col_logo3 from '../assets/featured_collections/CryptoBatz collection.png';
import col_logo4 from '../assets/featured_collections/Azuki collection.png';
import col_logo5 from '../assets/Featured NFT Collection.png';
import col_logo6 from '../assets/trending_raffles/Gambling Ape collection.png';
import col_logo7 from '../assets/trending_raffles/Bored Mummy Waking Up collection.png';

import auth_banner1 from '../assets/featured_creators/Featured creator bg.png';
import auth_logo1 from '../assets/featured_creators/Profile pic.png';

import eth from '../assets/Ethereum.png';
import verified from '../assets/Verified.svg';
import transparent from '../assets/transparent.png';

import blog_src1 from '../assets/getting_started/10 Tips.png';
import blog_src2 from '../assets/getting_started/Keeping Safe.png';
import blog_src3 from '../assets/getting_started/Beginners Guide.png';

//Raffle Featured
const featuredRaffle = [
  {
    id: 0,
    type: 'featuredRaffle',
    nft_name: 'Bored Ape Yacht Club #3690 Extermely long namesssssssssss',
    nft_src: nft_img1,
    nft_alt: '',
    col_name: 'Bored Ape Yacht Club super long name oh no',
    col_logo: col_logo5,
    col_verified: verified,
    raf_price: 100.001,
    raf_tickets_reserve: 10000,
    raf_tickets_sold: 7000,
    raf_draw_datetime: '',
    currency: eth,
    currenccy_USD: 2816,
  }
]


//Collections
const collection1 = [
  {
    id: 0,
    type: 'collection',
    col_name: 'HAPE Prime',
    col_src: col_img1,
    col_alt: '',
    col_logo: col_logo1,
    col_desc: '8K NEXT-GENERATION, HIGH FASHION HAPES Unique, fully 3D and built to unite the ape multiverse. Designed and styled by Digimental Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at convallis mi. Aliquam arcu nulla, fermentum non tincidunt sit amet, euismod eu metus. Suspendisse convallis sapien id nunc tincidunt, eget varius ante placerat. Curabitur suscipit dui eu lectus sodales semper. Nullam sed convallis lorem. Aliquam eget viverra velit. Mauris at dolor metus. Cras a venenatis augue. ',
    col_bg: '#606060',
    col_items: 8100,
    col_verified: verified,
    col_from: 0.001,
    auth_name: 'HAPEBEAST',
    auth_verified: verified,
    currency: eth
  },
  {
    id: 1,
    type: 'collection',
    col_name: 'Creepz Genesis',
    col_src: col_img2,
    col_alt: '',
    col_logo: col_logo2,
    col_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at convallis mi. Aliquam arcu nulla, fermentum non tincidunt sit amet, euismod eu metus. Suspendisse convallis sapien id nunc tincidunt, eget varius ante placerat. Curabitur suscipit dui eu lectus sodales semper. Nullam sed convallis lorem. Aliquam eget viverra velit. Mauris at dolor metus. Cras a venenatis augue.",
    col_bg: '#A62DDE',
    col_items: 11123,
    col_verified: transparent,
    col_from: 0.001,
    auth_name: 'Genesis-Creepz-OVERLORD',
    auth_verified: transparent,
    currency: eth
  },
  {
    id: 2,
    type: 'collection',
    col_name: 'Flapp Flappy Bat Bois',
    col_src: col_img3,
    col_alt: '',
    col_logo: col_logo3,
    col_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at convallis mi. Aliquam arcu nulla, fermentum non tincidunt sit amet, euismod eu metus. Suspendisse convallis sapien id nunc tincidunt, eget varius ante placerat. Curabitur suscipit dui eu lectus sodales semper. Nullam sed convallis lorem. Aliquam eget viverra velit. Mauris at dolor metus. Cras a venenatis augue. ",
    col_bg: '#332F5F',
    col_items: 9777,
    col_verified: verified,
    col_from: 0.001,
    auth_name: 'SutterSystems',
    auth_verified: transparent,
    currency: eth
  },
  {
    id: 3,
    type: 'collection',
    col_name: 'Azuki',
    col_alt: '',
    col_src: col_img4,
    col_logo: col_logo4,
    col_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at convallis mi. Aliquam arcu nulla, fermentum non tincidunt sit amet, euismod eu metus. Suspendisse convallis sapien id nunc tincidunt, eget varius ante placerat. Curabitur suscipit dui eu lectus sodales semper. Nullam sed convallis lorem. Aliquam eget viverra velit. Mauris at dolor metus. Cras a venenatis augue. ",
    col_bg: '',
    col_items: 10000,
    col_verified: transparent,
    col_from: 0.001,
    auth_name: 'TeamAzuki',
    auth_verified: verified,
    currency: eth
  }
];



//Creators
const creators1 = [
    {
      id: 0,
      type: 'creator',
      auth_name: 'Banks',
      auth_socials: '@banks',
      auth_banner_src: auth_banner1,
      auth_banner_alt: '',
      auth_logo_src: auth_logo1,
      auth_logo_alt: '',
      auth_followers: '2,834',
      auth_verified: verified,
      auth_description: 'just a random kid who was born to be a loser, but fkd around on the internet and made a life for himself.'
    },
    {
      id: 1,
      type: 'creator',
      auth_name: 'Banks2',
      auth_socials: '@banks_',
      auth_banner_src: auth_banner1,
      auth_banner_alt: '',
      auth_logo_src: auth_logo1,
      auth_logo_alt: '',
      auth_followers: '8,342',
      auth_verified: transparent,
      auth_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      type: 'creator',
      auth_name: 'Name is too long for the space',
      auth_socials: '@banks__',
      auth_banner_src: auth_banner1,
      auth_banner_alt: '',
      auth_logo_src: auth_logo1,
      auth_logo_alt: '',
      auth_followers: '3,428',
      auth_verified: verified,
      auth_description: 'just a random kid who was born to be a loser, but fkd around on the internet and made a life for himself.'
    },
    {
      id: 3,
      type: 'creator',
      auth_name: 'Banks4',
      auth_socials: '@banks___',
      auth_banner_src: auth_banner1,
      auth_banner_alt: '',
      auth_logo_src: auth_logo1,
      auth_logo_alt: '',
      auth_followers: '4,283',
      auth_verified: transparent,
      auth_description: 'just a random kid who was born to be a loser, but fkd around on the internet and made a life for himself.'
    }
  ];
  
  //Trending Raffles
  const raffle1 = [
    {
      id: 0,
      type: 'raffle',
      nft_name: '#3690',
      nft_src: nft_img1,
      nft_alt: '',
      col_name: 'Bored Ape Yacht Club',
      col_logo: col_logo5,
      col_verified: verified,
      raf_price: 0.001,
      raf_tickets_reserve: 10000,
      raf_tickets_sold: 5000,
      raf_draw_datetime: '',
      currency: eth
    },
    {
      id: 1,
      type: 'raffle',
      nft_name: 'Gambling Ape #4145',
      nft_src: nft_img2,
      nft_alt: '',
      col_name: 'Gambling Apes',
      col_logo: col_logo6,
      col_verified: verified,
      raf_price: 10000,
      raf_tickets_reserve: 10000,
      raf_tickets_sold: 7500,
      raf_draw_datetime: '',
      currency: eth
    },
  
    {
      id: 2,
      type: 'raffle',
      nft_name: 'Bored Mummy #4114 stupidly long name bla bla bla',
      nft_src: nft_img3,
      nft_alt: '',
      col_name: 'Bored Mummy Waking Up',
      col_logo: col_logo7,
      col_verified: verified,
      raf_price: 0.000001,
      raf_tickets_reserve: 10000,
      raf_tickets_sold: 10000,
      raf_draw_datetime: '',
      currency: eth
    },
    {
      id: 3,
      type: 'raffle',
      nft_name: 'Pixel Purple',
      nft_src: nft_img4,
      nft_alt: '',
      col_name: 'Gauntlets',
      col_logo: col_logo7,
      col_verified: transparent,
      raf_price: 0.01,
      raf_tickets_reserve: 10000,
      raf_tickets_sold: 1000,
      raf_draw_datetime: '',
      currency: eth
    }
  ];

  //Mixed Array
  const mixedarray = [
    {
      id: 0,
      type: 'collection',
      col_name: 'HAPE Prime',
      col_src: col_img1,
      col_alt: '',
      col_logo: col_logo1,
      col_items: 8.1,
      col_verified: verified,
      auth_name: 'HAPEBEAST',
      auth_verified: verified
    },
    {
      id: 1,
      type: 'creator',
      auth_name: 'Banks2',
      auth_socials: '@banks_',
      auth_banner_src: auth_banner1,
      auth_banner_alt: '',
      auth_logo_src: auth_logo1,
      auth_logo_alt: '',
      auth_followers: '8,342',
      auth_verified: transparent,
      auth_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      type: 'raffle',
      nft_name: 'Gambling Ape #4145',
      nft_src: nft_img2,
      nft_alt: '',
      col_name: 'Gambling Apes',
      col_logo: col_logo6,
      col_verified: verified,
      raf_price: 0.1,
      raf_tickets_reserve: 10000,
      raf_tickets_sold: 7500,
      raf_draw_datetime: '',
      currency: eth
    },
    {
      id: 3,
      type: ''
    }
  ];

  //Articles
  const articles = [
    {
      id: 0,
      type: 'blog',
      src: blog_src1,
      title: 'Keeping yourself safe when buying NFTs on ColorBlue'
    },
    {
      id: 1,
      type: 'blog',
      src: blog_src2,
      title: '10 tips for avoiding scams and staying safe on the decentralized web'
    },
    {
      id: 2,
      type: 'blog',
      src: blog_src3,
      title: "The Beginners's guide to creating & selling digital art NFTs"
    }
  ];
  export default {collection1, creators1, raffle1, mixedarray, articles, featuredRaffle};
  
  
