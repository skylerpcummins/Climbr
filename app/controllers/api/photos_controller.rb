class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all

    render :index
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :index
    else
      render json: @photo.errors.full_messages
    end
  end

  def show
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :photo_url,
                                  :user_id, :area_id)
  end
end
