class DaysController < ApplicationController
  before_action :set_day, only: %i[ show edit update destroy ]

  def index

    @days = Day.all

    @moodrating = Day.group(:moodrating)

    @q = Day.ransack(params[:q])
    @moodresults = @q.result(distinct: true)

  end

  def show
  end

  def new

    @day = Day.new

  end

  def edit
  end

  def create

    @day = Day.new(day_params)

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
        format.html { redirect_to day_url(@day), notice: "Day updated" }
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

      @day = Day.find(params[:id])

    end

    def day_params

      params.require(:day).permit(:mooddate, :moodrating, :moodjournal, :moodword)
      
    end
end
