# Portfolio Data Configuration Guide

## 📝 How to Update Your Portfolio Information

All your portfolio content is centralized in one file for easy updates:

**File Location:** `/app/frontend/src/data/portfolioData.js`

---

## 🔧 What You Can Edit

### 1. **Personal Information**
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  subtitle: "Your Tagline",
  location: "Your Location",
  email: "your.email@example.com",
  bio: [
    "First paragraph about you",
    "Second paragraph",
    "Third paragraph"
  ]
};
```

### 2. **Social Links**
```javascript
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github"  // Don't change this
  },
  // Add more social links...
];
```

### 3. **Skills**
```javascript
export const skills = {
  technical: ["Python", "React", "LangChain", ...],
  tools: ["Git", "Docker", "AWS", ...]
};
```

### 4. **Experience**
```javascript
export const experiences = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "Start Date - End Date",
    description: "What you did...",
    skills: ["Skill 1", "Skill 2", ...],
    icon: "Briefcase",  // Options: "Briefcase", "GraduationCap"
    color: "from-blue-500 to-cyan-500"  // Tailwind gradient
  }
];
```

### 5. **Projects**
```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    image: "https://image-url.com/image.jpg",
    tags: ["React", "Python", ...],
    category: "GenAI",  // Options: "GenAI", "Full Stack", "Hackathons"
    github: "https://github.com/yourusername/project",
    demo: "https://demo-link.com"
  }
];
```

### 6. **Achievements**
```javascript
export const achievements = [
  {
    title: "Achievement Title",
    description: "Short description",
    icon: "Trophy",  // Options: "Trophy", "Award", "Code", "Zap"
    color: "from-yellow-400 to-orange-500"
  }
];
```

### 7. **Contact Info**
```javascript
export const contactInfo = {
  title: "Get In Touch",
  subtitle: "Your contact subtitle",
  description: "Contact description..."
};
```

### 8. **Resume**
```javascript
export const resumeUrl = "/resume.pdf";
```
- Place your resume PDF in `/app/frontend/public/resume.pdf`

---

## 🎨 Available Icons

**Experience Icons:**
- `Briefcase` - For jobs/internships
- `GraduationCap` - For education/training

**Achievement Icons:**
- `Trophy` - For competitions/awards
- `Award` - For certifications
- `Code` - For coding achievements
- `Zap` - For performance/impact

---

## 🌈 Gradient Colors

Use Tailwind gradient classes for experience and achievement cards:

**Examples:**
- `from-blue-500 to-cyan-500` (Blue to Cyan)
- `from-indigo-500 to-purple-500` (Indigo to Purple)
- `from-yellow-400 to-orange-500` (Yellow to Orange)
- `from-green-400 to-emerald-500` (Green to Emerald)

See all colors: https://tailwindcss.com/docs/customizing-colors

---

## 📸 Adding Images

**For Projects:**
1. Use image URLs from Unsplash, Pexels, or your own hosting
2. Replace the `image` field in project objects

**For Resume:**
1. Place your PDF in `/app/frontend/public/` folder
2. Name it `resume.pdf` or update `resumeUrl` in the data file

---

## ✅ After Making Changes

The website will automatically update! Just:
1. Edit `/app/frontend/src/data/portfolioData.js`
2. Save the file
3. The changes will appear immediately (hot reload)

---

## 💡 Tips

- Keep descriptions concise and impactful
- Use high-quality images for projects
- Update social links with your actual profiles
- Add real GitHub/demo links for projects
- Keep skill lists focused on your strongest areas

---

## 🚀 Need Help?

If you want to add more sections or customize further, you can:
1. Add new fields to the data file
2. Update the corresponding component to use the new data
3. All components are in `/app/frontend/src/components/`
