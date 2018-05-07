## What is this?

It’s a curation of open-source Ghost Themes (*a template if you prefer*) for [Ghost](https://ghost.org/). It’s a very **opiniated** classification. The question I ask myself is: **Would I recommand this theme to a friend or a client ?** If it’s not a « Hell yes! » kind of reaction, I move the theme I’m reviewing in the [03_no-go directory](https://github.com/firepress-org/Ghost-Theme-Curated-Collection-No-Go/tree/master/03_no-go).

This project is a **monorepo**. It means it’s an aggregation of existing projects. These Ghost themes are not developped directly within this repository. Look at the source to see all the action. 

[Ghost](https://ghost.org/) is a free and open source website & blogging platform designed to simplify the process of publishing. It’s individual bloggers as well as online publications. You can see Ghost as a CMS (content management system) designed to be better alternative to systems like: *WordPress, Drupal, Medium, Tumblr*, etc.


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


## Contributing

Thanks to the power of communities, this is where `1 + 1 = 3`.

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Add the theme under directory `02_to_review`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request


## License & Sources


-View the **GNU** license information at https://github.com/pascalandy/GNU-GENERAL-PUBLIC-LICENSE
- This Git repo is available at https://github.com/firepress-org/Ghost-Theme-Curated-Collection


## Author

In the world of OSS (open source software) most people refer themselves as maintainers. The thing is… I hate this expression. It feels heavy and not fun. I much prefer author.

Shared by [Pascal Andy](https://pascalandy.com/blog/now/). Find me on [Twitter](https://twitter.com/askpascalandy).
