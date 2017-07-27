# Docker Jekyll & Mr. Grunt

Develop, validate, and deploy static websites with ease inside ready-to-run
Docker containers.  Manage multiple Jekyll websites with one tooling install.


## Setup & Install

Copy the contents of `.env.template` into `.env` (a git-ignored file) and update
the path to `JEKYLL_CONTENT_DIR` if desired.

First, install NPM modules:

    docker-compose run --rm npm install

Starting a new Jekyll project?  Execute:

    docker-compose run --rm jekyll new .

**Note**:  if Jekyll complains that the directory is not empty and _you're sure
you want to start a new project_, add `-f` to the end of the above command.
Proceed with caution, since this option may overwrite existing files.


## Serve

    docker-compose run --rm grunt serve


## Build & Validate

    docker-compose run --rm grunt
