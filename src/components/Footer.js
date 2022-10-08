const Footer = () => {
    return (
        <>
            <div className="my-10 text-white font-poppins">
                <hr className="opacity-50" />
                <div className="
                    flex flex-col md:flex-row 
                    justify-center 
                    items-center 
                    md:items-start 
                    mx-auto py-5 mb-2 md:mb-0">

                    <div className=" md:mr-14 space-y-2 mb-2 md:mb-0">
                        <p className="text-xl font-bold">@ponto</p>
                        <p className="text-base font-normal leading-6">Se conecta com a gente</p>
                    </div>

                    <div className="flex gap-10">
                        <img src="/assets/instagram.svg" alt="instagram_icon" />
                        <img src="/assets/facebook.svg" alt="_icon" />
                        <img src="/assets/linkedin.svg" alt="_icon" />
                    </div>

                </div>
                <hr className="opacity-50" />

                <div className="flex h-20 py-16 text-center items-center">
                    <hr className="md:flex md:flex-1 hidden opacity-40" />
                    <p className="flex flex-1 justify-center">PontoGo - Todos direitos reservados</p>
                    <hr className="md:flex md:flex-1 hidden opacity-40" />

                </div>
            </div>
        </>
    )
}

export default Footer;