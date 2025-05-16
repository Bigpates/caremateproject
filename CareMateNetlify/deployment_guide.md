# CareMate Chat - Deployment Guide

This guide provides instructions for deploying the CareMate chat interface to Netlify and embedding it in Webflow.

## Files Included

- `index.html` - The main HTML file with Tailwind CSS via CDN
- `app.js` - Vanilla JavaScript for chat functionality
- `netlify.toml` - Configuration file for Netlify deployment

## Deploying to Netlify

### Option 1: Drag and Drop Deployment

1. Go to [Netlify](https://app.netlify.com/)
2. Log in or create an account
3. Drag and drop the entire folder containing these files onto the Netlify dashboard
4. Netlify will automatically detect the `netlify.toml` configuration and deploy your site
5. Once deployed, you'll receive a unique URL for your site

### Option 2: GitHub Deployment

1. Create a new GitHub repository
2. Upload these files to your repository
3. Log in to [Netlify](https://app.netlify.com/)
4. Click "New site from Git"
5. Select GitHub and choose your repository
6. Netlify will automatically detect the `netlify.toml` configuration
7. Click "Deploy site"

## Embedding in Webflow

### Method 1: Embed Code Block

1. In your Webflow project, add an "Embed" element to your page
2. Paste the following HTML code:

```html
<div style="width: 100%; height: 600px; max-width: 1024px; margin: 0 auto;">
  <iframe 
    src="YOUR_NETLIFY_URL" 
    style="width: 100%; height: 100%; border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);" 
    title="CareMate Chat"
  ></iframe>
</div>
```

3. Replace `YOUR_NETLIFY_URL` with the URL of your Netlify deployment
4. Publish your Webflow site

### Method 2: Direct Code Embedding

If you prefer to embed the code directly in Webflow without using Netlify:

1. In your Webflow project, add an "Embed" element to your page
2. Copy the entire content of `index.html` and paste it into the embed element
3. In a second "Embed" element, add the following:

```html
<script>
  // Paste the entire content of app.js here
</script>
```

4. Replace the comment with the content of `app.js`
5. Publish your Webflow site

## Customization

### Changing Colors

The Tailwind configuration in `index.html` can be modified to change the color scheme:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#00D88D',    // Change this for the main color
                secondary: '#4BE3E3',  // Change this for the secondary color
                dark: '#0A0A0A',       // Change this for the background
                'dark-light': '#1a1a1a',
                'dark-border': '#2a2a2a',
                'text-light': '#B0B0B0'
            }
        }
    }
}
```

### Modifying AI Responses

To change the simulated AI responses, edit the `aiResponses` array in `app.js`:

```javascript
const aiResponses = [
    "Your custom response here",
    "Another custom response",
    // Add more responses as needed
];
```

## Backend Integration

The `netlify.toml` file includes a redirect rule to a backend API. If you have your own backend:

1. Replace `https://caremate-ai-backend-ts67450.replit.app/` in the `netlify.toml` file with your API URL
2. Modify the `app.js` file to make actual API calls instead of using simulated responses

## Support

For any questions or issues, please refer to the documentation or contact the development team.
