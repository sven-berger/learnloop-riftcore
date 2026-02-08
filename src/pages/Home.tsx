import Content from "../components/Content";
import Card from "../components/Card";
import GridLayout from "../components/layout/GridLayout";
import H2 from "../components/H2";
import Button from "../components/buttons/ButtonURL";
export default function Home() {
  return (
    <>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis id
        deleniti voluptatem sunt amet cumque commodi illum, blanditiis non, quos
        consequuntur in provident corrupti aperiam ducimus magnam! Quae veniam
        corporis autem et! Commodi officia natus repellat facere, laborum, non
        nihil quas rem illo possimus maiores optio ex obcaecati minima
        temporibus reiciendis quo, ea cum voluptatum veritatis consectetur!
        Accusantium quam nulla molestiae expedita cumque doloribus tempore
        minima at ullam. Dolor exercitationem, voluptatem optio rem aliquid, non
        ad ipsa praesentium similique sint sit, dolore deleniti excepturi? Sequi
        excepturi eius molestiae labore, accusamus cupiditate iure! Ex incidunt
        quasi nulla, autem suscipit tenetur aut officiis necessitatibus aperiam
        rem excepturi iste vitae deserunt perferendis nemo! Dolore blanditiis
        culpa, laboriosam praesentium tempora maiores perferendis natus impedit
        quasi sit molestias magnam, molestiae ratione quam porro ea nihil
        consequuntur autem. Itaque qui voluptates voluptate quas neque,
        provident sequi, consequatur commodi distinctio praesentium nemo atque
        nam dolor nihil, ad fuga. Fuga aperiam sapiente voluptatum aliquam ut,
        minus mollitia quasi, itaque omnis ea ad ullam! Obcaecati repudiandae
        ullam quas quis autem, sit laudantium ea exercitationem repellat. Autem
        obcaecati dignissimos dolor inventore excepturi optio assumenda ipsum
        sapiente dolorem dicta iure vero praesentium ex asperiores, possimus
        veniam ut magnam provident eos aliquid.
      </Content>
      <H2 style="mt-10 mb-8">Meine aktuellen Kenntnisse</H2>
      <GridLayout cols={4}>
        <div>
          <Card image="/images/javascript.png" title="JavaScript">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            <div className="mt-10 flex justify-end">
              <Button
                to="/about/knowledge/#javascript"
                style="bg-amber-400 text-black"
              >
                Mehr erfahren
              </Button>
            </div>
          </Card>
        </div>
        <div>
          <Card image="/images/react.png" title="React">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            <div className="mt-10 flex justify-end">
              <Button to="/about/knowledge/#react" style="bg-sky-400">
                Mehr erfahren
              </Button>
            </div>
          </Card>
        </div>
        <div>
          <Card image="/images/html-css.png" title="Tailwind">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            <div className="mt-10 flex justify-end">
              <Button to="/about/knowledge/#tailwind" style="bg-blue-500">
                Mehr erfahren
              </Button>
            </div>
          </Card>
        </div>
        <div>
          <Card image="/images/php.png" title="PHP">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            <div className="mt-10 flex justify-end">
              <Button to="/about/knowledge/#php" style="bg-indigo-500">
                Mehr erfahren
              </Button>
            </div>
          </Card>
        </div>
      </GridLayout>
    </>
  );
}
