class ProfilesController < ApplicationController
  
  def new
    @user = User.find(current_user)
    @profile = Profile.new
    @profile.user_id = @user.id
  end
  
  def show
    @user = User.find(current_user)
    @profile = @user.profile
  end
  
end
