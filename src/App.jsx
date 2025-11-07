import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Instagram, Youtube, Mail, ChevronDown, Award, Users, Calendar } from 'lucide-react';
import img1 from './assets/img1.jpg'; 
import img2 from './assets/img2.jpg'; 
import img3 from './assets/img3.jpg'; 
import img4 from './assets/img4.jpg'; 
import img5 from './assets/img5.jpg'; 
import img6 from './assets/img6.jpg'; 
import img7 from './assets/img7.jpg'; 

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videos = [
    { id: 2, title: "CBSE Sahodaya Fest - 2025 : Kuchipudi", thumbnail: "https://youtu.be/jetz4x_CKrM?si=IG0uJj9Kep9f9F-O" },
    { id: 3, title: "CBSE Sahodaya Fest - 2025 : Mohiniyattam", thumbnail: "https://youtu.be/HO0_H4S3mgY?si=H9MRRRDk4F8bM0n_" },
    { id: 4, title: "CBSE Sahodaya Fest - 2023 : Kuchipudi", thumbnail: "https://youtu.be/JfGdZ7p5oBk?si=d0CvadcPGLt_V0Vs" },
    { id: 5, title: "Stage Performance - Bharathanatyam", thumbnail: "https://drive.google.com/file/d/1ue9Qc1nwlVsglW1yKSY4fLZShVdCjNpH/view?usp=sharing" },
    { id: 6, title: "Stage Performance - Thykatt Shivakshetram", thumbnail: "https://youtu.be/sKBEcJFamyc?si=Uf5GErVHQs5Otrvc" },
  ];

  const gallery = [
    img2, img3, img4, img5, img6, img7
  ];

  const achievements = [
    { icon: Award, title: "Sangeet Natak Akademi Recognition", year: "2023" },
    { icon: Users, title: "Principal Dancer - Kalakshetra Foundation", year: "2020" },
    { icon: Calendar, title: "International Festival Performances", year: "15+" },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 text-gray-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'videos', 'gallery'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`uppercase tracking-wider text-sm font-medium hover:text-orange-600 transition-colors ${activeSection === item ? 'text-orange-600' : 'text-gray-700'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md mt-4 pb-6 shadow-lg">
            {['home', 'about', 'videos', 'gallery'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-3 uppercase tracking-wider text-gray-700 hover:bg-orange-50 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-amber-100/40 to-red-100/60"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-9xl text-orange-800">ॐ</div>
          <div className="absolute bottom-20 right-10 text-9xl text-red-800">ॐ</div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 blur-2xl"></div>
              <img 
                src={img1} 
                alt="Bharatanatyam Dancer" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-800">
              Hi, I'm Varada Rajeevan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mt-2">
                Bharatanatyam Performer
              </span>
            </h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I am a Bharatanatyam performer, also trained in Mohiniyattam and Kuchipudi. 
                I have received my dance training from Nataraja Kalakshetra, Kakkanad, Kochi. 
                With over 12 years of dedicated learning, I have performed on numerous stages, 
                including renowned temples, school festivals, and cultural competitions such as Kalolsavam.
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-orange-700"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img 
              src={img3}
              alt="Bharatanatyam Performer" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a Bharatanatyam performer, also trained in Mohiniyattam and Kuchipudi. 
                I received my dance training from <span className="font-medium text-gray-800">Nataraja Kalakshetra, Kakkanad, Kochi under the guidance of Smt. RLV Ranjini Manoj</span>, 
                where I developed a strong foundation in classical dance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 12 years of dedicated learning, I have performed on numerous stages, 
                including renowned temples, school festivals, and cultural competitions such as Kalolsavam. 
                Through every performance, I aim to express devotion, grace, and the beauty of our cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-24 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Performance Videos
          </h2>
          <div className="space-y-4">
            {videos.map((video, idx) => (
              <a 
                key={video.id}
                href={video.thumbnail}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-white" fill="white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500">Click to watch performance</p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronDown size={24} className="text-orange-600 transform -rotate-90" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div 
                key={idx}
                className="relative overflow-hidden rounded-lg group cursor-pointer shadow-md h-[32rem]"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
     
    </div>
  );
}