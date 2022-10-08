const hobbyFeatures = [
  "Área de meus registros",
  "Dashboard",
  "Acesso de 5 colaboradores",
];
const scaleFeatures = [
  "Área de meus registros",
  "Dashboard",
  "Acesso de 20 colaboradores",
  "Suporte exclusivo",
];
const growthFeatures = [
  "Área de meus registros",
  "Dashboard",
  "Acesso de 10 colaboradores",
  "Suporte exclusivo",
  "Email corporativo",
];

export default function Example() {
  return (
    <div className="mb-20">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Encontre o plano perfeito
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Escolha o plano que melhor se encaixa na sua empresa e faça sua
            assinatura, dentro de 72h iremos liberar seus acessos.
          </p>
        </div>
      </div>

      <div className="mt-16 lg:mt-20 ">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div id="plans" className="mx-auto max-w-fit lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none opacity-50">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-1 flex-col rounded-lg border-2 border-indigo-600">
                    <div className="text-white px-6 my-10">
                      <div className="text-center">
                        <h3
                          className="text-center text-2xl font-medium "
                          id="tier-hobby"
                        >
                          Plano Ouro
                        </h3>
                        <div className="mt-4 mb-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight">
                            <span className="font-extrabold text-6xl">
                              {" "}
                              R$ 100
                            </span>
                          </span>
                        </div>
                        <span className="text-xl font-medium opacity-50">
                          Uso de 20 colaboradores
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <img
                                src="/assets/check.svg"
                                alt="check_icon"
                                className="h-"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-white">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-fit lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 translate-y-px transform">
                    <div className="flex -translate-y-1/2 transform justify-center"></div>
                  </div>
                  <div className="rounded-t-lg text-white px-6 pt-12 pb-5">
                    <div className="text-center">
                      <h3
                        className="text-center text-xl font-normal tracking-tight sm:-mx-6"
                        id="tier-growth"
                      >
                        Plano Platina
                      </h3>
                      <div className="mt-4 mb-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight sm:text-6xl">
                          <span className="font-extrabold text-6xl">
                            R$ 200
                          </span>
                        </span>
                      </div>
                      <span className="text-xl font-light items-center opacity-50">
                        Acessos ilimitados
                      </span>
                    </div>
                  </div>
                  <div className="rounded-b-lg px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                    <ul className="space-y-4 md:mx-24">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="flex-shrink-0">
                            <img src="/assets/check.svg" alt="check_icon" />
                          </div>
                          <p className="ml-3 text-base font-medium text-white">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="#"
                          className="block w-full rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-indigo-700"
                          aria-describedby="tier-growth"
                        >
                          Assinar agora
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-fit lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none opacity-50">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-1 flex-col rounded-lg border-2 border-indigo-600">
                    <div className="text-white px-6 my-10">
                      <div className="text-center">
                        <h3
                          className="text-center text-2xl font-medium"
                          id="tier-scale"
                        >
                          Plano Prata
                        </h3>
                        <div className="mt-4 mb-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight">
                            <span className="font-extrabold text-6xl">
                              R$ 50
                            </span>
                          </span>
                        </div>
                        <span className="text-xl font-light items-center opacity-50">
                          Uso de 10 colaboradores
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between text-white p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <img src="/assets/check.svg" alt="check_icon" />
                            </div>
                            <p className="ml-3 text-base font-medium ">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
