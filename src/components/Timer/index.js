import {Component} from 'react'

import './index.css'

class Timer extends Component{
    componentDidMount(){
        this.startCountdown()
    }

    componentWillUnmount(){
        this.stopCountdown()
    }

    startCountdown = () => {
        this.timerId = setInterval(()=>{
            const {onTimerStart,seconds,isTimeStart} = this.props
            if(seconds>0 && isTimeStart){
                onTimerStart()
            }else{
                this.stopCountdown()
            }
        },1000)
    }

    stopCountdown = () => (
        clearInterval(this.timerId)
    )

    render(){
        const {seconds} = this.props
        const timerClass = seconds>9 ? 'time-text' : 'time-text warn'
        
        return(<p className={timerClass}>{seconds}</p>)
        
    }
}
export default Timer