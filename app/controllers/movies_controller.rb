class MoviesController < ApplicationController
  def index
  

    if params.has_key?(:keyword)
      term = params[:keyword]
      request = Typhoeus::Request.new(
      "http://www.omdbapi.com/?s=#{term}",
      method: :get,
      params: {movie: {title: term}}
      )
      request.run
      
      data = JSON.parse(request.response.body)

      @results = data["Search"]
    
      # puts "body of the response is #{request.response.body}" 
    end
    

    respond_to do |format|
      format.html # render .erb template as normal
      format.json {render :json => @results}
    end
  end  
end
