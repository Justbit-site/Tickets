require 'rails_helper'

RSpec.describe User, type: :model do

  describe "when create user" do
    let(:user){FactoryGirl.create(:user)} # Build Or Create
    # puts user.errors.inspect

    it "should create user" do
      expect(user.invalid?).to be_falsy
    end

    it "should create user" do
      expect(user.valid?).to be_truthy
    end
  end
end
