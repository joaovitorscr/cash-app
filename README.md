
# Cash App

Project developed as a way to practive my habilities creating a landing page from a fictional bank  called Cash App.



## Tech Stack

React 19, TailwindCSS.

Animations: Framer Motion.

Schema: Zod

Form: React Hook Form

## Run Locally

Check if you have installed Node.js 18+, if not you can install with this [link.](https://nodejs.org/pt/download/package-manager)

Clone the project:

```bash
  git clone git@github.com:joaovitorscr/cash-app.git

  or

  git clone https://github.com/joaovitorscr/cash-app.git

  or

  gh repo clone gh repo clone joaovitorscr/cash-app
```

Enter the created directory.

```bash
  cd cash-app
```

Install dependencies.

```bash
  npm install

  or

  yarn install

  or

  pnpm install
```

Start the app.

```bash
  npm run build && npm run start

  or

  yarn build && yarn start

  or

  pnpm build && pnpm start
```


## Project Structure

.  
├── next.config.mjs  
├── next-env.d.ts  
├── package.json  
├── pnpm-lock.yaml  
├── postcss.config.js  
├── public  
│   └── assets  
│       ├── flags  
│       │   ├── brazil.svg  
│       │   └── usa.svg  
│       ├── hero-background.jpg  
│       └── logo.svg  
├── README.md  
├── src  
│   ├── app  
│   │   ├── (auth)  
│   │   │   ├── layout.tsx  
│   │   │   ├── sign-in  
│   │   │   │   ├── _components  
│   │   │   │   │   ├── sign-in-form.schema.ts  
│   │   │   │   │   └── sign-in-form.tsx  
│   │   │   │   └── page.tsx  
│   │   │   └── sign-up  
│   │   │       ├── _components  
│   │   │       │   ├── sign-up-form.schema.ts  
│   │   │       │   └── sign-up-form.tsx  
│   │   │       └── page.tsx  
│   │   ├── globals.css  
│   │   ├── icon.svg  
│   │   ├── layout.tsx  
│   │   └── page.tsx  
│   ├── assets  
│   │   └── ChangeIcon.svg  
│   ├── components  
│   │   ├── landing-page  
│   │   │   ├── components  
│   │   │   │   ├── plan-card.tsx  
│   │   │   │   ├── product-card.tsx  
│   │   │   │   └── transaction-card.tsx  
│   │   │   └── sections  
│   │   │       ├── hero-section.tsx  
│   │   │       ├── plans-section.tsx  
│   │   │       └── products-section.tsx  
│   │   ├── theme-provider.tsx  
│   │   ├── ui  
│   │   │   ├── button.tsx  
│   │   │   ├── form.tsx  
│   │   │   ├── input.tsx  
│   │   │   ├── label.tsx  
│   │   │   └── password-input.tsx  
│   │   └── wrappers  
│   │       ├── auth-navbar.tsx  
│   │       ├── navbar.tsx  
│   │       └── on-scroll-reveal.tsx  
│   ├── lib  
│   │   └── cn.ts  
│   └── utils  
│       └── password.schema.ts  
├── tailwind.config.ts  
└── tsconfig.json  
