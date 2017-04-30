class Api::GroupsController < ApplicationController

  def create

    @group = Group.new(group_params)

    if(@group.save)
      @groups = Group.includes(:contacts)
      render 'api/groups/index'
    else
      render json: @group.errors.full_messages, status: 422
    end

  end

  def index
    @groups = Group.includes(:contacts);
  end

  def show
    @group = Group.find_by(id: params[:id])
    @contacts = @group.contacts
  end

  def destroy
    @group = Group.find_by(id: params[:id])

    if(@group.destroy)
      @groups = Group.includes(:contacts)
      render 'api/groups/index'
    else
      render json: @contact.errors.full_messages, status: 422
    end

  end

  private

  def group_params
    params.require(:group).permit(:name, :image);
  end
end
