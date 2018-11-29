class FillingsController < ApplicationController

    def new
        @filling = Filling.new
    end

    def index
        @fillings = Filling.all
    end
    
end
