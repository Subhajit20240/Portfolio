# Contact Form Setup Guide (Formspree)

This guide will help you configure the contact form to send submissions to your Gmail account (subhajitmon01@gmail.com).

We're using **Formspree** - it's completely free, requires NO npm packages, and works instantly!

## Step 1: Create Formspree Account

1. Go to [Formspree.io](https://formspree.io/)
2. Click **Get Started**
3. Sign up with your email (you can use subhajitmon01@gmail.com)
4. Verify your email

## Step 2: Create a New Form

1. After logging in, click **Create** or **New Project**
2. Name it: `Portfolio Contact Form`
3. For "Choose where to send emails:", select **subhajitmon01@gmail.com** (or add it)
4. Click **Create Form**

## Step 3: Get Your Form Endpoint

1. You'll see a form endpoint that looks like: `https://formspree.io/f/mxxxxxxxxx`
2. Copy this entire endpoint (including the form ID part)

## Step 4: Update App.jsx

In `src/App.jsx`, find this line (around line 95):

```javascript
const response = await fetch('https://formspree.io/f/mzbnlnky', {
```

Replace `mzbnlnky` with YOUR form ID from Step 3.

For example, if your endpoint is `https://formspree.io/f/mabcdefgh`, change it to:

```javascript
const response = await fetch('https://formspree.io/f/mabcdefgh', {
```

## Step 5: Test It!

1. Start your dev server: `npm run dev`
2. Scroll to the **Contact** section
3. Fill out the form and submit
4. You should receive an email at subhajitmon01@gmail.com within seconds!

That's it! No complicated setup, no API keys to manage.

## Features

✅ Free (no credit card needed)  
✅ No backend required  
✅ Emails go directly to your Gmail  
✅ Can see submissions on Formspree dashboard too  
✅ Spam filtering included  
✅ Up to 50 submissions/month on free tier

## Troubleshooting

**Form not submitting?**

- Make sure you copied the complete endpoint with the form ID
- Check that you're using the correct email for Formspree account

**Not receiving emails?**

- Check spam/promotions folder in Gmail
- Verify the email address in Formspree dashboard
- Try submitting again

**Want unlimited submissions?**

- Upgrade to Formspree Pro (very affordable)

For more help: [Formspree Docs](https://formspree.io/help/)
