source 'http://rubygems.org'

gem 'rails', '3.1.0.rc5'

# Bundle edge Rails instead:
# gem 'rails',     :git => 'git://github.com/rails/rails.git'

gem 'sqlite3'
gem 'rake', '0.8.7'
gem 'arel', '2.1.4'
gem 'redcarpet'
gem 'will_paginate'
gem "recaptcha", :require => "recaptcha/rails"

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails', "~> 3.1.0.rc"
  gem 'coffee-rails', "~> 3.1.0.rc"
  gem 'uglifier'
end

gem 'jquery-rails'
gem 'devise'
gem 'client_side_validations', '~> 3.1.0'

# Use unicorn as the web server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'


group :development do
   gem 'rspec-rails'
end

group :test do
  gem 'rspec-rails'
end

group :production do
  gem 'execjs'
  gem 'therubyracer-heroku', '0.8.1.pre3'
  gem 'pg'
end
