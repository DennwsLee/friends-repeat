# AI Companion

<div align="center">
  <img src="https://github.com/kaifcoder/ai-companion/assets/57701861/46b3c7d7-90db-48af-af51-1867ffe89ad1" height="60" width="60"/>
  <p>A Character.AI clone that lets you create and chat with customized AI companions</p>
</div>

## Overview

AI Companion is a full-stack web application that allows users to create and interact with AI personalities. Similar to Character.AI, you can design companions with unique traits, backstories, and behaviors. Each companion maintains consistent personality and context throughout conversations.

## Key Features

- **Custom AI Companions**: Create and customize AI personalities with unique traits
- **Natural Conversations**: Engage in fluid, context-aware dialogues
- **Multiple Categories**: Browse companions across various categories
- **Authentication**: Secure login via GitHub or Google
- **Pro Subscription**: Access premium features including companion creation
- **Responsive Design**: Modern UI that works across all devices
- **Theme Support**: Dark and light mode options
- **Real-time Chat**: Instant message updates and responses
- **Message History**: Persistent chat history for each companion
- **Image Generation**: AI-powered avatar creation for companions

## Tech Stack

- **Frontend**: Next.js 13, React, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL
- **AI Integration**: OpenAI API, Replicate API
- **Authentication**: Clerk
- **Payment Processing**: Stripe
- **Cloud Storage**: Cloudinary
- **Deployment**: Vercel

## Prerequisites

- Node.js 16+ 
- PostgreSQL database
- OpenAI API key
- Replicate API token
- Clerk account
- Stripe account (for payments)
- Cloudinary account (for image storage)

## Usage Guide

1. Visit https://ai-companion-kaifcoder.vercel.app/
2. Sign up using GitHub or Google authentication
3. Browse available companions or upgrade to Pro to create custom ones
4. Select a companion to start chatting
5. Interact naturally through the chat interface
6. For Pro users:
   - Create custom companions
   - Define personality traits
   - Set conversation parameters
   - Upload custom avatars

## Creating a Companion

Pro users can create companions by providing:
- Name and description
- Personality traits and backstory
- Example conversations
- Custom avatar image
- Category selection
- Behavioral instructions (minimum 200 characters)

## Deployment

The application is deployed on Vercel. For custom deployment:

1. Fork this repository
2. Set up required environment variables
3. Connect your Vercel account
4. Deploy with the Vercel CLI or GitHub integration

## Screenshots

![Dashboard View](https://github.com/kaifcoder/ai-companion/assets/57701861/cdad55b8-42c7-4429-9344-be91b515df11)
<img width="816" alt="Chat Interface" src="https://github.com/kaifcoder/ai-companion/assets/57701861/9e7a8a05-87cf-4cf5-a00d-10ea0d99b597">

## API Structure

The application uses several data models:
- Categories for organizing companions
- Companions with detailed personality traits
- Messages for conversation history
- User subscriptions for pro features

## Disclaimer

AI Companion is a prototype application using OpenAI's API & Replicate API. It is not affiliated with Character.AI, OpenAI, or Microsoft. The application is for demonstration purposes only and does not guarantee response accuracy or availability. Service may be interrupted due to API limitations or technical issues.

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Support

For support, questions, or feedback:
- Email: kaifmohd2014@gmail.com
- Create an issue in the repository
- Join our community discussions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Character.AI for inspiration
- OpenAI for their powerful API
- Replicate for image generation
- All contributors and users of the platform