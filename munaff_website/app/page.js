"use client"
import Header from '../components/Header';
import About from './about/page';
import Appointment from './appointment/page';
import Contact from './contact/page';
import Services from './services/page';

export default function Home() {
  return (
    <div>
      <Header />
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Munaf</h1>
      </section>
      <About />
      <Services />
      <Appointment />
      <Contact />
    </div>
  );
}
