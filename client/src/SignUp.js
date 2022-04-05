function SignUp(){
    return(
        <div>
            <h1>Sign Up for NYC Drinkers Society</h1>
            <p>By logging in, you agree to NYC Drinkers Society Terms of Service and Privacy Policy.</p>
            <form>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>
    );
}

export default SignUp;