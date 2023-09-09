class ApplicationController < ActionController::Base
    before_action :set_query

    def set_query
        @q = Day.ransack(params[:q])
    end

    def index
        @q = Day.ransack(params[:q])
        @moodresults = @q.result(distinct: true)
    end

    private
    def authenticate_user!
        if user_signed_in?
        root_path
        else
        render 'home/index', notice: "Please Login to view that page!"
        end
    end
end
