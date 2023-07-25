class ApplicationController < ActionController::Base
    before_action :set_query

    def set_query
        @q = Day.ransack(params[:q])
    end

end
