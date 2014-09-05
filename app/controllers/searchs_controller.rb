class SearchsController < ApplicationController

  def index
    @searchs = Search.all
    
  end

  def show
    @search = Search.find(params[:id])
  end

  def new
    @search = Search.new
  end

  def create
    @search = Search.new
  end

  def edit
    @search = Search.find(params[:id])
  end

  def update
    @search = Search.find(params[:id])
  end

  def destroy
    @search = Search.find(params[:id]).destroy
  end

end
