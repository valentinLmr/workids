class PagesController < ApplicationController
    def home
    end

    def dashboard
        @user = current_user
        @review = Review.new
    end 
end
