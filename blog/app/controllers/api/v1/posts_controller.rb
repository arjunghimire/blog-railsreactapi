module Api::V1
	class Api::V1::PostsController < ApplicationController
	  def index
	    @posts = Post.all.latest
	    render json: @posts
	  end
	end
end
