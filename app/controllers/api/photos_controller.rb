class Api::PhotosController < ApplicationController

  def index

    if params[:user_id]
      @photos = Photo.where(user_id: params[:user_id])
    else
      @photos = Photo.all
    end
  render :index
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :photo_url,
                                  :user_id, :area_id)
  end
end
