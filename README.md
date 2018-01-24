# redctf

The most customizeable CTF Framework built with modern technologies.


## Phase One
#### Minimum functionality phase.

- [x] Auth
  - [x] Login - no access with proper login
  - [x] Register
  - [x] Hide/Show Admin page based on rights
- [ ] Admin Page
  - [x] Create Category
  - [x] Create Challenge
  - [ ] Release Hints
- [ ] Challenge Board
  - [x] Iterate and display categories and challenges from rethinkdb/horizon
  - [ ] Challenge Modals
    - [x] Appearance
    - [x] Pass in Functions for submission
    - [x] Flag Check
    - [ ] Sucess or Failure Toasts - should exit on success?
    - [ ] Number Solves so far
    - [ ] Handle large code swaths (e.g. cipher text)
  - [x] Flag Check in Django
  - [ ] Live Challenge Score Update thru Rethinkdb/Horizon
- [ ] Scoreboard Page
  - [ ] Graphs
  - [ ] Table of competitors
- [ ] Team Page
  - [ ] Accessible from top nav bar
  - [ ] Accessible from scoreboard
  - [ ] Graph
  - [ ] Table for Challenges solved (and times solved)


## Phase Two
#### Improvement Phase

- [ ] CSS Improvements
  - [ ] Setup Basis for Theming in Phase Three
- [ ] Admin Page
  - [ ] Add CTFs
  - [ ] Complete Control of Challenges - Create/Edit/Delete
- [ ] Large Scale Documentation
- [ ] Input Validation (Only Numbers here, Valid Email there, etc)


## Phase Three
#### Configuration Phase

- [ ] Admin Page
  - [ ] Allow upload custom HTML/CSS
  - [ ] Allow pick color scheme
  - [ ] Allow choose horizontal/vertical challenge board orientation
  - [ ] Choose email verification (i.e. send pwd, force pwd change or email verification link)
  - [ ] Choose team / multiple logins per team
  - [ ] Choose different scss modes (i.e. Vanilla Mode, Midnight Mode, Custom Mode, etc)
  - [ ] First blood points
- [ ] Complete Documentation
- [ ] Flash challenges


## Composition

#### Client
* ReactJS 15
* React Router 4
* Webpack 3
* Mobx

#### Realtime Integration
* Horizon
* RethinkDB

#### Backend
* Django
* GraphQL


## Requirements
* Horizon
* Rethinkdb
* Django (`redctf/server/`)

    `sudo pip3 install --upgrade --no-deps  --force-reinstall -r requirements.txt`

## To Develop on Project

Run the following (in order):

1) To Start Rethinkdb (`redctf/client/`)
    
    `rethinkdb`

2) To Run Horizon Server (`redctf/client/`)
    
    `hz serve --dev`

3) To Start Server (`redctf/server/`)
    
    `python3 manage.py runserver`

4) To Start Client (`redctf/client/`)
    
    `npm start`





## Sources

* Horizon
   * https://appendto.com/2017/08/using-horizonrethinkdb-react/
