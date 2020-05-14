class PagesController < ApplicationController
    def home
    end

    def dashboard
        @user = current_user
        @allAvailabilities = @user.availability
        @arrayof5day = week(Date.today)
        @availabilitiesOfTheWeek = userAvailabilities(@allAvailabilities)
    end 



    def userAvailabilities(allAvailabilities)
        datesArray = []
        allAvailabilities.each do |date|  
            
            if date.date > Date.today 
                 datesArray << date.date
            end
        end 
        return datesArray.sort.first(5)    
    end

    def week(today)
        array = []
        array.push(Date.today)
        until array.length == 5 
            array.push(array.last + 1)
        end
        return array
    end
end
