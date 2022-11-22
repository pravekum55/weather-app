import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import './forecast.css';


const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ForeCast = ({ data }) => {

    console.log("FORECAST-",data.forecast.forecastday);

    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );
   // var myvar = data;
    console.log("FORECASTEDAYS-",forecastDays);
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.forecast.forecastday.slice(0, 7).map((item, indx) => (
                    <AccordionItem key={indx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="dialy-item">
                                    <label className="days">{forecastDays[indx]}</label>
                                    <label className="description">{item.astro.moon_phase}</label>
                                    <label className="min-max">{Math.round(item.day.maxtemp_c)}°C | {Math.round(item.day.mintemp_c)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.day.avghumidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed:</label>
                                    <label>{item.day.avgvis_km} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Chance of Rain:</label>
                                    <label>{item.day.daily_chance_of_rain} m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Chance of Snow:</label>
                                    <label>{Math.round(item.day.daily_chance_of_snow)}°C</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Date:</label>
                                    <label>{item.date} m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Chance of Snow:</label>
                                    <label>{Math.round(item.day.daily_chance_of_snow)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );
}

export default ForeCast;