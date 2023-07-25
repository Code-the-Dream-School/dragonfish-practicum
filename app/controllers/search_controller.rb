class SearchController < ApplicationController
  def index
    @q = Day.ransack(params[:q])
    @moodresults = @q.result(distinct: true)
  end
end
