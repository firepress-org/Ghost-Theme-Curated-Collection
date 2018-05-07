#!/usr/bin/env bash

# --- Best practices to manage errors ---
set -o errexit
trap 'echo "Aborting due to errexit on line $LINENO. Exit code: $?" >&2' ERR
set -o errtrace
set -o nounset

###############################################################################
# By Pascal Andy https://pascalandy.com/blog/now/

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
    git commit -am "Pulled down update from the submodule" && \
    git push;
}

# Define project's root
ROOT_PROJECT=$(pwd)

# Define which themes to update
SUBMODULES_LIST=(DummyItem FirePress_Attila FirePress_Crisply FirePress_Klimax1 FirePress_Klimax2 FirePress_Simply FirePress_Stupendous FirePress_Vapor FirePress_Steam)
SUBMODULES_COUNT=8

export MIN=1
export MAX="$SUBMODULES_COUNT";

for ACTION in $(seq $MIN $MAX); do
    # change to the submodule directory
    cd ${SUBMODULES_LIST[$ACTION]};
    pwd; sleep 1;
    fct_update_submodule;
done





