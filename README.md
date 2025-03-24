# Megan & Juan's Wedding Website

A modern, responsive wedding website built with Next.js, featuring details about the ceremony, dinner menu, photo gallery, and gift registry information.

## Features

- 📅 Event Details
  - Ceremony information
  - Reception dinner details
  - Interactive Google Maps integration
  - Virtual attendance information

- 🖼️ Photo & Video Gallery
  - Interactive lightbox viewer
  - Image zoom capabilities
  - Video playback support
  - Thumbnail navigation

- 🎵 Spotify Integration
  - Embedded playlist player
  - Fixed position for continuous playback

## Tech Stack

### Frontend
- **Framework**: Next.js 13.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Gallery**: yet-another-react-lightbox

## Adding Photos and Videos

### Photo Requirements
- Format: JPG/JPEG
- Location: `public/gallery/`
- Recommended size: 1200px width minimum
- Aspect ratio: Square (1:1) recommended for grid layout

### Video Requirements
- Format: MP4
- Location: `public/gallery/`
- Thumbnail: JPG with same filename as video
- Recommended resolution: 1280x720 (720p) or higher

### Steps to Add Media

1. **Prepare Media Files**
   - Resize and optimize photos
   - Convert videos to MP4 format
   - Create video thumbnails

2. **Add Files to Project**
   - Place photos in `public/gallery/`
   - Place videos in `public/gallery/`
   - Place video thumbnails in `public/gallery/`

3. **Update Media Array**
   In `app/page.tsx`, locate the `mediaFiles` array and add new entries:

   ```typescript
   const mediaFiles = [
     // For images:
     { type: 'image', file: 'your_image_filename' },
     
     // For videos:
     { type: 'video', file: 'your_video_filename' }
   ];
   ```

   Note: Don't include file extensions in the filename.

### Example

```typescript
// Adding a new photo named "wedding_photo.jpg"
{ type: 'image', file: 'wedding_photo' }

// Adding a new video named "first_dance.mp4" (with first_dance.jpg thumbnail)
{ type: 'video', file: 'first_dance' }
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
wedding-website/
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main page
├── public/
│   └── gallery/          # Media files
└── package.json          # Project dependencies
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- Touch-enabled gallery navigation

## Authors

Megan Gavitt & Juan Partida