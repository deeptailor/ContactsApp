class Api::GroupsController < ApplicationController

  def index
    @groups = Group.includes(:contacts);
  end

  def show
    @group = Group.find_by(id: params[:id])
    @contacts = @group.contacts
  end
end
