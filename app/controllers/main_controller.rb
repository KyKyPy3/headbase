class MainController < ApplicationController
  def index
    @news = News.order("created_at desc").limit(5)
  end

  def register
  end
end
