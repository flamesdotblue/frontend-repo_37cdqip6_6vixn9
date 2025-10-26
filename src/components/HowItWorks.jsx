import React from 'react';
import { Search, CalendarCheck, ShieldCheck } from 'lucide-react';

const Step = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">How it works</h2>
        <p className="mt-2 text-sm text-gray-600">Book a studio in three simple steps.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Step
          icon={Search}
          title="Discover spaces"
          desc="Browse curated studios with real photos, detailed specs, and transparent pricing."
        />
        <Step
          icon={CalendarCheck}
          title="Pick your schedule"
          desc="Choose an available date and time that fits your production timeline."
        />
        <Step
          icon={ShieldCheck}
          title="Book with confidence"
          desc="Secure checkout, instant confirmation, and dedicated support for every booking."
        />
      </div>
    </section>
  );
};

export default HowItWorks;
