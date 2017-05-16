class MainController < ApplicationController
  def login
  end

  def index
  end

  protected
    def set_layout
      return "application" if user_signed_in?
      super
    end
end
