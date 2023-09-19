import Timer from '../Timer'

import './index.css'

const Header = (props) => {
        const {isRegister,onTimerStart,seconds,isTimeStart} = props
        return(
            <nav className='nav-bar'>
                <div className="logo-name-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Location_dot_red-green.svg" alt="game logo" className="logo" />
                    <h1 className="header-heading">Green Light <span className="red-light-text">Red Light</span></h1>
                </div>
                {isRegister && <Timer onTimerStart={onTimerStart} seconds={seconds} isTimeStart={isTimeStart}/>}
            </nav>
        )
}

export default Header