class leapyear{
    leapyear(year){
        if(year % 400 === 0){
            return true
        }
        else if(year %300 === 0)
        {
            return false
        }
        else if(year %4 === 0){
            return true
        }else if(year % 4 !== 0){
            return false
        }
    
    }
}
module.exports = leapyear;