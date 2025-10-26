import React from 'react';
import { MapPin, Star } from 'lucide-react';

const studios = [
  {
    id: 1,
    title: 'Skylight Photo Loft',
    city: 'New York',
    price: 120,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Soundproof Recording Suite',
    city: 'Los Angeles',
    price: 95,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Minimal Daylight Studio',
    city: 'London',
    price: 110,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1505692794403-34d4982df21e?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Industrial Creative Space',
    city: 'Berlin',
    price: 85,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Boutique Podcast Room',
    city: 'Toronto',
    price: 70,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1517512006864-9d7745433e49?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Executive Meeting Studio',
    city: 'Dubai',
    price: 150,
    rating: 5.0,
    img: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b4?q=80&w=1600&auto=format&fit=crop'
  }
];

const Card = ({ studio }) => (
  <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
    <div className="relative h-48 w-full overflow-hidden">
      <img
        src={studio.img}
        alt={studio.title}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow">
        ${studio.price}/hr
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-gray-900">{studio.title}</h3>
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-amber-400" />
          <span className="text-xs font-medium text-gray-800">{studio.rating}</span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
        <MapPin className="h-4 w-4" /> {studio.city}
      </div>
      <button className="mt-4 w-full rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black">
        View details
      </button>
    </div>
  </div>
);

const FeaturedStudios = () => {
  return (
    <section id="featured" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Featured studios</h2>
          <p className="mt-1 text-sm text-gray-600">Handpicked spaces with exceptional light, acoustics, and amenities.</p>
        </div>
        <a href="#" className="text-sm font-medium text-gray-900 underline-offset-4 hover:underline">See all</a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studios.map((s) => (
          <Card key={s.id} studio={s} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedStudios;
