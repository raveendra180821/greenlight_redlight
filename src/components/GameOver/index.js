import './index.css'


const GameOver = (props) => {

    const {difficultyLevel,clickCount,userName,onPlayAgain} = props

    const onClickPlayAgain = () => (
        onPlayAgain()
    )

    const getExpectedClicks = () => {
        
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

    const renderYouWon = () => (
        <div className='game-over-card'>
            <p className='user-name'>{userName}</p>
            <p className='result'>YOU WON !!</p>
            <p className='target-clicks-text'>Target Clicks: {getExpectedClicks()}</p>
            <p className='your-clicks-text'>Your Clicks: {clickCount}</p>
            <button type="button" className='play-again-btn' onClick={onClickPlayAgain}>Play Again</button>
        </div>
    )

    const renderYouLost = () => (
        <div className='game-over-card'>
            <p className='user-name'>{userName}</p>
            <p className='result'>YOU LOST !!</p>
            <p className='target-clicks-text'>Target Clicks: {getExpectedClicks()}</p>
            <p className='your-clicks-text'>Your Clicks: {clickCount}</p>
            <button type="button"  className='play-again-btn' onClick={onClickPlayAgain}>Play Again</button>
        </div>
    )

    return(
        
        <div className='game-over-container'>
            <h1 className='game-over-text'>Game Over</h1>
            {clickCount >= getExpectedClicks() ? renderYouWon() : renderYouLost()}
        </div>
        
    )
}
export default GameOver