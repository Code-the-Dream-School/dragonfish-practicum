class SearchController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @days = current_user.days
    @q = current_user.days.ransack(params[:q])
    @moodresults = @q.result(distinct: true)
  end
end
