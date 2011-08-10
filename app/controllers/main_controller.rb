class MainController < ApplicationController
  def index
    @news = News.order("created_at desc").limit(10)
  end

  def register
  end
end
