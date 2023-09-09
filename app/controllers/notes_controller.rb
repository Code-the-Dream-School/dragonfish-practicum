class NotesController < ApplicationController
    before_action :authenticate_user!
    before_action :set_day

    def create

      @note = @day.notes.create(note_params)

      respond_to do |format|
        if @note.save
          format.html { redirect_to day_url(@day), notice: "Note created" }
          format.json { render :show, status: :created, location: @day }
        else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: @note.errors, status: :unprocessable_entity }
        end
    end

    end

    def edit

        @note = Note.find(params[:id])

    end
    
    def update

        @note = Note.find(params[:id])

        respond_to do |format|
            if @note.update(note_params)
              format.html { redirect_to day_url(@day), notice: "Note updated" }
              format.json { render :show, status: :ok, location: @day }
            else
              format.html { render :edit, status: :unprocessable_entity }
              format.json { render json: @note.errors, status: :unprocessable_entity }
            end
        end
    end    

    def destroy

        @note = Note.find(params[:id])

        @note.destroy

        respond_to do |format|
            format.html { redirect_to day_url, notice: "Note deleted" }
            format.json { head :no_content }
        end
    end

    private

    def note_params

      params.require(:note).permit(:content)

    end

    def set_day

        @day = Day.find(params[:day_id])

    end    

end
  