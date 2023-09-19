import "./index.css"

const UserRegistration = (props) => {
    const {onChangeUserName,onChangeUserEmail,onChangeUserMobile,onChangeDifficultyLevel,changeFormSubmitStatus,difficultyLevel} = props

    const onEnterUserName = (event) => (
        onChangeUserName(event.target.value)
    )

    const onEnterUserEmail = (event) => (
        onChangeUserEmail(event.target.value)
    )

    const onEnterUserMobile = (event) => (
        onChangeUserMobile(event.target.value)
    )

    const onSelectDifficultyLevel = (event) => (
        onChangeDifficultyLevel(event.target.value)
    )

    const onSubmitForm = (event) => (
        event.preventDefault(),
        changeFormSubmitStatus()
    )
    


   return <div className="form-container">
        <h1 className="form-heading">REGISTRATION</h1>
        <form className="form" onSubmit={onSubmitForm}>
            <label htmlFor="name" className="label-text" >NAME</label>
            <input 
                type="text" 
                id="name" 
                className="input_element" 
                placeholder="Enter Name"
                onChange={onEnterUserName} 
                required
            />
            <label htmlFor="email" className="label-text">EMAIL</label>
            <input 
                type="email" 
                id="email" 
                className="input_element" 
                placeholder="Enter Email" 
                onChange={onEnterUserEmail} 
                required
            />
            <label htmlFor="number" className="label-text">MOBILE NO</label>
            <input 
                type="text" 
                id="number" 
                className="input_element" 
                placeholder="Enter Mobile Number" 
                maxLength={10} 
                onChange={onEnterUserMobile} 
                required
            />
            <p className="difficulty-heading">Select difficulty level</p>
            <select 
                className="difficulty-level-container" 
                defaultValue={difficultyLevel}
                onChange={onSelectDifficultyLevel}>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
            <button type="submit" className="register-btn">Register</button>
        </form>
    </div>
}
export default UserRegistration