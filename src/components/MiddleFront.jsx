const MiddleFront = () => {
  return (
    <div
      className="flex flex-col md:flex-row my-12
      items-center justify-between
     text-white font-poppins"
    >
      <div className="md:flex items-center">
        <div className="flex flex-col flex-1 pr-0 md:pr-24">
          <p className="text-xl font-light tracking-widest uppercase">
            Esquece o ponto manual
          </p>
          <p className="text-4xl font-extrabold leading-normal pt-2.5 ">
            Chegou a nova realidade para{" "}
            <span className="points-control">Controle de Pontos</span>
          </p>
          <p className="text-lg font-medium pt-4 leading-normal">
            Com o PontoGo seus colaboradores poderão bater seus pontos de forma
            fácil e rápida, possuindo também uma Dashboard intuitiva.
          </p>
          <div className="space-x-5 pt-7">
            <button className="h-12 w-40 text-white plans-button rounded">
              <a className="#">Assinar agora</a>
            </button>
            <button className="h-12 w-40 border rounded">
              <a href="plans">Ver planos</a>
            </button>
          </div>
        </div>

        <div className="flex flex-1">
          <img src="/assets/immersedMan.svg" alt="immersed_man" />
        </div>
      </div>
    </div>
  );
};

export default MiddleFront;
