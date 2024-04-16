# Marvel Comics App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This project is connected to the Marvel Developer API. With this you can view information about Marvel's vast library of comics.

## Usage

Go to [Marvel's Developer Portal](https://developer.marvel.com/) to setup your account and get your api keys

Once you get your API keys please create a file named .env and add the following:

```
MARVEL_PUBLIC_KEY = "your_marvel_public_key"
MARVEL_PRIVATE_KEY = "your_marvel_private_key"
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
