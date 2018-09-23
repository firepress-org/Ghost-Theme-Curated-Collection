
# Ghost-Theme-Curated-Collection


## What is this?

It’s a curation of open-source Ghost Themes (*a template if you prefer*) for Ghost. It’s a very **opiniated** classification. The question I ask myself is: **Would I recommand this theme to a friend or a client ?** If it’s not a « Hell yes! » kind of reaction, I move the theme I’m reviewing in the [03_no-go directory](https://github.com/firepress-org/Ghost-Theme-Curated-Collection-No-Go/tree/master/03_no-go).

This project is a **monorepo**. It means it’s an aggregation of existing projects. These Ghost themes are not developped directly within this repository. Look at the source to see all the action. 

**What is Ghost?** — Ghost is an open source software that lets you create your website with a blog. See the [FAQ section](https://play-with-ghost.com/ghost-themes/faq/#what-is-ghost) for more details.


## Start here

- Head over this directory: [01_go](https://github.com/firepress-org/Ghost-Theme-Curated-Collection/tree/master/01_go).
- **Alternative** — You can also find FirePress’ themes using the [tag `firepress-ghost-theme`](https://github.com/topics/firepress-ghost-theme).


## Submodules

This is more a note to myself as I always strungle to use submodules.

**To update submodules from parents projects**:

```
cd 01_go && \
./update-submodules.sh
```

**To add a new theme as a submodule**:

This $GIT_URL is used as an example.

```
GIT_URL="https://github.com/firepress-org/FirePress_Vapor.git"
Under directory `01_go`
git submodule add --force $GIT_URL
git submodule update --init --recursive
git commit -m "Adding a new theme as submodule"
git push
```


## About Ghost our favorite CMS

**What is Ghost?** — Ghost is an open source software that lets you create your website with a blog. See the [FAQ section](https://play-with-ghost.com/ghost-themes/faq/#what-is-ghost) for more details.

On the other side, **at FirePress we do one thing and we do it with all our heart: we host Ghost’s websites**. The idea behind FirePress is to empower freelancers and small organizations to be able to build an outstanding mobile-first website.

Because we believe your website should speak up in your name, we consider our mission completed once your site has become [your impresario](https://play-with-ghost.com/ghost-themes/why-launching-your-next-website-with-firepress/). Start your [free trial here](https://play-with-ghost.com/ghost-themes/free-10-day-trial/).


##  Live Demo (online)

Head over to [play-with-ghost.com](https://play-with-ghost.com/) . It’s is a playground to learn about Ghost. You can see Ghost themes and login into the **admin panel** by using the available credentials. In short, you can try Ghost on the spot without having to sign-up!

Since August 24th 2018, you can try **Ghost version 2** here:<br>
https://play-with-ghost.com/ghost-themes/firepress-vapor-for-barbershops/


## Contributing

Here’s how I suggest you go about proposing a change to this project:

1. [Fork this project](https://help.github.com/articles/fork-a-repo/) to your account.
2. [Create a branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/) for the change you intend to make (i.e. `git checkout -b my-new-feature`)
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://help.github.com/articles/about-pull-requests/) from your fork’s branch to our `master` branch.
	- Explain why you’re making a change. Even if it seems self-evident, please take a sentence or two to tell us why your change or addition should happen. It’s especially helpful to articulate why this change applies to everyone who works with the applicable technology, rather than just you or your team.
	- Please only modify one element per pull request. This helps keep pull requests and feedback focused on a specific project or technology.

  
## Sources

- This Git repo is available at https://github.com/firepress-org/Ghost-Theme-Curated-Collection


## License

- This fork is under the **GNU** license. Details at https://github.com/pascalandy/GNU-GENERAL-PUBLIC-LICENSE
- The Ghost’s software, is under the **MIT** license. Details at https://ghost.org/license/


## FirePress Hosting

At FirePress we do one thing and we do it with our whole heart: we host **fully managed Ghost’s websites**. The idea behind FirePress is to empower freelancers and small organizations to be able to build an outstanding mobile-first website. Start your [free trial here](https://play-with-ghost.com/ghost-themes/free-10-day-trial/).

We offer **workshops** where participants ends up with a website/blog they can easily operate themselves. Details are coming soon. It is available in those cities:

- Montréal - Canada
- Québec City - Canada
- Toronto - Canada
- New-York - USA

Because we believe your website should speak up in your name, we consider our mission completed once your site has become [your impresario](https://play-with-ghost.com/ghost-themes/why-launching-your-next-website-with-firepress/).


## Keep in touch

- Pascal Andy’s [« now page »](https://pascalandy.com/blog/now/)
- Follow me on [Twitter](https://twitter.com/askpascalandy)
- Find more Ghost Themes on [play-with-ghost.com](https://play-with-ghost.com/)