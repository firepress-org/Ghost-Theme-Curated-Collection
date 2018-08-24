## What is this?

It’s a curation of open-source Ghost Themes (*a template if you prefer*) for [Ghost](https://ghost.org/). It’s a very **opiniated** classification. The question I ask myself is: **Would I recommand this theme to a friend or a client ?** If it’s not a « Hell yes! » kind of reaction, I move the theme I’m reviewing in the [03_no-go directory](https://github.com/firepress-org/Ghost-Theme-Curated-Collection-No-Go/tree/master/03_no-go).

This project is a **monorepo**. It means it’s an aggregation of existing projects. These Ghost themes are not developped directly within this repository. Look at the source to see all the action. 


## Start here

1. The most interesting directory is: [01_go](https://github.com/firepress-org/Ghost-Theme-Curated-Collection/tree/master/01_go).


## Submodules

This is a note to myself as I always strungle to use submodules.

**To add a new theme as a submodule**:

```
git submodule add $GIT_URL
git submodule update --init --recursive
git commit
git push
```

**To update submodules from parents projects**:

```
cd 01_go && \
./update-submodules.sh && \
echo "submodules are updated"
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

Thanks to the power of communities, this is where `1 + 1 = 3`.

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Add the theme under directory `02_to_review`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

  
## Sources & Fork

- This Git repo is available at:<br> https://github.com/firepress-org/Ghost-Theme-Curated-Collection


## License & Sources

- This fork is released under the **GNU** [license](https://github.com/pascalandy/GNU-GENERAL-PUBLIC-LICENSE).
- View **MIT** license information at:<br>  https://ghost.org/license/ for the software.


## About

- [Pascal Andy’s « now page »](https://pascalandy.com/blog/now/)
- Follow me on [Twitter](https://twitter.com/askpascalandy)
- Find more Ghost Themes on [play-with-ghost.com](https://play-with-ghost.com/)
