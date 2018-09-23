#!/usr/bin/env bash

# --- Best practices to manage errors ---
set -o errexit
trap 'echo "Aborting due to errexit on line $LINENO. Exit code: $?" >&2' ERR
set -o errtrace
set -o nounset

# --- By Pascal Andy https://pascalandy.com/blog/now/
# --- answer from: https://stackoverflow.com/a/5828396

###############################################################################
# Functions

function fct_update_submodule {

    # checkout desired branch
    git checkout master && \

    # update
    git pull && \

    # get back to your project root
    cd "$ROOT_PROJECT" && \

    # now the submodules are in the state you want, so
    git commit -am "$ACTION — Pull update(s) from source" && \
    git push;
}

# --- Define project's root
ROOT_PROJECT=$(pwd)

for ACTION in FirePress_Attila FirePress_Crisply FirePress_Klimax1 FirePress_Klimax2 FirePress_Simply FirePress_Stupendous FirePress_Vapor FirePress_Steam; do
    # There are 8 theme at the moment
    # Above, manually add every open source themes.

    # change to the submodule directory
    cd "$ACTION" && pwd && \
    
    # forcing true to avoid errors
    fct_update_submodule || true;
done
