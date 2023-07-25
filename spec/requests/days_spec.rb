require 'rails_helper'

RSpec.describe "Days", type: :request do
  describe "get days_path" do
    it "renders the index view" do
      FactoryBot.create_list(:day, 10)
      get days_path
      expect(response).to render_template(:index)
    end
  end
  describe "get day_path" do
    it "renders the :show template" do
      day = FactoryBot.create(:day)
      get day_path(id: day.id)
      expect(response).to render_template(:show)
    end
    it "redirects to the index path if the day id is invalid" do
      get day_path(id: 5000) 
      expect(response).to redirect_to days_path
    end
  end
  describe "get new_day_path" do
    it "renders the :new template" do
      day = FactoryBot.create(:day)
      get new_day_path(id: day.id)
      expect(response).to render_template(:new)
    end
  end
  describe "get edit_day_path" do
    it "renders the :edit template" do
      day = FactoryBot.create(:day)
      get edit_day_path(id: day.id)
      expect(response).to render_template(:edit)
    end
  end
  describe "delete a day record" do
    it "deletes a day record" do
    day = FactoryBot.create(:day)
    delete day_path(id: day.id)
    expect(day).to eq(nil)
    expect(response).to redirect_to(days_path)
    end
  end
end 