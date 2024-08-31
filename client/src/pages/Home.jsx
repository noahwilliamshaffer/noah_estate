import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Videos Section */}
      <div className='flex flex-col gap-6 p-6 max-w-6xl mx-auto'>
        <h2 className='text-slate-700 font-bold text-2xl lg:text-4xl text-center mb-8'>
          Watch Our Tennis Coaches in Action
        </h2>
        <div className='flex flex-col gap-8'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-K3UTSn0imI"
            title="Coach Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className='mx-auto'
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/h-SKvw3DBa4"
            title="Coach Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className='mx-auto'
          ></iframe>
        </div>
      </div>

      {/* Top Section */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          stroke with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Our coaches will have you hitting dingers in no time. 
          <br />
          Feel free to upload your own tennis pics that can be seen on the website.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get scheduled...
        </Link>
      </div>

    </div>
  );
}
