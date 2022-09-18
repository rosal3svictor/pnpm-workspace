# PNPM WORKSPACE

1. [PNPM (Fast, disk space efficient package manager)](https://pnpm.io/)
2. [What’s the Difference Between Hard Links and Symbolic Links?](https://medium.com/geekculture/whats-the-difference-between-hard-links-and-symbolic-links-e43b212e00c4)
3. [How does PNPM Work?](https://towardsdev.com/how-does-pnpm-work-7e7723a165fc)
4. [PNPM Workspaces](https://pnpm.io/workspaces)
5. [Adding Nx to Lerna/Yarn/PNPM/NPM Workspace](https://nx.dev/recipe/adding-to-monorepo)

   One of the main features of NX is caching. It allows us to cache an operation
   so we don't have to execute it again if the input sources didn't change. This
   is actually what speeds up your monorepo quite dramatically.

   By default, NX does not cache any operation just to be cautious because
   potentially operations could not be casual. So what does the caching operation
   looks like? It's like a side-effect for your function so whenever you get a
   certain input you get always the same output consistently.
