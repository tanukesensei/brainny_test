const Logo = () => {
    return (
        <div>
            <img
                src="/assets/whiteFullLogo.svg"
                alt="pontoGo"
                className="h-10 hidden md:block"
            />
            
            <img
                src="/assets/whiteLogo.svg"
                alt="pontoGo"
                className="h-10 md:hidden mx-auto mb-5" 
            />
        </div>
    )
}

export default Logo;