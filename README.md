
# ClipGenius AI

Effortless, AI-powered video editing and clipping.

## Project Structure

```
ClipGenius-AI/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── public_html/         # Production build output
├── .env.example
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── LICENSE
```

## Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/DarkGemini256/ClipGenuis-AI.git
   cd ClipGenuis-AI
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` and fill in your keys:
     ```sh
     cp .env.example .env
     ```

4. **Run the development server**
   ```sh
   npm run dev
   ```

5. **Build for production**
   ```sh
   npm run build
   ```
   - The production build will be in `/public_html`

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## License

[Apache License 2.0](./LICENSE)
