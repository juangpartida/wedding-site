'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Video from "yet-another-react-lightbox/plugins/video";
import type { Slide } from "yet-another-react-lightbox";

export default function Home() {
  const [activeSection, setActiveSection] = useState('details');
  const [mounted, setMounted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mediaFiles = [
    { type: 'image', file: 'IMG_1464' },
    { type: 'image', file: 'IMG_6708' },
    { type: 'image', file: 'IMG_8328' },
    { type: 'image', file: 'IMG_7235' },
    { type: 'image', file: 'IMG_7216' },
    { type: 'image', file: 'IMG_7668' },
    { type: 'image', file: 'IMG_8388' },
    { type: 'image', file: 'IMG_6185' },
    { type: 'image', file: 'IMG_4454' },
    { type: 'image', file: 'IMG_8357' },
    { type: 'image', file: 'IMG_8390' },
    { type: 'image', file: 'IMG_6330' },
    { type: 'image', file: 'IMG_4272' },
    { type: 'image', file: 'IMG_6924' },
    { type: 'image', file: 'IMG_6148' },
    { type: 'image', file: 'IMG_6978' },
    { type: 'image', file: 'covidagain' },
    { type: 'image', file: 'ocsc' },
    { type: 'image', file: 'lavenderfields' },
    { type: 'image', file: 'meganandjuancovid' },
    { type: 'image', file: 'meganandjuanSD' },
    { type: 'image', file: 'megjuancat' },
    { type: 'video', file: 'juanandmeg' }
  ];

  const slides: Slide[] = mediaFiles.map(media => {
    if (media.type === 'video') {
      return {
        type: "video",
        width: 1280,
        height: 720,
        poster: `/gallery/${media.file}.jpg`,
        sources: [
          {
            src: `/gallery/${media.file}.mp4`,
            type: "video/mp4"
          }
        ]
      };
    }
    return {
      type: "image",
      src: `/gallery/${media.file}.jpg`,
      alt: media.file,
    };
  });

  const openInGoogleMaps = (location: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Fixed Spotify Player */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg p-2">
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/playlist/14VD9GZ28bQbBNEzrf81Fm?utm_source=generator" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Megan & Juan&apos;s Wedding</h1>
          <p className="text-xl text-purple-600">April 1st, 2025</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button 
            onClick={() => setActiveSection('details')}
            className={`px-4 py-2 rounded ${activeSection === 'details' ? 'bg-purple-200' : 'bg-purple-100'}`}
          >
            Details
          </button>
          <button 
            onClick={() => setActiveSection('menu')}
            className={`px-4 py-2 rounded ${activeSection === 'menu' ? 'bg-purple-200' : 'bg-purple-100'}`}
          >
            Dinner Menu
          </button>
          <button 
            onClick={() => setActiveSection('gallery')}
            className={`px-4 py-2 rounded ${activeSection === 'gallery' ? 'bg-purple-200' : 'bg-purple-100'}`}
          >
            Gallery
          </button>
          <button 
            onClick={() => setActiveSection('fund')}
            className={`px-4 py-2 rounded ${activeSection === 'fund' ? 'bg-purple-200' : 'bg-purple-100'}`}
          >
            Honeymoon & Home Fund
          </button>
        </div>

        {/* Details Section */}
        {activeSection === 'details' && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-8 text-center">
              {/* Date and Time Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Date and Time</h3>
                <p className="text-lg">April 1st, 2025 at 2:00 PM</p>
                <p className="text-gray-600 mt-2">Please arrive 15-30 minutes early</p>
                <p className="text-gray-600">Ceremony duration: Approximately 30 minutes</p>
              </div>

              {/* Attire Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Attire</h3>
                <p className="text-lg">Smart Casual</p>
              </div>

              {/* Virtual Attendance Section */}
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Virtual Attendance</h3>
                <p className="text-gray-700 mb-4">
                  For those unable to attend in person, you can join us virtually through Zoom.
                  Meeting details will be provided closer to the date.
                </p>
                <div className="space-y-2">
                  <p><strong>Meeting ID:</strong> TBD</p>
                  <p><strong>Passcode:</strong> TBD</p>
                </div>
              </div>

              {/* Location Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Ceremony Location</h3>
                <p className="text-lg">Anaheim City Centre</p>
                <p>222 S. Harbor Blvd., Ste. 110</p>
                <p className="mb-4">Anaheim, CA 92805</p>
                <button 
                  onClick={() => openInGoogleMaps('222 S. Harbor Blvd., Ste. 110, Anaheim, CA 92805')}
                  className="px-4 py-2 bg-purple-100 hover:bg-purple-200 rounded text-purple-800 transition-colors"
                >
                  Get Directions
                </button>
              </div>

              {/* Reception Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Reception Dinner</h3>
                <p className="text-lg">Bucca di Beppo</p>
                <p>11757 Harbor Blvd</p>
                <p>Garden Grove, CA 92840</p>
                <p className="mb-4">Time: 4:45 PM</p>
                <button 
                  onClick={() => openInGoogleMaps('11757 Harbor Blvd, Garden Grove, CA 92840')}
                  className="px-4 py-2 bg-purple-100 hover:bg-purple-200 rounded text-purple-800 transition-colors"
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Menu Section */}
        {activeSection === 'menu' && (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-6">Dinner Menu</h2>
            
            <div className="menu-section">
              <h3>Appetizers (1)</h3>
              <div className="menu-item">Garlic Bread</div>
            </div>

            <div className="menu-section">
              <h3>Salads (2)</h3>
              <p className="italic mb-2">Served with Fresh-Baked Bread</p>
              <div className="menu-item">Caesar</div>
              <div className="menu-item">Chopped Antipasti</div>
            </div>

            <div className="menu-section">
              <h3>Pastas (2)</h3>
              <div className="menu-item">Spaghetti Marinara</div>
              <div className="menu-item">Baked Rigatoni</div>
            </div>

            <div className="menu-section">
              <h3>Entrées (1)</h3>
              <div className="menu-item">Chicken Parmigiana</div>
            </div>

            <div className="menu-section">
              <h3>Desserts (2)</h3>
              <div className="menu-item">Cheesecake</div>
              <div className="menu-item">Chocolate Cake</div>
            </div>

            <div className="menu-section">
              <h3>Beverages</h3>
              <div className="menu-item">Unlimited Soft Drinks, Coffee & Tea</div>
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {activeSection === 'gallery' && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">Photo & Video Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mediaFiles.map((media, index) => (
                <div 
                  key={index} 
                  className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  {media.type === 'video' ? (
                    <>
                      <Image
                        src={`/gallery/${media.file}.jpg`}
                        alt="Video thumbnail"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        priority={index < 6}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l8-5-8-5z"/>
                        </svg>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={`/gallery/${media.file}.jpg`}
                      alt={`Photo ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      priority={index < 6}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Lightbox */}
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={slides}
              plugins={[Zoom, Thumbnails, Video]}
              animation={{ zoom: 500 }}
              zoom={{
                maxZoomPixelRatio: 3,
                scrollToZoom: true,
              }}
            />
          </div>
        )}

        {/* Honeymoon & Home Fund Section */}
        {activeSection === 'fund' && (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-6">Honeymoon & Home Fund</h2>
            <p className="text-lg mb-8">
              Your presence is the greatest gift of all!<br/>
              If you&apos;d like to contribute to our Honeymoon & Home Fund, we&apos;d be so grateful as we plan for our first adventures and future together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Venmo</h3>
                <p className="text-lg">@Juan-Partida</p>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Zelle</h3>
                <p className="text-lg">714-925-6397</p>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Apple Pay</h3>
                <p className="text-lg">714-925-6397</p>
              </div>
            </div>
          </div>
        )}

        {/* Add padding at the bottom for the Spotify player */}
        <div className="h-24"></div>
      </div>
    </main>
  );
}