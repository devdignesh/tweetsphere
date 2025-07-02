
<h1 align="center">Tweetsphere</h3>
<p align="center">
This project is a fully functional X (formerly Twitter) clone built with modern technologies like Next.js 14, TypeScript, TailwindCSS, Framer Motion, MongoDB, Supabase, and more. The project showcases advanced fullstack capabilities and follows scalable architecture patterns.
</p>

<img width="1527" alt="twitter-clone-preview" src="https://tsedxkflgndtkvrmgbug.supabase.co/storage/v1/object/public/images/project_preview.png?t=2024-07-23T09%3A05%3A46.142Z">


## Live Demo
[Watch demo video on X (Twitter)](https://x.com/imDignesh/status/1784166713694773756)

##  Features 

- Google / GitHub / Email authentication (NextAuth) 
- Profile & banner image upload
- Create tweets with up to 4 images & emojis
- Like, Comment, Reply, Bookmark tweets
- Follow / Unfollow users
- Pin or Delete your own posts
- Search tweets & users
- Discover trending hashtags
- Dark / Light theme toggle `Alt + T`
- Fully responsive for all devices

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer motion](https://motion.dev/)
- [TanStack Query](https://tanstack.com/query/latest)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Supabase (Storage)](https://supabase.com/docs)
- [Upstash Redis](https://upstash.com/)
- [Zustand](https://zustand.surge.sh/)
- [zod](https://github.com/colinhacks/zod)
- [SWR](https://swr.vercel.app/)
- [SCSS](https://sass-lang.com/)

## Getting Started
### Installation 

```bash
git clone https://github.com/devdignesh/tweetsphere.git
cd tweetsphere
npm install
npm run dev
```

## Environment Variables

Copy the example file and add your secrets:

```bash
cp .env.example .env
```
### Required Variables:

* MongoDB connection string
* Supabase project keys
* NextAuth configuration


## Prisma Setup (MongoDB)

1. Install dependencies:
```bash
npm install
```
- This will automatically install <b>Prisma</b> and all the necessary dependencies
2. Generate Prisma Client

```bash
npx prisma generate
```
3. MongoDB Configuration

``` bash
DATABASE_URL="mongodb+srv://username:pass@xxx.xxx.mongodb.net/twitter_clone"
```

4. Push database schema:

```bash
npx prisma db push
```


## Supabase Setup:
1. Create a Supabase Account
- Visit [Supabase](https://supabase.com/), sign up, and create a new project.

3. Get API Keys

- After creating your project, go to the `API section` or `connect`.
- Find `Project URL` and `API Key/anon key` for the following environment variables:
 ```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```
- Copy these keys and add them to your .env file.

3. Create three **public buckets**:

   * `images`
   * `banners`
   * `avatars`

4. Ensure public read permissions for these buckets.<br/>
   [Need help? Read this Supabase Storage guide.](https://blog.stackademic.com/upload-file-using-next-js-and-supabase-ad0af2360677)

7. That's it!

Once done, your Supabase setup is complete and your application will now be able to store and retrieve images.


##  Docker Setup (Optional)

1. Pull the pre-built image:

   ```bash
   docker pull devdignesh/twitter_clone_nextjs:v1.1.0
   ```

2. Run the container:

   ```bash
   docker run -d -p 8000:3000 devdignesh/twitter_clone_nextjs:v1.1.0
   ```

3. Open in browser:

   ```
   http://localhost:8000
   ```



## Contributing

We welcome contributions!
Whether it's reporting bugs, suggesting features, improving documentation, or submitting PRs — all contributions are appreciated.

**To contribute:**

1. Fork the repo
2. Create a feature branch
3. Submit a pull request