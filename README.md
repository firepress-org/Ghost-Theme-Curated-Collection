## Introduction

This Git repo is a curation of open-source Ghost Themes. It’s a very **opiniated** classification. The question I ask myself is: **Would I recommand this theme to a friend or a client ?** If it’s not a « Hell yes! » kind of reaction, I move the theme I’m reviewing in the [03_no-go directory](https://github.com/firepress-org/Ghost-Theme-Curated-Collection-No-Go/tree/master/03_no-go).

This project is a **monorepo**. It means it’s an aggregation of existing projects. These Ghost themes are not developped directly within this repository and may be outdated. Look at the source to see all the action. 


## Start here

1. The most interesting directory is: [01_go](https://github.com/firepress-org/Ghost-Theme-Curated-Collection/tree/master/01_go).

## Submodules

This is a note to myself as I always strungle to use submodules

**To add a new theme**:

```
git submodule add $GIT_URL
git submodule update --init --recursive
git commit
git push
```

**To update this repo after something changed at the sources**:

answer from: https://stackoverflow.com/a/5828396

```
# time passes, submodule upstream is updated
# and you now want to update

# change to the submodule directory
cd submodule_dir

# checkout desired branch
git checkout master

# update
git pull

# get back to your project root
cd ..

# now the submodules are in the state you want, so
git commit -am "Pulled down update to submodule_dir"
```

## Contributing

Thanks to the power of communities, this is where `1 + 1 = 3`.

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Add the theme under directory `02_to_review`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request


## Copyright & License

Copyright (c) 2018 Pascal Andy — Released under the [GNU license](https://github.com/pascalandy/GNU-GENERAL-PUBLIC-LICENSE).


## Sources

- This Git repo is available [here](https://github.com/firepress-org/Ghost-Theme-Curated-Collection).


## Author

In the git world most people refer themselves as maintainers but I hate this expression. It feels heavy. I much prefer author.

Shared by [Pascal Andy](https://pascalandy.com/blog/now/). Find me on [Twitter](https://twitter.com/askpascalandy).
