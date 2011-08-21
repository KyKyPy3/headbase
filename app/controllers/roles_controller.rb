class RolesController < ApplicationController
  def role?(role)
      return !!self.roles.find_by_name(role.to_s.camelize)
  end
  
  # GET /roles
  # GET /roles.json
  def index
    @roles = Role.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @roles }
    end
  end
  
  # GET /roles/new
  def new
    @role = Role.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end
  
  # POST /roles
  def create
    @role = Role.new(params[:role])

    respond_to do |format|
      if @role.save
        format.html { redirect_to @role, notice: 'Role was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end
end
