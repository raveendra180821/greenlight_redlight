import {Component} from 'react'

import './index.css'

const colorBoxes = [
    {
        id: 1,
        name: 'redBox',
        url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Solid_red.svg"
    }, 
    {
        id: 2, 
        name: 'greenBox',
        url: "https://upload.wikimedia.org/wikipedia/commons/archive/2/29/20150316142721%21Solid_green.svg"
    }
]

class RandomColorBox extends Component{
    componentDidMount(){
        this.renderRandomColorBox()
    }

    renderRandomColorBox = () => {
        this.colorChangeTimerId = setInterval(()=>{
            const {onChangeColorBoxUrl} = this.props
            const randomColorBoxIndex = Math.floor(Math.random()*2)
            const randomColorObject = colorBoxes[randomColorBoxIndex]
            const randomColorUrl = randomColorObject.url
            const id = randomColorBoxIndex + 1
            onChangeColorBoxUrl(randomColorUrl, id)
            
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.colorChangeTimerId)
    }

    onClickColorBox = () => {
        const {colorBoxId,onClickGreenColorBox,onClickRedColorBox} = this.props
        if (colorBoxId === 2){
            onClickGreenColorBox()
        }else{
            onClickRedColorBox()
        }
    }

    getExpectedClicks = () => {
        const {difficultyLevel} = this.props
        let expectedClicks
        switch(difficultyLevel){
            case 'easy':
                expectedClicks = 10;
                break;
            case 'medium':
                expectedClicks = 15;
                break;
            case 'hard':
                expectedClicks = 25;
                break;
            default: 
                return null
        }
        return expectedClicks
    }

    render(){
        const {colorBoxUrl,clickCount,difficultyLevel} = this.props
        
        return(
            <div className='random-color-box-container'>
                <p>{difficultyLevel.toUpperCase()}</p>
                <p className='expected-clicks'>Expected Clicks: {this.getExpectedClicks()}</p>
                <p className='your-clicks'>Your Clicks: {clickCount}</p>
                <img src={colorBoxUrl} alt="color box" className='color-box' onClick={this.onClickColorBox}/>
            </div>
        )
    }
}
export default RandomColorBox