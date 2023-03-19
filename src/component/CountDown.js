import { useState } from "react"
import Input from "./Input"
import '../App.css'

function CountDown() {

    const [currentTime, setCurrentTime] = useState(0)
    const [intervalId, setIntervalId] = useState(null)

    const startNewTimer = () => {
        setIntervalId(setInterval(() => {
            setCurrentTime(currentTime => {
                if (currentTime > 0) {
                    return currentTime - 1
                }
                TimerStop()
                return currentTime
            })
        }, 1000))
    }

    const TimerStop = () => {
        if (intervalId) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }

    const startTimer = (timeInSeconds) => {
        TimerStop()
        setCurrentTime(timeInSeconds)
        startNewTimer()

    }

    return <div id="count-down-app">
        <Input onRequestStart={startTimer} />
        <h1 id="current-time">
            {currentTime}
        </h1>
    </div>
}

export default CountDown;
