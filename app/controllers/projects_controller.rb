class ProjectsController < ApplicationController
  layout "application", :except => [:tab1, :tab2, :general, :browse]
  
  def index
  end
  
  def tab1
  end
end
