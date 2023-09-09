class DaysController < ApplicationController
  before_action :authenticate_user!
  before_action :set_day, only: %i[ show edit update destroy ]

  def nil.split *args
    nil # splitting of nil, in any imaginable way, can only result again in nil
  end
  
  def index
    @days = current_user.days

    if params[:days_between]
      start_split = params[:days_between].split(" - ").first
    @starts = Date.strptime(start_split, "%m/%d/%Y")
      end_split = params[:days_between].split(" - ").second
    @ends = Date.strptime(end_split, "%m/%d/%Y")
    else
    end

    @moodrating = Day.group(:moodrating)

    @q = Day.ransack(params[:q])
    @moodresults = @q.result(distinct: true)

   

  end

  

  def show
  end

  def new

    @day = current_user.days.new

  end

  def edit
  end

  def create

    @day = current_user.days.new(day_params)


    respond_to do |format|
      if @day.save
        format.html { redirect_to day_url(@day), notice: "Day created" }
        format.json { render :show, status: :created, location: @day }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @day.errors, status: :unprocessable_entity }
      end
    end

  end

  def update

    respond_to do |format|
      if @day.update(day_params)
        format.html { redirect_to days_path, notice: "Day updated" }
        format.json { render :show, status: :ok, location: @day }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @day.errors, status: :unprocessable_entity }
      end
    end

  end

  def destroy

    @day.destroy

    respond_to do |format|
      format.html { redirect_to days_url, notice: "Day deleted" }
      format.json { head :no_content }
    end

  end

  
  private

    def set_day

      @day = current_user.days.find(params[:id])

    end

    def day_params

      params.require(:day).permit(:current_user, :mooddate, :moodrating, :moodjournal, :moodword, :isbookmarked)
      
    end
end
