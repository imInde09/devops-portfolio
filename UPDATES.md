# DevOps Portfolio - Latest Updates

## ✅ Updates Completed (Latest Iteration)

### 1. **Clickable Certificate Links** ✨
- All 7 certificates are now **clickable links** that redirect to verification websites
- Each certificate card shows:
  - **External link icon** (top right) indicating it's clickable
  - **Hover effects**: Border changes to green, title changes color
  - **Issue and Expiration dates**

**Certificate URLs to Update:**
```javascript
// In src/app/page.tsx, update these URLs with your actual credentials:

1. Snowflake SnowPro Core
   url: "https://verify.snowflakeu.com" → Update with your verification URL

2. AWS Certified Cloud Practitioner
   url: "https://www.credly.com/badges/your-aws-badge-id" → Update with your badge URL

3. Google Cloud Certified Associate Cloud Engineer
   url: "https://www.credential.net/your-google-cloud-badge" → Update with your badge URL

4. Oracle Cloud Infrastructure Foundations Associate
   url: "https://www.credly.com/badges/your-oracle-badge-id" → Update with your badge URL

5. Oracle Cloud Infrastructure AI Foundations Associate
   url: "https://www.credly.com/badges/your-oracle-ai-badge-id" → Update with your badge URL

6. Microsoft Certified: Azure Fundamentals ✅ (Already set!)
   url: "https://learn.microsoft.com/en-us/users/prathameshomprakashinde-9834/credentials/b415794285445557"

7. GitHub Foundations
   url: "https://www.credly.com/badges/your-github-badge-id" → Update with your badge URL
```

### 2. **Tech Stack & Tools - Horizontal Scrolling by Category** ✨
**Changes Made:**
- ✅ Removed the "Organized by Category" grid layout
- ✅ Added **horizontal scrolling sections** for each category
- ✅ Each category shows tools in a scrollable row
- ✅ Individual tech tools are larger and more prominent
- ✅ Smooth scroll with hidden scrollbar (no ugly scrollbar visible)
- ✅ Each tool card has hover effects (scale up, glow effect)

**How to Use:**
- Scroll horizontally within each category to see all tools
- Responsive design: Works on mobile, tablet, and desktop
- Categories included:
  - CI/CD
  - Containers
  - IaC (Infrastructure as Code)
  - Development
  - Cloud
  - Monitoring
  - GitOps
  - Security
  - Programming
  - Scripting

### 3. **Profile Image - Now Working!** ✨
**Issue Fixed:**
- Profile image (`/profile.jpg`) now displays correctly in the hero section
- Image is on the left side, responsive sizing
- Smaller on mobile, larger on desktop
- Beautiful border with neon green glow effect
- Overlay gradient for visual appeal

**To Add Your Photo:**
1. Replace the existing `/public/profile.jpg` with your photo
2. Recommended specs:
   - Size: 400x400px or higher
   - Format: JPG, PNG, or WebP
   - Aspect ratio: Square (1:1) preferred
   - File should be at: `devops-portfolio/public/profile.jpg`

### 4. **Tech Tool Icons**
**Current Implementation:**
- Each tool shows a colored badge with 2-letter abbreviation (K8s, DK, TF, etc.)
- Gradients: Green to Cyan
- Interactive hover effects with scale animation

**If You Want Real Icons:**
Option A: Use emoji/SVG icons (simple approach)
Option B: Install icon libraries like:
- `npm install react-icons` (FontAwesome, Heroicons, etc.)
- `npm install lucide-react` (already using this)
- Add custom SVG icons in `/public/icons/`

Let me know if you'd like to upgrade to real icons!

---

## 🎯 How to Update Certificate URLs

**Quick Steps:**
1. Open `src/app/page.tsx`
2. Find the `certifications` array (around line 128)
3. For each certificate, update the `url` field with your actual verification link
4. Save and the changes will reflect immediately in dev mode

**Where to Find Your Verification URLs:**
- **AWS**: https://www.credly.com (search for your certificate)
- **Google Cloud**: https://www.credential.net
- **Oracle**: https://www.credly.com
- **Snowflake**: Snowflake's verification portal
- **GitHub**: GitHub's credential verification site
- **Microsoft Azure**: Already configured! ✅

---

## 🚀 Live Features

Your portfolio now includes:

✅ Clickable certificate links with external link indicators  
✅ Horizontal scrolling tech stack by category  
✅ Profile image displaying correctly  
✅ Responsive design (mobile, tablet, desktop)  
✅ Smooth animations and transitions  
✅ Dark theme with neon accents  
✅ Glass-morphism UI elements  
✅ Interactive components  

---

## 📝 Next Steps (Optional Enhancements)

1. **Add Real Tech Icons**: Install `react-icons` for professional-looking icons
2. **Add Social Links**: Update LinkedIn, GitHub, Twitter links in contact section
3. **Add Projects**: Update the projects section with your real projects
4. **Custom Domain**: Deploy to Vercel and use a custom domain
5. **Analytics**: Add Google Analytics to track visitors

---

## 🔧 File Structure

```
devops-portfolio/
├── src/
│   └── app/
│       ├── page.tsx          ← Main file with all content
│       ├── layout.tsx
│       └── globals.css       ← CSS animations and utilities
├── public/
│   └── profile.jpg           ← Your profile photo (already added! ✅)
└── next.config.ts
```

---

## ✨ Quick Copy-Paste for Credential URLs

Get your credential links from:

**AWS Cloud Practitioner:**
```
https://www.credly.com/badges/[your-badge-id]
```

**Google Cloud:**
```
https://www.credential.net/[your-badge-code]
```

**Oracle OCI:**
```
https://www.credly.com/badges/[your-badge-id]
```

Happy updating! 🚀
