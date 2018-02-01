# Initial Setup(Locally)

Assure Brew, Ruby, Node, Yarn, etc. is installed. Basic neccessities to run a Node and/or Rails application.

* `git clone...`

* `cd` into app and run a `bundle install`

* `yarn install` just to be safe(Some of the packages get left out on the Webpacker initialization)

* From there, open up two terminal windows of the project directory(One for Webpacker server; the other for Rails server)

* In the Rails window run `rails s`; In the Webpacker window run `./bin/webpack-dev-server` (Usually, I'd add the commands to a Procfile but for the sake of time and separation...)

* Browse to your `localhost` along with whatever port it assigns to the Rails server.

* Calendar Component = `http://localhost:3000/welcome/calendar`
  Form Component = `http://localhost:3000/welcome/form`

ENJOY!
