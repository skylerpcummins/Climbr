class Api::AreasController < ApplicationController

  def new
    @area = Area.new
  end

  def show
    @area = Area.find(params[:id])
  end

  def index
    @areas = Area.all

    render :index
  end

  def create
    @area = Area.new(area_params)

    if @area.save
      render :show
    else
      render json: @area.errors.full_messages
    end
  end

  private
  def area_params
    params.require(:area).permit(:name, :description, :lat, :lng)
  end
end
