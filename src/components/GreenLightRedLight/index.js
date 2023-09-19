import {Component} from 'react'

import UserRegistration from '../UserRegistration'
import Header from '../Header'
import RandomColorBox from '../RandomColorBox'
import GameOver from '../GameOver'

import './index.css'

const initialUrl = "https://upload.wikimedia.org/wikipedia/commons/6/62/Solid_red.svg"

const initialState = {
    userName:'', 
    userEmail:'', 
    userMobile:'',
    difficultyLevel: 'easy', 
    isRegister: false, 
    clickCount:0, 
    colorBoxId: '', 
    colorBoxUrl: initialUrl, 
    seconds: 40,
    isGameOver: false,
    isTimeStart: true

}

class GreenLightRedLight extends Component{
    state = initialState

    onChangeUserName = (value) => (
        this.setState({userName: value})
    )

    onChangeUserEmail = (value) => (
        this.setState({userEmail: value})
    )

    onChangeUserMobile = (value) => (
        this.setState({userMobile: value})
    )

    onChangeDifficultyLevel = (value) => (
        this.setState({difficultyLevel: value})
    )

    onTimerStart = () => (
        this.setState(prevState => ({seconds: prevState.seconds-1}))
    )

    changeFormSubmitStatus = () => {
        this.setState({isRegister: true})
    }

    onChangeColorBoxUrl = (url,id) => (
        this.setState({colorBoxUrl: url, colorBoxId: id})
    )

    onClickGreenColorBox = () => {
        this.setState(prevState => ({clickCount: prevState.clickCount + 1}))
    }
    onClickRedColorBox = () => {
        this.setState({isGameOver: true,isTimeStart: false})
    }

    onPlayAgain = () => {
        this.setState(
            initialState
        )
    }


    render(){
        const {userName, difficultyLevel,isRegister, colorBoxId, colorBoxUrl,seconds,clickCount,isGameOver,isTimeStart} = this.state

        return(
            <div className="game-bg-container">
                <Header 
                    difficultyLevel={difficultyLevel} 
                    isRegister={isRegister} 
                    onTimerStart={this.onTimerStart} 
                    seconds={seconds}
                    isTimeStart={isTimeStart}
                />
                <div className='content-container'>
                    {!isRegister && <UserRegistration 
                        onChangeUserName={this.onChangeUserName} 
                        onChangeUserEmail={this.onChangeUserEmail} 
                        onChangeUserMobile={this.onChangeUserMobile} 
                        onChangeDifficultyLevel={this.onChangeDifficultyLevel} 
                        consoleValues={this.consoleValues}
                        difficultyLevel = {difficultyLevel}
                        changeFormSubmitStatus={this.changeFormSubmitStatus}
                    />
                    }
                    {(isRegister && !isGameOver && seconds!== 0) && <RandomColorBox 
                                        colorBoxId={colorBoxId} 
                                        colorBoxUrl={colorBoxUrl} 
                                        onChangeColorBoxUrl={this.onChangeColorBoxUrl}
                                        onClickGreenColorBox = {this.onClickGreenColorBox}
                                        onClickRedColorBox = {this.onClickRedColorBox}
                                        clickCount = {clickCount}
                                        difficultyLevel = {difficultyLevel}
                                        />
                    }
                    {(isGameOver || seconds===0) && <GameOver userName={userName} difficultyLevel={difficultyLevel} clickCount={clickCount} onPlayAgain={this.onPlayAgain}/>}
                </div>
                
            </div>
        )
    }
} 
    

export default GreenLightRedLight