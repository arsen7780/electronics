export default function Login() {
    return (
        <div className="form__container">
            <form>
                <div className="sign__in__container">
                    <h2>Sign in</h2>
                    <span>Username</span>
                    <input type="text" />
                    <span>Password</span>
                    <input type="password" />
                    <a href="/">Forgot password</a>
                    <button>Sign in</button>
                </div>
                <div className="sign__up__container">
                    <h2>Sign up</h2>
                    <span>First name</span>
                    <input type="text" />
                    <span>Last name</span>
                    <input type="text" />
                    <span>Username</span>
                    <input type="text" />
                    <span>Password</span>
                    <input type="password" />
                    <span>Confirm Password</span>
                    <input type="password" />
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

