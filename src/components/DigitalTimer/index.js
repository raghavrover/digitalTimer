import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerAmount: 25,
      timerFormat: '25:00',
      isTimerRunning: false,
      isTimerStarted: false,
    }
  }

  onIncreaseTimer = () => {
    const {timerAmount, isTimerStarted} = this.state
    if (!isTimerStarted) {
      this.setState({
        timerAmount: timerAmount + 1,
        timerFormat:
          timerAmount < 9 ? `0${timerAmount + 1}:00` : `${timerAmount + 1}:00`,
      })
    }
  }

  onDecreaseTimer = () => {
    const {timerAmount, isTimerStarted} = this.state
    if (!isTimerStarted) {
      if (timerAmount > 0) {
        this.setState({
          timerAmount: timerAmount - 1,
          timerFormat:
            timerAmount - 1 < 10
              ? `0${timerAmount - 1}:00`
              : `${timerAmount - 1}:00`,
        })
      }
    }
  }

  onStartTimer = () => {
    const {timerAmount} = this.state
    if (timerAmount === 0) {
      return
    }
    this.setState({isTimerRunning: true, isTimerStarted: true})
    let seconds = 60
    let minutes = timerAmount - 1
    this.timerId = setInterval(() => {
      if (minutes === 0 && seconds === 1) {
        this.setState({
          timerFormat: '00:00',
          isTimerStarted: false,
          isTimerRunning: false,
        })
        clearInterval(this.timerId)
      }
      seconds -= 1
      const minFormat = minutes < 10 ? `0${minutes}` : `${minutes}`
      if (seconds <= 9) {
        if (seconds === 0) {
          if (minutes === 0) {
            seconds = 0
            minutes = 0
          } else {
            seconds = 60
            minutes -= 1
          }
          this.setState({timerFormat: `${minFormat}:00`})
        } else {
          this.setState({timerFormat: `${minFormat}:0${seconds}`})
        }
      } else {
        this.setState({timerFormat: `${minFormat}:${seconds}`})
      }
    }, 1000)
  }

  onStopTimer = () => {
    this.setState({isTimerRunning: false})
    clearInterval(this.timerId)
  }

  onResetTimer = () => {
    this.setState({
      isTimerRunning: false,
      timerAmount: 25,
      timerFormat: '25:00',
      isTimerStarted: false,
    })
    clearInterval(this.timerId)
  }

  render() {
    const {timerAmount, timerFormat, isTimerRunning} = this.state
    const detailsObject = isTimerRunning
      ? {
          controlBtnImg:
            'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png ',
          controlBtnText: 'Pause',
          timerState: 'Running',
          eventHandler: this.onStopTimer,
          altValue: 'pause icon',
        }
      : {
          controlBtnImg:
            'https://assets.ccbp.in/frontend/react-js/play-icon-img.png ',
          controlBtnText: 'Start',
          timerState: 'Paused',
          eventHandler: this.onStartTimer,
          altValue: 'play icon',
        }

    const {
      controlBtnImg,
      controlBtnText,
      timerState,
      eventHandler,
      altValue,
    } = detailsObject
    return (
      <div className="digital-timer-bg-container">
        <h1 className="title">Digital Timer</h1>
        <div className="timer-console-container">
          <div className="timer-bg-container">
            <div className="timer-container">
              <h1 className="time">{timerFormat}</h1>
              <p className="timer-state">{timerState}</p>
            </div>
          </div>
          <div className="console">
            <div className="controls-container">
              <div className="start-stop-control">
                <img
                  src={controlBtnImg}
                  className="start-stop-control-img"
                  alt={altValue}
                />
                <button
                  className="start-text start-stop-control-btn"
                  type="button"
                  onClick={eventHandler}
                >
                  {controlBtnText}
                </button>
              </div>
              <div className="start-stop-control">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  className="restart-control-img"
                  alt="reset icon"
                />
                <button
                  className="start-stop-control-btn start-text"
                  type="button"
                  onClick={this.onResetTimer}
                >
                  Restart
                </button>
              </div>
            </div>
            <p className="set-time-limit-text">Set Timer Limit</p>
            <div className="timer-amount-container">
              <button
                className="change-timer-amount-btn"
                type="button"
                onClick={this.onDecreaseTimer}
              >
                -
              </button>
              <p className="timer-amount">{timerAmount}</p>
              <button
                className="change-timer-amount-btn"
                type="button"
                onClick={this.onIncreaseTimer}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
