import "./App.css"
import { Layout, Input, Image } from "antd"

const { Header } = Layout

export function App() {
  return (
    <>
      <div className="bg-yellow-50">
        <Header
          className="bg-yellow-600 p-10"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <img
              src="https://cdn.vectorstock.com/i/500p/25/74/paw-logo-cat-dog-animal-pet-footprint-icon-vector-23032574.jpg"
              alt="logo"
              className="w-16 rounded-full mr-10 mt-1"
            />
          </div>
          <Input
            className="bg-yellow-50 p-3"
            placeholder="Pesquise por artigos"
          ></Input>
          <div>
            <img
              src="https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw"
              alt="avatar"
              className="w-16 rounded-full mt-1 ml-10"
            />
          </div>
        </Header>
        <div className="flex">
          <div className="mt-10 ml-20 bg-yellow-50">
            <Image
              width={803}
              height={405}
              src="https://hips.hearstapps.com/hmg-prod/images/cat-instagram-captions-64ff2dfa47e9a.jpg?crop=1xw:0.84375xh;center,top"
            />
            <h1 className="text-4xl mt-7">Seriam os gatos astronautas?</h1>
            <p className="w-[803px] text-base mt-10">
              Os gatos são animais fascinantes e cercados de mistérios. De
              temperamento independente e misterioso, esses felinos são
              conhecidos por sua agilidade, elegância e um comportamento muitas
              vezes imprevisível. Contudo, recentemente, uma teoria tem ganhado
              espaço na internet e entre teóricos de conspiração: seriam os
              gatos astronautas? A teoria sugere que os gatos não são animais
              terrestres, mas sim seres extraterrestres enviados para realizar
              uma missão específica em nosso planeta. Há relatos históricos que
              apontam para o fato de que os gatos eram considerados seres
              sagrados em diferentes culturas e até mesmo associados a figuras
              divinas. Isso poderia indicar que os gatos têm uma origem muito
              mais mística do que se pensava anteriormente.
            </p>
            <br />
            <p className="w-[803px] text-base">
              Além disso, há teóricos que acreditam que os felinos possuem
              habilidades telepáticas e são capazes de se comunicar com outras
              espécies alienígenas. Essa crença baseia-se em relatos de pessoas
              que afirmam terem visto gatos reagindo a estímulos que não são
              perceptíveis aos seres humanos, ou até mesmo se comportando de
              maneira incomum durante eventos astronômicos, como uma aurora
              boreal. Esses e outros indícios foram interpretados como sinais de
              que os gatos seriam seres interplanetários.
            </p>
          </div>
          <aside className="mt-10 ml-40 mr-16 w-[600px] ">
            <h1 className="text-4xl mb-10 ml-20">Artigos relacionados</h1>
            <div className="flex gap-2 mb-10">
              <Image
                width={140}
                height={120}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQ1NkYNDqDjD1M8nM15lhnUF_wA3k3keFNKOms8alEA&s"
              />
              <div>
                <h1 className="text-2xl">Sábado preguiçoso</h1>
                <p className="w-[225px]">
                  Descubra atividades interessantes para fazer com seu pet
                  durante os finais de semana.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-10">
              <Image
                width={140}
                height={120}
                src="https://i.em.com.br/vb3ehMkKNLrphBQBlSwI9B3h8WQ=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/11/27/1326255/balaio-de-gatos_1_64956.jpg"
              />
              <div>
                <h1 className="text-2xl">Balaio de gatos</h1>
                <p className="w-[225px]">
                  Como evitar confusões entre seus gatíneos e acostumá-los desde
                  filhotes.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-10">
              <Image
                width={140}
                height={120}
                src="https://petpillow.com.br/wp-content/uploads/2023/08/Cores-de-gatos-scaled.jpeg"
              />
              <div>
                <h1 className="text-2xl">Cartela de cores</h1>
                <p className="w-[225px]">
                  Seu gato é inverno intenso? Verão profundo? Descubra as cores
                  que mais combinam com seu bichano.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-10">
              <Image
                width={140}
                height={120}
                src="https://blog.polipet.com.br/wp-content/uploads/2023/03/gato-frio.png"
              />
              <div>
                <h1 className="text-2xl">Os gatos sentem frio?</h1>
                <p className="w-[225px]">
                  Preparem-se para a frente fria que vem para o país da melhor
                  maneira possível.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-10">
              <Image
                width={140}
                height={120}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGnwr_gjVMQH7Tcu_H0g8W3iHiuWLlyfDpMtRgdO1fQ&s"
              />
              <div>
                <h1 className="text-2xl">Conheça o Moacir</h1>
                <p className="w-[225px]">
                  Moacir é o gatinho da semana do nosso blog. Venha conhecer sua
                  história de superação.
                </p>
              </div>
            </div>
          </aside>
        </div>
        <footer className="p-4 bg-yellow-600 text-center text-white">
          © 2023 - Rocketseat Explorer
        </footer>
      </div>
    </>
  )
}
