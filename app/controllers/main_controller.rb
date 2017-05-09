class MainController < ApplicationController
  def home
  end

  def dashboard
  end

  protected
    def set_layout
      return "landing" if user_signed_in?
      super
    end
end
