class Api::ContactsController < ApplicationController

  def index
    @contacts = Contact.all
  end

  def show
    @contact = Contact.find_by(id: params[:id])
  end


  private

  def contact_params
    params.require(:contact).permit(:firstname, :lastname)
  end
end
