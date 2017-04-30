class Api::ContactsController < ApplicationController

  def create

    @contact = Contact.new(contact_params);

    if(@contact.save)
      @contacts = Contact.all
      render 'api/contacts/index'
    else
      render json: @contact.errors.full_messages, status: 422
    end
  end

  def index
    @contacts = Contact.all
  end

  def show
    @contact = Contact.find_by(id: params[:id])
  end

  def destroy
    @contact = Contact.find_by(id: params[:id])

    if(@contact.destroy)
      @contacts = Contact.all
      render 'api/contacts/index'
    else
      render json: @contact.errors.full_messages, status: 422
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:firstname, :lastname, :profile_image_url, :number)
  end
end
