import MyProfile from "./MyProfile";

export default function SidebarThatsMeProfile() {
  const birthday = new Date(1991, 0, 21);
  const today = new Date();
  const age =
    today.getFullYear() -
    birthday.getFullYear() -
    (today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() < birthday.getDate())
      ? 1
      : 0);

  return (
    <div className="block mb-10">
      <MyProfile
        name="Sven Oliver Berger"
        age={age}
        location="65510 • Idstein"
        status="Praktikant"
        company="WolkenWerk GmbH"
        shortInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias mollitia nemo soluta, libero tempore veritatis numquam aliquam officiis? Doloribus."
        mail="bergersvenoliver@gmail.com"
        phone={15119409788}
      />
    </div>
  );
}
