import React from 'react';


class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemoUser = this.loginDemoUser.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.login(this.state)
            .then(() => this.props.history.push('/review_index'));
    }

    loginDemoUser(e) {
        e.preventDefault();
        const demoUser = { username: "guest", password: "password" };
        this.props.login(demoUser)
            .then(() => this.props.history.push('/review_index'));
    }

    renderErrors() {
        return (
            <ul className="errors-ul">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                        {/* <FlashMessage duration={5000}>{error}</FlashMessage> */}
                    </li>
                ))}
            </ul>
        );
    }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps)
    //     this.props.recieveErrors()
        // if (this.props.errors.length > 0)
    // }

    render(){
        return(
            <div className="session-modal">
            <form className='session-form' onSubmit={this.handleSubmit}>
                {this.renderErrors()}

                <label> Username</label>
                    <input 
                        
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                
                <label>Password</label>
                    <input 
                        type='password'
                        value={this.password}
                        onChange={this.update('password')}
                    />
                <p></p>

                <button type='submit'>Log in!</button>
                {/* <p> ~ or ~ </p> */}
                <button onClick={this.loginDemoUser}>Log in as Demo User</button>
            </form>
            </div>
        )
    }
}

export default LoginForm;