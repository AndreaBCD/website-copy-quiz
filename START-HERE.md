# 🎯 Website Copy Roadmap Quiz - DEPLOYMENT GUIDE

## ✅ YOU'RE ALMOST THERE! Just 5 simple steps.

---

## 📦 WHAT'S IN THIS ZIP FILE?

- `index.html` - Your quiz homepage
- `main.jsx` - The quiz itself (all the logic)
- `style.css` - Basic styling
- `package.json` - Dependencies list
- `vite.config.js` - Build configuration
- `.github/workflows/deploy.yml` - Auto-deployment (this does the work for you!)
- `START-HERE.md` - This file!

---

## 🚀 HOW TO DEPLOY TO GITHUB PAGES (5 MINUTES)

### **STEP 1: Create a GitHub Account (if you don't have one)**

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the prompts (it's free!)

---

### **STEP 2: Create a New Repository**

1. Once logged in, click the **+** button (top right corner)
2. Click **"New repository"**
3. Name it: `website-copy-quiz` (exactly like this)
4. Make sure it's set to **Public**
5. **DO NOT** check "Add a README file"
6. Click **"Create repository"**

---

### **STEP 3: Upload Your Files**

You'll see an empty repository. Look for the section that says **"uploading an existing file"**.

1. Click **"uploading an existing file"**
2. Drag and drop **ALL** the files from this ZIP folder into the upload area
   - Make sure the `.github` folder uploads too!
3. Scroll down and click **"Commit changes"**

**✅ Your files are now on GitHub!**

---

### **STEP 4: Enable GitHub Pages**

1. In your repository, click **"Settings"** (top menu)
2. On the left sidebar, click **"Pages"**
3. Under **"Build and deployment"**:
   - Source: Select **"GitHub Actions"**
4. You're done with this step!

---

### **STEP 5: Wait for Deployment (2-3 minutes)**

1. Click the **"Actions"** tab at the top of your repository
2. You'll see a workflow running (yellow dot = building, green checkmark = done)
3. Once it's done (green ✅), go back to **Settings → Pages**
4. You'll see a link at the top that says **"Your site is live at..."**
5. Click that link!

**🎉 YOUR QUIZ IS NOW LIVE!**

---

## 🔗 YOUR QUIZ URL WILL BE:

```
https://[your-github-username].github.io/website-copy-quiz/
```

**Example:** If your GitHub username is `andrea123`, your quiz will be at:
```
https://andrea123.github.io/website-copy-quiz/
```

---

## 📝 IMPORTANT NOTES:

### **The quiz is set up to:**
- Automatically deploy when you upload files
- Work on mobile and desktop
- Collect email addresses (shown in the quiz, but not saved anywhere - you'd need to connect a form service like ConvertKit or Mailchimp for that)
- Show personalized results based on answers

### **Want to make changes later?**
1. Go to your GitHub repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down and click "Commit changes"
6. GitHub will automatically rebuild and redeploy (takes 2-3 minutes)

---

## ❓ TROUBLESHOOTING

**"I don't see my quiz after 5 minutes"**
- Go to Actions tab → Check if deployment succeeded (green checkmark)
- If there's a red X, click it to see the error
- Make sure ALL files uploaded (especially the `.github` folder)

**"The page is blank"**
- Clear your browser cache (Ctrl+Shift+R on PC, Cmd+Shift+R on Mac)
- Make sure you went to Settings → Pages and selected "GitHub Actions"

**"I need help!"**
- Email me! I'm here to help: [your email]
- Or reply to our last message

---

## 🎨 WANT TO CUSTOMIZE?

### **Change colors:**
Edit `main.jsx` and look for these color codes:
- `#F5F5F0` - Background color
- `#ADB98F` - Brand green
- `#333333` - Dark text
- `#555555` - Body text

### **Change questions:**
Edit `main.jsx` and find the `questions` array (around line 10)

### **Change recommendations:**
Edit `main.jsx` and find the `getRecommendations()` function (around line 120)

---

## 📧 WANT TO CONNECT EMAIL COLLECTION?

The quiz currently shows the results on-screen. To actually collect emails, you'll need to:

1. Sign up for a service like:
   - ConvertKit (free up to 1,000 subscribers)
   - Mailchimp (free up to 500 subscribers)
   - Drip, ActiveCampaign, etc.

2. Get your API key from that service

3. Let me know and I can help you connect it!

---

## ✅ NEXT STEPS AFTER DEPLOYMENT:

1. ✅ Test your quiz on mobile and desktop
2. ✅ Share the link on Instagram, in your bio, etc.
3. ✅ Update the booking link in the quiz results (currently goes to Moxie)
4. ✅ Connect email collection if you want to capture leads

---

## 🎉 YOU DID IT!

Your quiz is live and ready to help your potential clients discover which website package they need!

**Questions? Stuck somewhere? Just reach out - I've got you!**

---

**Created by:** Breathe Create Design  
**Your Designer:** Andrea Botha  
**Last Updated:** October 27, 2025
