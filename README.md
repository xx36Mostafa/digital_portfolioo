# Modern Portfolio Website

A professional, animated portfolio website built with HTML, CSS, and JavaScript. Perfect for developers, designers, and tech professionals.

## 🚀 Features

- **Modern Dark Theme** with gradient accents
- **Smooth Animations** using CSS and JavaScript
- **Fully Responsive** design (mobile, tablet, desktop)
- **Intersection Observer** for scroll-triggered animations
- **Typing Animation** effect
- **Glassmorphism** navigation bar
- **Animated Background** with floating gradient orbs
- **Timeline Layout** for experience section
- **Project Cards** with hover effects
- **Contact Section** with copy-to-clipboard functionality
- **Smooth Scrolling** navigation
- **Mobile Menu** with hamburger icon
- **Scroll to Top** button
- **SEO Optimized** with meta tags

## 📁 Project Structure

```
portfolio/
├── index.html
├── styles/
│   ├── globals.css
│   ├── navbar.css
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── experience.css
│   ├── projects.css
│   ├── contact.css
│   └── footer.css
├── js/
│   ├── data.js
│   ├── animations.js
│   └── main.js
└── README.md
```

## 🎨 Customization

### 1. Update Personal Information

Edit `js/data.js` and replace all placeholder data with your information:

```javascript
const portfolioData = {
    name: "Your Full Name",
    title: "Your Job Title",
    location: "Your City, Country",
    email: "your.email@example.com",
    phone: "+20 123 456 7890",
    // ... update all fields
};
```

### 2. Update Social Links

In `js/data.js`, update the social section:

```javascript
social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    whatsapp: "https://wa.me/yourphonenumber"
}
```

### 3. Add Your Skills

Update the skills array in `js/data.js`:

```javascript
skills: [
    {
        category: "Your Skill Category",
        icon: "🎯", // Use any emoji
        color: "#6366f1", // Hex color code
        technologies: ["Tech 1", "Tech 2", "Tech 3"]
    }
]
```

### 4. Add Your Experience

Update the experience array in `js/data.js`:

```javascript
experience: [
    {
        title: "Job Title",
        company: "Company Name",
        companyUrl: "https://company.com",
        location: "City, Country",
        startDate: "Jan 2020",
        endDate: "Present",
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
        ]
    }
]
```

### 5. Add Your Projects

Update the projects array in `js/data.js`:

```javascript
projects: [
    {
        title: "Project Name",
        description: "Project description",
        icon: "🚀", // Use any emoji
        color: "#6366f1",
        startDate: "Jan 2023",
        endDate: "Jun 2023",
        technologies: ["React", "Node.js"],
        link: "https://github.com/yourusername/project"
    }
]
```

### 6. Update Profile Image

Replace the placeholder image URL in `index.html`:

```html
<img src="your-image-url.jpg" alt="Profile Picture">
```

### 7. Update Education & Certifications

Edit the education section directly in `index.html` (around line 200).

## 🌐 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `yourusername.github.io` (replace with your GitHub username)
4. Make it public
5. Don't initialize with README

### Step 2: Upload Your Files

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at: `https://yourusername.github.io`

## 🎯 Color Customization

To change the color scheme, edit the CSS variables in `styles/globals.css`:

```css
:root {
    --primary-bg: #0a192f;        /* Main background */
    --secondary-bg: #112240;      /* Section background */
    --card-bg: #1e293b;           /* Card background */
    
    --primary-color: #6366f1;     /* Primary accent */
    --secondary-color: #8b5cf6;   /* Secondary accent */
    --accent-color: #ec4899;      /* Accent color */
    
    --text-primary: #ffffff;      /* Primary text */
    --text-secondary: #e2e8f0;    /* Secondary text */
    --text-muted: #94a3b8;        /* Muted text */
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter, Poppins)

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

If you need help customizing your portfolio, feel free to reach out!

---

**Made with ❤️ for developers**
