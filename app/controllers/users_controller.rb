class UsersController < ApplicationController
  before_filter :authenticate_user!

  def index
    @users = User.paginate(:page => params[:page], :per_page => 5)
  end

  def show
    @user = User.find(params[:id])
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

end