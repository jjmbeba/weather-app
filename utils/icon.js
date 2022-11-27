const icon = (weather, desc) => {
    switch(weather){
        case "Clear":
            return "/Clear.png"
            break;
        case "Thunderstorm":
            return "/Thunderstorm.png"
            break;
        case "Drizzle":
            return "/LightRain.png"
            break;
        case "Rain":
            if(desc === "shower rain" ){
                return "/Shower.png"
            }else if(desc === "light rain"){
                return "/LightRain.png"
            }
            else{
                return "/HeavyRain.png"
            }
            break;
        case "Snow":
            if(desc === 'Sleet'){
                return "/Sleet.png"
            }else{
                return "/Snow.png"
            }
            break;
        case "Clouds":
            if(desc === 'few clouds'){
                return "/LightCloud.png"
            }else if(desc === 'overcast clouds'){
                return "/HeavyCloud.png"
            }else{
                return '/cloudy.png'
            }
            break;
    }
}

export default icon