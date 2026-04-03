# Industrial Machinery Marketplace

A professional, zero-brokerage platform for buying and selling industrial machinery. Built with modern HTML, CSS, and vanilla JavaScript.

## 🚀 Features

- **Multi-Step Form**: Comprehensive machinery listing process
- **Industrial Design**: Clean slate gray and orange aesthetic
- **Location-Based Search**: Hierarchical state/city dropdowns
- **File Upload**: Support for photos (JPG/PNG) and videos (MP4)
- **Responsive Design**: Works seamlessly on all devices
- **Zero-Brokerage Model**: Direct buyer-seller connections

## 📁 Project Structure

```
trial-frontend/
├── index.html              # Main landing page
├── package.json            # Project configuration
├── vercel.json             # Vercel deployment config
├── README.md               # This file
├── css/
│   └── style.css           # Global styles
├── js/
│   └── script.js           # Main JavaScript functionality
└── pages/
    ├── add-machinery.html  # Add new machinery form
    └── add-product.html    # Legacy product form
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **Vanilla JavaScript**: No framework dependencies
- **Responsive Design**: Mobile-first approach

## 🚀 Deployment

This project is configured for Vercel deployment:

### Automatic Deployment
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically detect and deploy the project

### Manual Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

## 🎨 Design System

### Colors
- **Slate Gray**: `#2c3e50` (Primary)
- **Industrial Orange**: `#e67e22` (Accent)
- **White**: `#ffffff` (Background)
- **Light Gray**: `#ecf0f1` (Secondary)

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold weights with clear hierarchy
- **Body**: Clean, readable text at 16px base

## 📱 Features Overview

### Add Machinery Form
- **Step 1**: Basic Information (title, category, brand, model)
- **Step 2**: Technical Specifications (year, condition, price, specs)
- **Step 3**: Location Details (state, city, address, pincode)
- **Step 4**: Media Upload (photos, videos, YouTube links)

### Location System
- 10 major Indian states
- Dynamic city population
- Complete address validation

### File Upload
- **Photos**: JPG/PNG up to 5MB
- **Videos**: MP4 up to 50MB
- **Drag & Drop**: Modern upload interface
- **Preview**: File management with remove options

## 🔧 Configuration

### Vercel Configuration
The `vercel.json` file handles:
- Static file serving
- Route configuration
- Clean URLs
- Build settings

### Environment Variables
No environment variables required for this static site.

## 📊 Performance

- **Load Speed**: Optimized for fast loading
- **Mobile Performance**: Responsive and touch-friendly
- **SEO**: Semantic HTML and proper meta tags
- **Accessibility**: ARIA labels and keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for commercial or personal use.

## 📞 Support

For deployment issues or questions:
- **Email**: support@industrymarketplace.com
- **Phone**: 1800-XXX-XXXX
- **Hours**: Mon-Sat, 9AM-6PM IST

---

**Built with ❤️ for the Industrial Community**
