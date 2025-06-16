import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./infoBox.css"

function InfoBox({ weatherInfo }) {
    const img_url = "https://images.unsplash.com/photo-1694950301466-a941e81d0d1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <Card className="weather_card" sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={weatherInfo.humidity > 80 ? RAIN_URL :  weatherInfo.temp > 15 ? HOT_URL : COLD_URL }
                    title="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherInfo.city} {weatherInfo.humidity > 80 ? <ThunderstormIcon/> :  weatherInfo.temp > 15 ? <LightModeIcon /> : <AcUnitIcon/> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>
                            <p>Temperature = {weatherInfo.temp}&deg; C</p>
                            <p>Humidity = {weatherInfo.humidity}</p>
                            <p>Min Temp = {weatherInfo.tempMin}&deg; C</p>
                            <p>Max Temp = {weatherInfo.tempMax}&deg; C</p>
                            <p>The weather can be descreibed as <i>{weatherInfo.weather}</i> and Feels Like = {weatherInfo.feelsLike}&deg; C</p>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox;