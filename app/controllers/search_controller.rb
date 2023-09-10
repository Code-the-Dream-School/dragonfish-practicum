class SearchController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @q = Day.ransack(params[:q])
    @moodresults = @q.result(distinct: true)
  end
end
