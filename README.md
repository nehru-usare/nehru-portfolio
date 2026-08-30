# Nehru Usare - Senior Backend Engineer Portfolio

A modern, high-converting personal developer portfolio website for Nehru Usare, a Senior Backend Software Engineer specializing in Java, Spring Boot, Apache Kafka, and distributed systems.

## 🚀 Features

- **Modern Design**: Dark mode with emerald and blue accents for a developer-focused aesthetic
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Subtle animations using Framer Motion for enhanced user experience
- **Component-Based**: Modular React components for easy maintenance and scalability
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Fully typed codebase for better development experience

## 📋 Sections

1. **Navigation** - Sticky header with smooth scroll navigation
2. **Hero** - Eye-catching headline with tech stack pills and CTAs
3. **About** - Comprehensive bio with key statistics
4. **Skills** - Categorized technical skills with visual icons
5. **Projects** - Featured case studies with problem-solution-impact format
6. **Experience** - Professional timeline with detailed descriptions
7. **Contact** - Contact form and social media links
8. **Footer** - Quick navigation and social links

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React 0.294](https://lucide.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## 📦 Installation

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Steps

1. **Clone or Extract the Project**
   ```bash
   cd e:\NEHRU_PORTFOLIO
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔨 Build Commands

- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build` - Create production build
- **Start**: `npm start` - Run production server
- **Lint**: `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── (api/routes)        # Optional API routes
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills matrix
│   ├── Projects.tsx        # Featured projects
│   ├── Experience.tsx      # Experience timeline
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer section
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Customization

### Update Personal Information
Edit the following components to add your content:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section
- `src/components/Projects.tsx` - Your projects
- `src/components/Experience.tsx` - Your experience

### Change Colors
Update the color scheme in `tailwind.config.ts`:
- Modify the `colors` section for emerald, blue tones
- Update `gradient-text`, `glass-effect` utilities in `src/app/globals.css`

### Update Contact Information
Edit `src/components/Contact.tsx` to add your:
- Email address
- LinkedIn profile URL
- GitHub profile URL
- Location

## 🚀 Deployment

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel automatically detects Next.js and deploys

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Similar process to Netlify
- **Docker**: Create a Dockerfile for containerized deployment

## 📝 Environment Variables

Create a `.env.local` file (already in .gitignore):
```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🔍 SEO

The portfolio includes:
- Meta tags and Open Graph optimization
- Twitter Card support
- Structured metadata
- Responsive images

Update the metadata in `src/app/layout.tsx`:
- Site title and description
- OG image URL
- Keywords

## 📱 Responsive Design

- **Mobile**: Optimized for small screens (320px+)
- **Tablet**: Adjusted layouts for medium screens (768px+)
- **Desktop**: Full experience on large screens (1024px+)

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- High contrast color ratios

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Performance**: Use Next.js Image component for optimization
2. **Analytics**: Add Vercel Analytics or Google Analytics
3. **Forms**: Consider services like FormSubmit or Formspree for contact forms
4. **Sitemap**: Generate with `next-sitemap` for better SEO
5. **Dark Mode**: Already implemented with Tailwind CSS

## 🤝 Contributing

Feel free to customize and extend this portfolio template for your own use.

## 📞 Support

For issues or questions about Next.js, Tailwind CSS, or Framer Motion, refer to their official documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

**Made with ❤️ for Nehru Usare**
